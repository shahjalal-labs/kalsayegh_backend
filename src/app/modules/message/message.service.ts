import { Message } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { uploadInSpace } from "../../../helpers/uploadInSpace";

export const createManyMessage = async (data: Message) => {
  await prisma.message.create({ data });
  return;
};

const generateUrls = async (files: { urls: Express.Multer.File[] }) => {
  const processedFiles = await Promise.all(
    files.urls.map(async (file) => {
      const url = await uploadInSpace(file, "messages");
      return { originalName: file.originalname, url };
    }),
  );
  return processedFiles;
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
  generateUrls,
  getAllMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
};
