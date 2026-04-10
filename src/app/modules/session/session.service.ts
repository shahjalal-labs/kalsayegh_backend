import { MarkStatus, Session } from "@prisma/client";
import {
  addDays,
  eachDayOfInterval,
  differenceInMilliseconds,
  endOfDay,
  endOfWeek,
  format,
  startOfDay,
  startOfWeek,
} from "date-fns";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";

const formatHoursToHHMM = (hours: number) => {
  const totalMinutes = Math.round(hours * 60);
  const formattedHours = Math.floor(totalMinutes / 60)
    .toString()
    .padStart(2, "0");
  const formattedMinutes = (totalMinutes % 60).toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};

const clockIn = async (data: Session, userId: string) => {
  const userInfo = await prisma.user.findUnique({ where: { id: userId } });
  if (!userInfo) throw new ApiError(404, "User not found");
  if (userInfo.status === "INACTIVE")
    throw new ApiError(
      403,
      "Your account is inactive. Please contact an administrator.",
    );
  if (userInfo.status === "BLOCKED")
    throw new ApiError(
      403,
      "Your account is blocked. Please contact an administrator.",
    );

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
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekEnd = endOfWeek(new Date(), { weekStartsOn: 1 });

  const results = await prisma.session.findMany({
    where: {
      userId,
      clockInAt: {
        gte: weekStart,
        lte: weekEnd,
      },
    },
    orderBy: { createdAt: "desc" },
  });
  return results;
};

const mySessionsByGrouping = async (userId: string) => {
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekEnd = endOfWeek(new Date(), { weekStartsOn: 1 });

  const results = await prisma.session.findMany({
    where: {
      userId,
      clockInAt: {
        gte: weekStart,
        lte: weekEnd,
      },
    },
    orderBy: { clockInAt: "asc" },
  });

  const groupedSessions = eachDayOfInterval({
    start: weekStart,
    end: weekEnd,
  }).reduce(
    (acc, day) => {
      const dayKey = format(day, "yyyy-MM-dd");
      acc[dayKey] = {
        day: format(day, "EEEE"),
        date: format(day, "MMM dd"),
        totalHours: 0,
        sessions: [],
      };
      return acc;
    },
    {} as Record<
      string,
      {
        day: string;
        date: string;
        totalHours: number;
        sessions: Array<{
          id: string;
          type: string;
          clockInAt: Date;
          clockOutAt: Date | null;
          hrs: string;
          notes: string | null;
          markStatus: MarkStatus;
        }>;
      }
    >,
  );

  results.forEach((session) => {
    const dayKey = format(session.clockInAt, "yyyy-MM-dd");
    const hours = session.clockOutAt
      ? Math.max(
          0,
          differenceInMilliseconds(session.clockOutAt, session.clockInAt),
        ) /
        (1000 * 60 * 60)
      : 0;

    groupedSessions[dayKey].sessions.push({
      id: session.id,
      type:
        session.sessionType === "Regular_Hours"
          ? "Regular"
          : session.sessionType === "PW_Hours"
            ? "PW Hours"
            : session.sessionType,
      clockInAt: session.clockInAt,
      clockOutAt: session.clockOutAt,
      hrs: session.clockOutAt ? formatHoursToHHMM(hours) : "Active",
      notes: session.notes,
      markStatus: session.markStatus,
    });

    if (session.clockOutAt) {
      groupedSessions[dayKey].totalHours += hours;
    }
  });

  return {
    thisWeek: Object.values(groupedSessions).map((day) => ({
      ...day,
      totalHours: formatHoursToHHMM(day.totalHours),
    })),
  };
};

const weeklyOverview = async (userId: string) => {
  const DAILY_REGULAR_HOUR_LIMIT = 8;
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekEnd = endOfWeek(new Date(), { weekStartsOn: 1 });

  const sessions = await prisma.session.findMany({
    where: {
      userId,
      clockInAt: {
        gte: weekStart,
        lte: weekEnd,
      },
    },
    select: {
      sessionType: true,
      clockInAt: true,
      clockOutAt: true,
    },
  });

  const dailyTypeHours = sessions.reduce(
    (acc, session) => {
      if (!session.clockOutAt) {
        return acc;
      }

      const sessionEnd = session.clockOutAt;
      let segmentStart = session.clockInAt;

      // Split sessions that span midnight so daily OT stays accurate.
      while (segmentStart < sessionEnd) {
        const currentDayEnd = endOfDay(segmentStart);
        const segmentEnd =
          currentDayEnd < sessionEnd ? currentDayEnd : sessionEnd;
        const hours =
          Math.max(0, differenceInMilliseconds(segmentEnd, segmentStart)) /
          (1000 * 60 * 60);

        const dayKey = format(segmentStart, "yyyy-MM-dd");

        if (!acc[dayKey]) {
          acc[dayKey] = { regularHours: 0, pwHours: 0 };
        }

        if (session.sessionType === "Regular_Hours") {
          acc[dayKey].regularHours += hours;
        }

        if (session.sessionType === "PW_Hours") {
          acc[dayKey].pwHours += hours;
        }

        segmentStart = addDays(startOfDay(segmentStart), 1);
      }

      return acc;
    },
    {} as Record<string, { regularHours: number; pwHours: number }>,
  );

  const totals = Object.values(dailyTypeHours).reduce(
    (acc, day) => {
      acc.totalRegularHours += Math.min(
        day.regularHours,
        DAILY_REGULAR_HOUR_LIMIT,
      );
      acc.totalRegularOTHours += Math.max(
        0,
        day.regularHours - DAILY_REGULAR_HOUR_LIMIT,
      );

      acc.totalPWHours += Math.min(day.pwHours, DAILY_REGULAR_HOUR_LIMIT);
      acc.totalPWOTHours += Math.max(0, day.pwHours - DAILY_REGULAR_HOUR_LIMIT);

      return acc;
    },
    {
      totalRegularHours: 0,
      totalRegularOTHours: 0,
      totalPWHours: 0,
      totalPWOTHours: 0,
    },
  );

  return {
    totalRegularHours: Number(totals.totalRegularHours.toFixed(2)),
    totalRegularOTHours: Number(totals.totalRegularOTHours.toFixed(2)),
    totalPWHours: Number(totals.totalPWHours.toFixed(2)),
    totalPWOTHours: Number(totals.totalPWOTHours.toFixed(2)),
  };
};

const weeklySubmitTimesheet = async (userId: string) => {
  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekEnd = endOfWeek(new Date(), { weekStartsOn: 1 });

  await prisma.session.updateMany({
    where: {
      userId,
      clockInAt: {
        gte: weekStart,
        lte: weekEnd,
      },
    },
    data: {
      markStatus: "SUBMITTED",
    },
  });

  return;
};

const addNotes = async (
  payload: { sessionIds: string[]; notes: string },
  userId: string,
) => {
  const { sessionIds, notes } = payload;

  await prisma.session.updateMany({
    where: {
      id: { in: sessionIds },
      userId,
    },
    data: { notes },
  });
  return;
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
  mySessionsByGrouping,
  weeklyOverview,
  getAllSessions,
  getSessionById,
  updateSession,
  deleteSession,
  weeklySubmitTimesheet,
  addNotes,
};
