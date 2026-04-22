import { WebSocket, WebSocketServer } from "ws";
import { Request } from "express";
import prisma from "../../../shared/prisma";
import redisClient from "../../../helpers/redis";
import { verifyWebSocketToken } from "./socket.verifyToken";

interface CustomWebSocket extends WebSocket {
  userId?: string;
}

const roomUsers = new Map<string, Set<WebSocket>>();
const connectedUsers = new Set<CustomWebSocket>();
let wss;

export function setupWebSocketServer(server: any) {
  wss = new WebSocketServer({ server });

  const getConnectedUserIds = () =>
    new Set(
      Array.from(connectedUsers)
        .map((ws) => ws.userId)
        .filter((id): id is string => Boolean(id)),
    );

  const getUserMap = async (memberIds: string[]) => {
    if (memberIds.length === 0) return new Map<string, any>();
    const users = await prisma.user.findMany({
      where: { id: { in: memberIds } },
      select: { id: true, fullName: true, profileImage: true },
    });
    return new Map(users.map((user) => [user.id, user]));
  };

  const getMessageReactions = async (messageIds: string[]) => {
    if (messageIds.length === 0) return new Map<string, any[]>();

    const reactions = await prisma.reaction.findMany({
      where: { messageId: { in: messageIds } },
      select: { messageId: true, userId: true, reactionIcon: true },
    });

    const reactionMap = new Map<string, any[]>();
    for (const reaction of reactions) {
      const existing = reactionMap.get(reaction.messageId) || [];
      existing.push({
        userId: reaction.userId,
        reaction: reaction.reactionIcon,
      });
      reactionMap.set(reaction.messageId, existing);
    }

    return reactionMap;
  };

  const attachReactionsToMessages = async (messages: any[]) => {
    const messageIds = messages
      .map((msg) => msg.id)
      .filter((id): id is string => Boolean(id));
    const reactionMap = await getMessageReactions(messageIds);

    return messages.map((message) => ({
      ...message,
      reactions: reactionMap.get(message.id) || [],
    }));
  };

  const buildConversations = async (targetUserId: string) => {
    const rooms = await prisma.room.findMany({
      where: { memberIds: { has: targetUserId } },
      orderBy: { updatedAt: "desc" },
    });

    const memberIds = Array.from(
      new Set(rooms.flatMap((room) => room.memberIds)),
    );
    const userMap = await getUserMap(memberIds);
    const connectedUserIds = getConnectedUserIds();

    return Promise.all(
      rooms.map(async (room) => {
        const redisKey = `room:${room.id}:messages`;
        const unreadKey = `room:${room.id}:unread:${targetUserId}`;

        const [latestRaw, unreadCountStr] = await Promise.all([
          redisClient.lrange(redisKey, -1, -1),
          redisClient.get(unreadKey),
        ]);

        const latestMsg =
          latestRaw.length > 0 ? JSON.parse(latestRaw[0]) : null;
        const lastMessage = latestMsg
          ? {
              content:
                latestMsg.content ??
                (latestMsg.fileUrl?.length ? "sent file" : null),
              createdAt: latestMsg.createdAt,
              senderId: latestMsg.senderId ?? null,
            }
          : null;

        const members = room.memberIds.map((memberId) => {
          const member = userMap.get(memberId);
          return {
            id: memberId,
            fullName: member?.fullName ?? null,
            profileImage: member?.profileImage ?? null,
            isActive: connectedUserIds.has(memberId),
          };
        });

        const partner =
          room.memberIds.length === 2
            ? members.find((m) => m.id !== targetUserId) || null
            : null;

        return {
          roomId: room.id,
          roomType: room.roomType,
          roomName: room.roomName,
          roomPhoto: room.roomPhoto,
          members,
          partner,
          lastMessage,
          unreadCount: parseInt(unreadCountStr || "0", 10),
        };
      }),
    );
  };

  wss.on("connection", async (ws: CustomWebSocket, req: Request) => {
    const baseUrl = `http://${req.headers.host || "localhost"}`;
    const url = new URL(req.url || "/", baseUrl);
    let authToken =
      url.searchParams.get("x-token") ?? (req.headers["x-token"] as string);

    const decoded = verifyWebSocketToken(ws, authToken);
    if (!decoded) {
      ws.close();
      return;
    }

    const userId = decoded.id;
    ws.userId = userId;
    connectedUsers.add(ws);

    let roomId: string | null = null;

    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) ws.ping();
    }, 30000);

    ws.send(
      JSON.stringify({
        message: "Welcome to the WebSocket server!",
      }),
    );

    ws.on("message", async (message: any) => {
      try {
        const {
          type,
          roomId: incomingRoomId,
          receiverId,
          content,
          fileUrl,
          messageId,
          reaction,
        } = JSON.parse(message.toString());

        switch (type) {
          case "conversation": {
            const conversations = await buildConversations(userId);
            ws.send(
              JSON.stringify({
                type: "conversation",
                conversations,
              }),
            );
            break;
          }

          case "subscribe": {
            let targetRoomId = incomingRoomId as string | undefined;

            if (!targetRoomId && receiverId) {
              const existingRoom = await prisma.room.findFirst({
                where: {
                  memberIds: { hasEvery: [userId, receiverId] },
                  roomName: null,
                },
              });

              const createdRoom = existingRoom
                ? null
                : await prisma.room.create({
                    data: {
                      roomName: null,
                      roomPhoto: null,
                      creatorId: userId,
                      memberIds: [userId, receiverId],
                    },
                  });

              targetRoomId = (createdRoom || existingRoom)?.id;
            }

            if (!targetRoomId) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "roomId or receiverId is required",
                }),
              );
            }

            const room = await prisma.room.findUnique({
              where: { id: targetRoomId },
              select: { memberIds: true },
            });

            if (!room || !room.memberIds.includes(userId)) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "Room not found or access denied",
                }),
              );
            }

            roomId = targetRoomId;

            const unreadKey = `room:${roomId}:unread:${userId}`;
            await redisClient.set(unreadKey, "0");

            roomUsers.forEach((clients, key) => {
              if (clients.has(ws)) {
                clients.delete(ws);
                if (clients.size === 0) roomUsers.delete(key);
              }
            });

            if (!roomUsers.has(roomId)) {
              roomUsers.set(roomId, new Set());
            }
            roomUsers.get(roomId)?.add(ws);

            const redisKey = `room:${roomId}:messages`;
            const redisRaw = await redisClient.lrange(redisKey, -15, -1);
            let messages = redisRaw.reverse().map((msg) => JSON.parse(msg));

            const hasMissingIds = messages.some(
              (msg) => !msg?.id || typeof msg.id !== "string",
            );

            if (messages.length === 0 || hasMissingIds) {
              const dbMessages = await prisma.message.findMany({
                where: { roomId },
                orderBy: { createdAt: "desc" },
                take: 15,
              });

              messages = dbMessages.map((msg) => ({
                id: msg.id,
                content: msg.content,
                senderId: msg.senderId,
                roomId: msg.roomId,
                fileUrl: msg.fileUrl,
                createdAt: msg.createdAt.toISOString(),
                updatedAt: msg.updatedAt.toISOString(),
              }));
            }

            const messagesWithReactions =
              await attachReactionsToMessages(messages);

            ws.send(
              JSON.stringify({
                type: "subscribe",
                roomId,
                messages: messagesWithReactions,
              }),
            );

            break;
          }

          case "send-message": {
            if (!roomId) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "You are not subscribed to any room",
                }),
              );
            }

            const room = await prisma.room.findUnique({
              where: { id: roomId },
              select: { memberIds: true },
            });

            if (!room || !room.memberIds.includes(userId)) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "Room not found or access denied",
                }),
              );
            }

            const senderInfo = await prisma.user.findUnique({
              where: { id: userId },
              select: { id: true, fullName: true, profileImage: true },
            });

            const createdMessage = await prisma.message.create({
              data: {
                roomId,
                senderId: userId,
                content: content ?? null,
                fileUrl: Array.isArray(fileUrl) ? fileUrl : [],
              },
            });

            const messagePayload = {
              id: createdMessage.id,
              content: createdMessage.content,
              senderId: userId,
              sender: senderInfo
                ? {
                    id: senderInfo.id,
                    fullName: senderInfo.fullName,
                    profileImage: senderInfo.profileImage,
                  }
                : null,
              roomId,
              fileUrl: createdMessage.fileUrl,
              createdAt: createdMessage.createdAt.toISOString(),
              updatedAt: createdMessage.updatedAt.toISOString(),
              reactions: [],
            };

            const redisKey = `room:${roomId}:messages`;
            await redisClient.rpush(redisKey, JSON.stringify(messagePayload));
            await redisClient.ltrim(redisKey, -30, -1);

            const pipeline = redisClient.multi();
            for (const memberId of room.memberIds) {
              if (memberId !== userId) {
                pipeline.incr(`room:${roomId}:unread:${memberId}`);
              }
            }
            await pipeline.exec();

            await prisma.room.update({
              where: { id: roomId },
              data: { updatedAt: new Date() },
            });

            roomUsers.get(roomId)?.forEach((client) => {
              if (client.readyState === WebSocket.OPEN) {
                client.send(
                  JSON.stringify({
                    type: "receive-message",
                    message: messagePayload,
                    roomId,
                  }),
                );
              }
            });

            for (const memberId of room.memberIds) {
              const target = Array.from(connectedUsers).find(
                (client) => client.userId === memberId,
              );

              if (target) {
                const conversations = await buildConversations(memberId);
                target.send(
                  JSON.stringify({
                    type: "conversation",
                    conversations,
                  }),
                );
              }
            }

            break;
          }

          case "reaction": {
            if (!roomId) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "You are not subscribed to any room",
                }),
              );
            }

            if (!messageId || typeof messageId !== "string") {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "messageId is required",
                }),
              );
            }

            const messageRecord = await prisma.message.findUnique({
              where: { id: messageId },
              select: { id: true, roomId: true },
            });

            if (!messageRecord || messageRecord.roomId !== roomId) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "Message not found in subscribed room",
                }),
              );
            }

            const normalizedReaction =
              typeof reaction === "string" ? reaction.trim() : "";

            const existingReaction = await prisma.reaction.findFirst({
              where: { messageId, userId },
              select: { id: true, reactionIcon: true },
            });

            if (!normalizedReaction) {
              if (existingReaction) {
                await prisma.reaction.delete({
                  where: { id: existingReaction.id },
                });
              }
            } else if (existingReaction?.reactionIcon === normalizedReaction) {
              await prisma.reaction.delete({
                where: { id: existingReaction.id },
              });
            } else if (existingReaction) {
              await prisma.reaction.update({
                where: { id: existingReaction.id },
                data: { reactionIcon: normalizedReaction },
              });
            } else {
              await prisma.reaction.create({
                data: {
                  messageId,
                  userId,
                  reactionIcon: normalizedReaction,
                },
              });
            }

            const reactionsRaw = await prisma.reaction.findMany({
              where: { messageId },
              select: { userId: true, reactionIcon: true },
            });

            const reactions = reactionsRaw.map((item) => ({
              userId: item.userId,
              reaction: item.reactionIcon,
            }));

            roomUsers.get(roomId)?.forEach((client) => {
              if (client.readyState === WebSocket.OPEN) {
                client.send(
                  JSON.stringify({
                    type: "update-reactions",
                    messageId,
                    roomId,
                    reactions,
                  }),
                );
              }
            });

            break;
          }

          default:
            ws.send(
              JSON.stringify({
                type: "error",
                message: "Invalid message type",
              }),
            );
        }
      } catch (err: unknown) {
        if (err instanceof SyntaxError) {
          ws.send(JSON.stringify({ type: "error", message: "Bad JSON" }));
        } else if (err instanceof Error) {
          ws.send(JSON.stringify({ type: "error", message: err.message }));
        } else {
          ws.send(
            JSON.stringify({ type: "error", message: "Unexpected error" }),
          );
        }
      }
    });

    ws.on("close", async () => {
      connectedUsers.delete(ws);

      if (roomId) {
        const clients = roomUsers.get(roomId);
        clients?.delete(ws);
        if (clients?.size === 0) roomUsers.delete(roomId);
      }
      clearInterval(interval);
    });
  });
}

export const socket = { wss, roomUsers };
