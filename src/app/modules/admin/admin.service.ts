import prisma from "../../../shared/prisma";

import { SessionType, UserRole } from "@prisma/client";
import {
  startOfDay,
  endOfDay,
  differenceInMinutes,
  format,
  isWithinInterval,
  subDays,
  eachDayOfInterval,
  startOfWeek,
  eachWeekOfInterval,
  subWeeks,
  endOfWeek,
  startOfMonth,
  subMonths,
  eachMonthOfInterval,
  endOfMonth,
  addDays,
} from "date-fns";

// Helper to calculate duration in hours (decimal)
const calculateHours = (clockIn: Date, clockOut: Date | null): number => {
  const out = clockOut || new Date();
  const diffMinutes = differenceInMinutes(out, clockIn);
  return parseFloat((diffMinutes / 60).toFixed(2));
};

// Helper to format time as "hh:mm AM/PM"
const formatClockIn = (date: Date | null): string | null => {
  if (!date) return null;
  return format(date, "hh:mm a");
};

export const getEmployeeList = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const now = new Date();

  // 1. Get users
  const users = await prisma.user.findMany({
    where: { role: UserRole.WORKER },
    select: {
      id: true,
      fullName: true,
      email: true,
      status: true,
    },
    skip,
    take: limit,
    orderBy: { createdAt: "desc" },
  });

  if (!users.length) {
    return { data: [], meta: { page, limit, total: 0, totalPages: 0 } };
  }

  const userIds = users.map((u) => u.id);

  // 2. Today range
  const todayStart = startOfDay(now);
  const tomorrowStart = startOfDay(addDays(now, 1));

  // 3. Get sessions (single query)
  const sessions = await prisma.session.findMany({
    where: {
      userId: { in: userIds },
      createdAt: { gte: todayStart, lt: tomorrowStart },
    },
    select: {
      userId: true,
      sessionType: true,
      clockInAt: true,
      clockOutAt: true,
    },
  });

  // 4. Group sessions
  const sessionsByUser = new Map<string, typeof sessions>();
  for (const s of sessions) {
    if (!sessionsByUser.has(s.userId)) {
      sessionsByUser.set(s.userId, []);
    }
    sessionsByUser.get(s.userId)!.push(s);
  }

  // 5. Process users (single loop per user)
  const data = users.map((user) => {
    const userSessions = sessionsByUser.get(user.id) || [];

    let regularHours = 0;
    let pwHours = 0;
    let earliestClockIn: Date | null = null;

    for (const s of userSessions) {
      const hours = calculateHours(s.clockInAt, s.clockOutAt);

      // accumulate hours
      if (s.sessionType === SessionType.Regular_Hours) {
        regularHours += hours;
      } else if (s.sessionType === SessionType.PW_Hours) {
        pwHours += hours;
      }

      // track earliest clock-in (single logic)
      if (!earliestClockIn || s.clockInAt < earliestClockIn) {
        earliestClockIn = s.clockInAt;
      }
    }

    // overtime
    let overtime = 0;
    if (regularHours > 8) {
      overtime = regularHours - 8;
    } else if (regularHours === 0 && pwHours > 8) {
      overtime = pwHours - 8;
    }

    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      regularHours: regularHours.toFixed(2),
      pwHours: pwHours.toFixed(2),
      clockIn: formatClockIn(earliestClockIn),
      overtime,
      status: user.status,
    };
  });

  // 6. Count
  const total = await prisma.user.count({
    where: { role: UserRole.WORKER },
  });

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data,
  };
};

const getAdminOverview = async () => {
  // 1. Fetch all workers
  const workers = await prisma.user.findMany({
    where: { role: UserRole.WORKER },
    select: { id: true },
  });

  if (workers.length === 0) {
    return {
      activeEmployees: 0,
      todaysWorkHours: 0,
      pendingEstimates: 2,
      employStatus: { active: 0, inactive: 0 },
    };
  }

  const workerIds = workers.map((w) => w.id);
  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());

  // 2. Fetch today's sessions for all workers (Regular + PW)
  const todaySessions = await prisma.session.findMany({
    where: {
      userId: { in: workerIds },
      createdAt: { gte: todayStart, lte: todayEnd },
      sessionType: { in: [SessionType.Regular_Hours, SessionType.PW_Hours] },
    },
    select: {
      userId: true,
      clockInAt: true,
      clockOutAt: true,
    },
  });

  // 3. Group sessions by user
  const sessionsByUser = new Map<string, typeof todaySessions>();
  for (const session of todaySessions) {
    if (!sessionsByUser.has(session.userId)) {
      sessionsByUser.set(session.userId, []);
    }
    sessionsByUser.get(session.userId)!.push(session);
  }

  let activeCount = 0;
  let totalHours = 0;

  for (const worker of workers) {
    const userSessions = sessionsByUser.get(worker.id) || [];

    // Check if any session is ongoing (clockOutAt is null)
    const hasOngoing = userSessions.some((s) => s.clockOutAt === null);
    if (hasOngoing) activeCount++;

    // Sum hours for this worker (ongoing session uses current time)
    let workerHours = 0;
    for (const session of userSessions) {
      workerHours += calculateHours(session.clockInAt, session.clockOutAt);
    }
    totalHours += workerHours;
  }

  const inactiveCount = workers.length - activeCount;

  return {
    activeEmployees: activeCount,
    todaysWorkHours: parseFloat(totalHours.toFixed(2)),
    pendingEstimates: 2, // static value
    employStatus: {
      active: activeCount,
      inactive: inactiveCount,
    },
  };
};

// Helper: get total hours for a list of sessions within a specific interval
const sumHoursInInterval = (
  sessions: { clockInAt: Date; clockOutAt: Date | null }[],
  intervalStart: Date,
  intervalEnd: Date,
): number => {
  let total = 0;
  for (const session of sessions) {
    // Check if session's clockInAt falls inside the interval
    if (
      isWithinInterval(session.clockInAt, {
        start: intervalStart,
        end: intervalEnd,
      })
    ) {
      total += calculateHours(session.clockInAt, session.clockOutAt);
    }
  }
  return total;
};

export const getHoursTrend = async (period: string) => {
  // 1. Fetch all workers
  const workers = await prisma.user.findMany({
    where: { role: UserRole.WORKER },
    select: { id: true },
  });

  if (workers.length === 0) {
    return {}; // empty object if no workers
  }

  const workerIds = workers.map((w) => w.id);
  const now = new Date();

  // Determine date range and intervals
  let overallStart: Date;
  let intervals: { start: Date; end: Date; label: string }[] = [];

  switch (period) {
    case "daily": {
      overallStart = startOfDay(subDays(now, 6));
      const days = eachDayOfInterval({ start: overallStart, end: now });
      intervals = days.map((day) => ({
        start: startOfDay(day),
        end: endOfDay(day),
        label: format(day, "EEE"), // Sun, Mon, ...
      }));
      break;
    }
    case "weekly": {
      overallStart = startOfWeek(subWeeks(now, 5), { weekStartsOn: 1 });
      const weeks = eachWeekOfInterval(
        { start: overallStart, end: now },
        { weekStartsOn: 1 },
      );
      intervals = weeks.map((weekStart, idx) => {
        const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });
        return {
          start: weekStart,
          end: weekEnd,
          label: `Week ${idx + 1}`,
        };
      });
      break;
    }
    case "monthly": {
      overallStart = startOfMonth(subMonths(now, 5));
      const months = eachMonthOfInterval({ start: overallStart, end: now });
      intervals = months.map((month) => ({
        start: startOfMonth(month),
        end: endOfMonth(month),
        label: format(month, "MMM yyyy"), // Jan 2025
      }));
      break;
    }
    default:
      throw new Error("Invalid period. Use 'daily', 'weekly', or 'monthly'");
  }

  // 2. Fetch sessions within the overall date range
  const sessions = await prisma.session.findMany({
    where: {
      userId: { in: workerIds },
      sessionType: { in: [SessionType.Regular_Hours, SessionType.PW_Hours] },
      clockInAt: { gte: overallStart, lte: now },
    },
    select: {
      clockInAt: true,
      clockOutAt: true,
    },
  });

  // 3. Build key-value object
  const trendObject: Record<string, number> = {};
  for (const interval of intervals) {
    let total = 0;
    for (const session of sessions) {
      if (
        isWithinInterval(session.clockInAt, {
          start: interval.start,
          end: interval.end,
        })
      ) {
        total += calculateHours(session.clockInAt, session.clockOutAt);
      }
    }
    trendObject[interval.label] = parseFloat(total.toFixed(2));
  }

  return trendObject;
};

export const AdminService = {
  getEmployeeList,
  getAdminOverview,
  getHoursTrend,
};
