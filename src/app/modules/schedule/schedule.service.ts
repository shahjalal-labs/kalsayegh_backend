import { Schedule } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createSchedule = async (data: Schedule) => {
  const isExistingSchedule = await prisma.schedule.findUnique({
    where: {
      scheduleDate: data.scheduleDate,
    },
  });
  if (isExistingSchedule) {
    throw new Error("A schedule already exists for this date.");
  }

  await prisma.schedule.create({ data });
  return;
};

const getAllSchedules = async (query: any) => {
  const { month, year, search } = query;
  const results = await prisma.schedule.findMany({
    where: {
      scheduleDate: {
        gte: month && year ? new Date(year, month - 1, 1) : undefined,
        lt: month && year ? new Date(year, month, 1) : undefined,
      },
      OR: search
        ? [
            { workScope: { contains: search, mode: "insensitive" } },
            { location: { contains: search, mode: "insensitive" } },
          ]
        : undefined,
    },
    orderBy: { scheduleDate: "asc" },
  });
  return results;
};

const getScheduleById = async (id: string) => {
  const result = await prisma.schedule.findUnique({ where: { id } });
  return result;
};

const updateSchedule = async (id: string, data: Partial<Schedule>) => {
  const isExistingSchedule = await prisma.schedule.findUnique({
    where: {
      id,
    },
  });
  if (!isExistingSchedule) throw new Error("No schedule found for this date.");

  await prisma.schedule.update({ where: { id }, data });
  return;
};

const deleteSchedule = async (id: string) => {
  await prisma.schedule.delete({ where: { id } });
  return;
};

export const scheduleServices = {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
};
