import { Message } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const createManyMessage = async (data: Message) => {
  await prisma.message.create({ data });
  return;
};

const getAllMessages = async () => {
  const results = await prisma.message.findMany();
  return results;
};

const getMessageById = async (id: string) => {
  const result = await prisma.message.findUnique({ where: { id } });
  return result;
};

const updateMessage = async (id: string, data: Partial<Message>) => {
  await prisma.message.update({ where: { id }, data });
  return;
};

const deleteMessage = async (id: string) => {
  await prisma.message.delete({ where: { id } });
  return;
};

export const messageServices = {
  createManyMessage,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
};
