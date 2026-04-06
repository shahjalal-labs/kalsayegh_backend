import ApiError from "../../../errors/ApiErrors";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import prisma from "../../../shared/prisma";

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
    select: { memberIds: true, roomName: true },
  });
  if (!isExist) throw new ApiError(404, "Group not found");
  if (!isExist.roomName) throw new ApiError(400, "Room is not a group");

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

export const groupServices = {
  createGroup,
  inviteGroup,
};
