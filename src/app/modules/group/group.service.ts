import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import prisma from "../../../shared/prisma";
import { RoomType } from "@prisma/client";

const createGroup = async (
  userId: string,
  file: Express.Multer.File,
  payload: {
    groupName: string;
    memberIds: string[];
  },
) => {
  let fileUrl = "";
  if (file) {
    fileUrl = await uploadInSpace(file, "group/photos");
  }
  const uniqueMemberIds = Array.from(new Set([...payload.memberIds, userId]));
  await prisma.room.create({
    data: {
      roomName: payload.groupName,
      roomPhoto: fileUrl ?? undefined,
      creatorId: userId,
      memberIds: uniqueMemberIds,
      roomType: "Group",
    },
  });
  return;
};

const inviteGroup = async (
  memberIds: string[],
  groupId: string,
  userId: string,
) => {
  const isExist = await prisma.room.findUnique({
    where: { id: groupId },
    select: { memberIds: true, roomName: true, roomType: true },
  });
  if (!isExist) throw new ApiError(404, "Group not found");

  if (isExist.roomType !== RoomType.Group)
    throw new ApiError(400, "Room is not a group");

  const group = await prisma.room.findUnique({
    where: { id: groupId, creatorId: userId },
    select: { memberIds: true, roomName: true },
  });

  if (!group)
    throw new ApiError(403, "Only group creator permission to join user");
  if (!group.roomName) throw new ApiError(400, "Room is not a group");

  const uniqueIds = Array.from(new Set([...isExist.memberIds, ...memberIds]));

  await prisma.room.update({
    where: { id: groupId },
    data: { memberIds: { set: uniqueIds } },
  });
  return;
};

const removeMember = async (groupId: string, memberId: string) => {
  // 1. Check if group exists and is a Group type
  const group = await prisma.room.findUnique({
    where: { id: groupId },
    select: { roomName: true, memberIds: true, roomType: true },
  });

  if (!group) {
    throw new ApiError(httpStatus.NOT_FOUND, "Group not found");
  }

  if (group.roomType !== RoomType.Group) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Room is not a group");
  }

  // 2. Check if memberId exists in the group
  if (!group.memberIds.includes(memberId)) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "User is not a member of this group",
    );
  }

  // 3. Remove memberId from the array
  const updatedMemberIds = group.memberIds.filter((id) => id !== memberId);

  // 4. Update the group
  await prisma.room.update({
    where: { id: groupId },
    data: { memberIds: { set: updatedMemberIds } },
  });

  return {
    groupId,
    removedMemberId: memberId,
    updatedMemberIds,
  };
};

export const groupServices = {
  createGroup,
  inviteGroup,
  removeMember,
};
