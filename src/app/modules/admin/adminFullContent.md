# adminFullContent.md

## 🌲 Full Project Structure

```bash
/home/sj/web/smt_project/kal_sayegh_backend
├── ecosystem.config.js
├── http-client.env.json
├── logger
│   ├── error.json
│   └── log.json
├── module.js
├── package.json
├── package-lock.json
├── prisma
│   ├── schema.prisma
│   └── seed.ts
├── public
│   └── google.png
├── README.md
├── src
│   ├── app
│   │   ├── middlewares
│   │   │   ├── auth.ts
│   │   │   ├── globalErrorHandler.ts
│   │   │   ├── parseBodyData.ts
│   │   │   └── validateRequest.ts
│   │   ├── modules
│   │   │   ├── admin
│   │   │   │   ├── admin.api.http
│   │   │   │   ├── admin.controller.ts
│   │   │   │   ├── admin.routes.ts
│   │   │   │   ├── admin.service.ts
│   │   │   │   └── admin.validation.ts
│   │   │   ├── auth
│   │   │   │   ├── auth.api.http
│   │   │   │   ├── auth.api.json
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── auth.validation.ts
│   │   │   ├── notification
│   │   │   │   ├── notification.api.http
│   │   │   │   ├── notification.controller.ts
│   │   │   │   ├── notification.routes.ts
│   │   │   │   ├── notification.service.ts
│   │   │   │   └── notification.validation.ts
│   │   │   ├── schedule
│   │   │   │   ├── schedule.controller.ts
│   │   │   │   ├── schedule.routes.ts
│   │   │   │   ├── schedule.service.ts
│   │   │   │   └── schedule.validation.ts
│   │   │   ├── session
│   │   │   │   ├── session.api.http
│   │   │   │   ├── session.controller.ts
│   │   │   │   ├── session.routes.ts
│   │   │   │   ├── session.service.ts
│   │   │   │   └── session.validation.ts
│   │   │   └── user
│   │   │       ├── user.api.http
│   │   │       ├── user.api.json
│   │   │       ├── user.controller.ts
│   │   │       ├── user.route.ts
│   │   │       ├── user.services.ts
│   │   │       └── user.validation.ts
│   │   ├── routes
│   │   │   └── index.ts
│   │   └── socket
│   │       ├── socket.service.ts
│   │       └── verifyToken.ts
│   ├── app.ts
│   ├── bullBoard.ts
│   ├── config
│   │   ├── index.ts
│   │   └── serviceAccount.ts
│   ├── errors
│   │   ├── ApiErrors.ts
│   │   ├── handleClientError.ts
│   │   ├── handleValidationError.ts
│   │   ├── handleZodError.ts
│   │   └── parsePrismaValidationError.ts
│   ├── helpers
│   │   ├── fileUploader.ts
│   │   ├── firebaseAdmin.ts
│   │   ├── generateOtp.ts
│   │   ├── jwtHelpers.ts
│   │   ├── redis.ts
│   │   ├── sendEmail.ts
│   │   └── uploadInSpace.ts
│   ├── interfaces
│   │   ├── common.ts
│   │   ├── error.ts
│   │   └── index.d.ts
│   ├── queues
│   │   └── emailQueue.ts
│   ├── server.ts
│   ├── shared
│   │   ├── catchAsync.ts
│   │   ├── logger.ts
│   │   ├── pagination.ts
│   │   ├── pick.ts
│   │   ├── prisma.ts
│   │   ├── searchFilter.ts
│   │   └── sendResponse.ts
│   ├── types
│   │   └── index.ts
│   └── workers
│       └── emailWorker.ts
├── tsconfig.json
├── uploads
│   └── google.png
└── vercel.json

25 directories, 82 files
```

## 📁 admin Module Tree

```bash
/home/sj/web/smt_project/kal_sayegh_backend/src/app/modules/admin
├── admin.api.http
├── admin.controller.ts
├── admin.routes.ts
├── admin.service.ts
└── admin.validation.ts

1 directory, 5 files
```

## 📋 schema.prisma

```prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id                    String         @id @default(auto()) @map("_id") @db.ObjectId
  fullName              String
  email                 String         @unique
  password              String
  fcmToken              String?
  profileImage          String?
  profession            String?
  role                  UserRole
  status                UserStatus     @default(ACTIVE)
  createdAt             DateTime       @default(now())
  updatedAt             DateTime       @updatedAt
  receivedNotifications Notification[] @relation("notificationRecieve")
  sentNotifications     Notification[] @relation("notificationSend")
  sessions              Session[]

  @@map("users")
}

model PendingUser {
  id           String   @id @default(auto()) @map("_id") @db.ObjectId
  email        String   @unique
  password     String
  role         UserRole
  fullName     String
  profileImage String?
  profession   String

  createdAt DateTime @default(now())

  @@map("pending_users")
}

enum UserStatus {
  ACTIVE
  BLOCKED
  DELETED
}

enum UserRole {
  WORKER
  ESTIMATOR
  ADMIN
  OFFICE_ADMINISTRATOR
}

model Otp {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  otp       String
  expiresAt DateTime

  @@index([expiresAt])
  @@map("otps")
}

model Notification {
  id         String           @id @default(auto()) @map("_id") @db.ObjectId
  title      String
  body       String?
  receiverId String?          @db.ObjectId
  senderId   String?          @db.ObjectId
  type       NotificationType
  isRead     Boolean          @default(false)
  metaData   Json?
  createdAt  DateTime         @default(now())
  updatedAt  DateTime         @updatedAt
  receiver   User?            @relation("notificationRecieve", fields: [receiverId], references: [id], onDelete: Cascade)
  sender     User?            @relation("notificationSend", fields: [senderId], references: [id], onDelete: Cascade)

  @@index([isRead])
  @@map("notifications")
}

enum NotificationType {
  ORDER_CREATED
  CONNECTIONS
  SCHEDULE
  GROUP
  CHECKLISTENDGOAL
  SYSTEM
}

model Session {
  id          String      @id @default(auto()) @map("_id") @db.ObjectId
  userId      String      @db.ObjectId
  sessionType SessionType
  clockInAt   DateTime
  clockOutAt  DateTime?
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
  user        User        @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([createdAt, updatedAt])
  @@map("sessions")
}

enum SessionType {
  Regular_Hours
  PW_Hours
}

model Schedule {
  id           String    @id @default(auto()) @map("_id") @db.ObjectId
  workScope    String
  scheduleDate DateTime  @unique
  location     String?
  startTime    DateTime?
  endTime      DateTime?
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  @@index([startTime, endTime])
  @@map("schedules")
}
```

## 📦 package.json

```json
{
  "name": "kalshayegh_backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start:prod": "node ./dist/server.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "postinstall": "prisma generate"
  },
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  },
  "keywords": [],
  "author": "Ruhul-Amin",
  "license": "ISC",
  "description": "kalshayegh Backend",
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^20.14.11",
    "@types/nodemailer": "^6.4.17",
    "@types/ws": "^8.18.1",
    "concurrently": "^9.2.1",
    "prisma": "^6.17.1",
    "ts-node": "^10.9.2",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.5.3"
  },
  "dependencies": {
    "@aws-sdk/client-s3": "^3.1015.0",
    "@aws-sdk/lib-storage": "^3.837.0",
    "@bull-board/express": "^6.13.0",
    "@prisma/client": "^6.17.1",
    "@types/jsonwebtoken": "^9.0.6",
    "@types/multer": "^1.4.11",
    "bcryptjs": "^2.4.3",
    "bullmq": "^5.59.0",
    "cors": "^2.8.5",
    "date-fns": "^4.1.0",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-basic-auth": "^1.2.1",
    "firebase-admin": "^13.7.0",
    "http-status": "^1.7.4",
    "ioredis": "^5.10.1",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.8.0",
    "multer": "^2.1.1",
    "nodemailer": "^7.0.11",
    "nodemon": "^3.1.4",
    "winston": "^3.19.0",
    "ws": "^8.18.3",
    "zod": "^3.23.8"
  }
}
```

## 🔧 admin.routes.ts

```ts
import { Router } from "express";
import { adminController } from "./admin.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";

const router = Router();

router.get(
  "/employees",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  adminController.getEmployeeList,
);

router.get(
  "/overview",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  adminController.getAdminOverview,
);

router.get("/hours-trend", auth(UserRole.ADMIN), adminController.getHoursTrend);

router.get("/:id", auth(UserRole.ADMIN), adminController.getEmployeeDetails);

export const adminRoutes = router;
```

## 🎮 admin.controller.ts

```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";

const getEmployeeList = catchAsync(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const filter = pick(req.query, ["searchTerm"]);
  const result = await adminService.getEmployeeList(
    Number(page),
    Number(limit),
    filter,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee list fetched successfully",
    data: result,
  });
});

const getAdminOverview = catchAsync(async (_req, res) => {
  const result = await adminService.getAdminOverview();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin overview fetched successfully",
    data: result,
  });
});

const getHoursTrend = catchAsync(async (req, res) => {
  const { period } = req.query;
  const validPeriods = ["daily", "weekly", "monthly"];
  const selectedPeriod = validPeriods.includes(period as string)
    ? (period as string)
    : "daily";

  const result = await adminService.getHoursTrend(selectedPeriod);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Hours trend fetched successfully",
    data: result,
  });
});

const getEmployeeDetails = catchAsync(async (req, res) => {
  const { id: userId } = req.params;
  const result = await adminService.getEmployeeDetails(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee details retrieved successfully",
    data: result,
  });
});

export const adminController = {
  getEmployeeList,
  getAdminOverview,
  getHoursTrend,
  getEmployeeDetails,
};
```

## 🛠️ admin.service.ts

```ts
import prisma from "../../../shared/prisma";

import { Prisma, SessionType, UserRole } from "@prisma/client";
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
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";

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

const getEmployeeList = async (
  page = 1,
  limit = 10,
  filter?: {
    searchTerm?: string;
  },
) => {
  const skip = (page - 1) * limit;
  const now = new Date();

  const whereClause: Prisma.UserWhereInput = {
    role: UserRole.WORKER,
  };

  const andClause: Prisma.UserWhereInput[] = [];

  if (filter?.searchTerm?.trim()) {
    andClause.push({
      OR: [
        {
          fullName: {
            contains: filter.searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: filter.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  if (andClause.length) {
    whereClause.AND = andClause;
  }
  // 1. Get users
  const users = await prisma.user.findMany({
    where: whereClause,
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
    where: whereClause,
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

const getEmployeeDetails = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      profession: true,
      createdAt: true,
    },
  });

  const startWeek = startOfWeek(new Date());
  const endWeek = endOfWeek(new Date());

  const sessions = await prisma.session.findMany({
    where: {
      userId,
      createdAt: {
        gte: startWeek,
        lte: endWeek,
      },
    },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  return user;
};

export const adminService = {
  getEmployeeList,
  getAdminOverview,
  getHoursTrend,
  getEmployeeDetails,
};
```
