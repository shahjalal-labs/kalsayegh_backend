import { Session } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";

const clockIn = async (data: Session, userId: string) => {
  const session = await prisma.session.create({
    data: {
      ...data,
      userId,
    },
  });
  return session;
};

const clockOut = async (sessionId: string, clockOut: Date, userId: string) => {
  const sessionInfo = await prisma.session.findUnique({
    where: { id: sessionId },
  });
  if (!sessionInfo) throw new ApiError(404, "Session not found");

  if (sessionInfo.userId !== userId)
    throw new ApiError(403, "You are not authorized to clock out this session");

  await prisma.session.update({
    where: { id: sessionId },
    data: {
      clockOutAt: clockOut,
    },
  });
  return;
};

const mySessions = async (userId: string) => {
  const results = await prisma.session.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
  return results;
};

const getAllSessions = async () => {
  const results = await prisma.session.findMany();
  return results;
};

const getSessionById = async (id: string) => {
  const result = await prisma.session.findUnique({ where: { id } });
  return result;
};

const updateSession = async (id: string, data: Partial<Session>) => {
  await prisma.session.update({ where: { id }, data });
  return;
};

const deleteSession = async (id: string) => {
  await prisma.session.delete({ where: { id } });
  return;
};

export const sessionServices = {
  clockIn,
  clockOut,
  mySessions,
  getAllSessions,
  getSessionById,
  updateSession,
  deleteSession,
};
