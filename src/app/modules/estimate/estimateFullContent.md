# estimateFullContent.md

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
│   │   │   │   ├── admin.validation.ts
│   │   │   │   └── new.txt
│   │   │   ├── auth
│   │   │   │   ├── auth.api.http
│   │   │   │   ├── auth.api.json
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── auth.validation.ts
│   │   │   ├── estimate
│   │   │   │   ├── estimate.api.http
│   │   │   │   ├── estimate.controller.ts
│   │   │   │   ├── estimate.route.ts
│   │   │   │   ├── estimate.service.ts
│   │   │   │   └── estimate.validation.ts
│   │   │   ├── group
│   │   │   │   ├── group.controller.ts
│   │   │   │   ├── group.routes.ts
│   │   │   │   ├── group.service.ts
│   │   │   │   └── group.validation.ts
│   │   │   ├── jobRequest
│   │   │   │   ├── jobRequest.api.http
│   │   │   │   ├── jobRequest.api.json
│   │   │   │   ├── jobRequest.controller.ts
│   │   │   │   ├── jobRequest.routes.ts
│   │   │   │   ├── jobRequest.service.ts
│   │   │   │   └── jobRequest.validation.ts
│   │   │   ├── message
│   │   │   │   ├── message.controller.ts
│   │   │   │   ├── message.routes.ts
│   │   │   │   ├── message.service.ts
│   │   │   │   └── message.validation.ts
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
│   │   │   ├── socket
│   │   │   │   ├── socket.interface.ts
│   │   │   │   ├── socket.service.ts
│   │   │   │   └── socket.verifyToken.ts
│   │   │   ├── todolist
│   │   │   │   ├── todolist.api.http
│   │   │   │   ├── todolist.api.json
│   │   │   │   ├── todolist.controller.ts
│   │   │   │   ├── todolist.routes.ts
│   │   │   │   ├── todolist.service.ts
│   │   │   │   └── todolist.validation.ts
│   │   │   └── user
│   │   │       ├── user.api.http
│   │   │       ├── user.api.json
│   │   │       ├── user.controller.ts
│   │   │       ├── user.route.ts
│   │   │       ├── user.services.ts
│   │   │       └── user.validation.ts
│   │   └── routes
│   │       └── index.ts
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

30 directories, 109 files
```

## 📁 estimate Module Tree

```bash
/home/sj/web/smt_project/kal_sayegh_backend/src/app/modules/estimate
├── estimate.api.http
├── estimate.controller.ts
├── estimate.route.ts
├── estimate.service.ts
└── estimate.validation.ts

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
  status                UserStatus     @default(INACTIVE)
  createdAt             DateTime       @default(now())
  updatedAt             DateTime       @updatedAt
  receivedNotifications Notification[] @relation("notificationRecieve")
  sentNotifications     Notification[] @relation("notificationSend")
  sessions              Session[]
  clients               Client[]
  todolists             Todolist[]
  estimates             Estimate[]

  @@index([role, status])
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
  PENDING
  ACTIVE
  INACTIVE
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
  SYSTEM
}

model Session {
  id          String      @id @default(auto()) @map("_id") @db.ObjectId
  userId      String      @db.ObjectId
  sessionType SessionType
  clockInAt   DateTime
  clockOutAt  DateTime?
  markStatus  MarkStatus  @default(PENDING)
  notes       String?
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

enum MarkStatus {
  PENDING
  SUBMITTED
  APPROVED
  REJECTED
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

model Room {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  roomName  String?
  roomPhoto String?
  roomType  RoomType  @default(General)
  creatorId String    @db.ObjectId
  memberIds String[]  @db.ObjectId
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  message   Message[]

  @@map("rooms")
}

enum RoomType {
  General
  Group
}

model Message {
  id        String     @id @default(auto()) @map("_id") @db.ObjectId
  roomId    String     @db.ObjectId
  senderId  String     @db.ObjectId
  content   String?
  fileUrl   String[]
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  room      Room       @relation(fields: [roomId], references: [id], onDelete: Cascade)
  reactions Reaction[]

  @@map("messages")
}

model Client {
  id          String     @id @default(auto()) @map("_id") @db.ObjectId
  estimatorId String?    @db.ObjectId
  clientName  String
  email       String     @unique
  phoneNumber String
  address     String
  city        String
  zip         String
  state       String
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  estimator   User?      @relation(fields: [estimatorId], references: [id], onDelete: Cascade)
  estimates   Estimate[]

  @@map("clients")
}

model MarkUp {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId
  name       String   @unique
  percentage Int?
  amount     Int?
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  items      Item[]

  @@map("markups")
}

model Tax {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId
  name       String   @unique
  percentage Int
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  @@map("taxes")
}

model Item {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  itemName    String
  markUpId    String?  @db.ObjectId
  rate        Int
  taxes       String[] @default([])
  description String?
  notes       String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  markUp      MarkUp?  @relation(fields: [markUpId], references: [id], onDelete: SetNull)

  @@map("items")
}

model Estimate {
  id               String         @id @default(auto()) @map("_id") @db.ObjectId
  clientId         String         @db.ObjectId
  estimatorId      String         @db.ObjectId
  estimateName     String
  date             String
  endDate          String
  sideMap          String?
  fileUrls         String[]
  items            TItemType[]
  additionalMarkUp Float?
  grandTotal       Int
  discountAmount   Float?
  depositAmount    Float?
  status           EstimateStatus @default(Pending)
  createdAt        DateTime       @default(now())
  updatedAt        DateTime       @updatedAt
  client           Client         @relation(fields: [clientId], references: [id], onDelete: Cascade)
  estimator        User           @relation(fields: [estimatorId], references: [id], onDelete: Cascade)

  @@map("estimates")
}

enum EstimateStatus {
  Pending
  Approved
  Declined
}

type TItemType {
  id       String @db.ObjectId
  quantity Int
  subTotal Int
}

model Reaction {
  id           String   @id @default(auto()) @map("_id") @db.ObjectId
  messageId    String   @db.ObjectId
  userId       String   @db.ObjectId
  reactionIcon String
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  message      Message  @relation(fields: [messageId], references: [id], onDelete: Cascade)

  @@unique([messageId, userId])
  @@map("reactions")
}

model Todolist {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String
  assignedId  String?  @db.ObjectId
  assignedTo  User?    @relation(fields: [assignedId], references: [id], onDelete: SetNull)
  image       String[]
  isComplete  Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  creatorId   String   @db.ObjectId
}

model Office {
  id          String       @id @default(auto()) @map("_id") @db.ObjectId
  name        String
  address     String
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  creatorId   String       @db.ObjectId
  jobRequests JobRequest[]
}

model JobRequest {
  id              String           @id @default(auto()) @map("_id") @db.ObjectId
  title           String
  officeId        String           @db.ObjectId
  office          Office           @relation(fields: [officeId], references: [id], onDelete: Cascade)
  date            DateTime
  note            String?
  officeLatitude  Float
  officeLongitude Float
  images          String[]
  address         String
  contact         String
  email           String
  status          JobRequestStatus @default(NEW)
  createdAt       DateTime         @default(now())
  updatedAt       DateTime         @updatedAt
  creatorId       String           @db.ObjectId

  @@index([date])
  @@map("job_requests")
}

enum JobRequestStatus {
  NEW
  REVIEWED
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

## 🛠️ estimate.service.ts

```ts
import { Client, Item, MarkUp, Tax } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import { Request } from "express";
import { uploadInSpace } from "../../../helpers/uploadInSpace";

const createEstimateInDB = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload = req.body;
  const estimatorId = req.user.id

  const existingClient = await prisma.client.findUnique({
    where: {
      id: payload.clientId,
    },
  });

  if (!existingClient) {
    throw new ApiError(400, "Client does not exist");
  }

  const items = payload.items;

  for (const item of items) {
    const existingItem = await prisma.item.findUnique({
      where: {
        id: item.id,
      },
    });

    if (!existingItem) {
      throw new ApiError(400, `Item with id ${item.id} does not exist`);
    }
  }

  const processImages = async (
    files: Express.Multer.File[] | undefined,
    folder: string,
  ) => {
    if (!files || files.length === 0) return null;
    return Promise.all(
      files.map((file) => uploadInSpace(file, `courses/${folder}`)),
    );
  };

  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  const newEstimate = await prisma.estimate.create({
    data: {
      clientId: payload.clientId,
      estimatorId: estimatorId,
      date: payload.date,
      endDate: payload.endDate,
      estimateName: payload.estimateName,
      items: payload.items,
      grandTotal: payload.grandTotal,
      additionalMarkUp: payload.additionalMarkUp,
      sideMap: map ? map[0] : undefined,
      fileUrls: urls ? urls : undefined,
      depositAmount: payload.depositAmount,
      discountAmount: payload.discountAmount,
    },
  });

  return newEstimate;
};

const createClientInDB = async (clientData: Client, userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });

  const client = await prisma.client.findUnique({
    where: {
      email: clientData.email,
    },
  });

  if (client) {
    throw new ApiError(400, "Client with this email already exists");
  }

  const newClient = await prisma.client.create({
    data: {
      address: clientData.address,
      city: clientData.city,
      clientName: clientData.clientName,
      email: clientData.email,
      estimatorId: user.role === "ESTIMATOR" ? userId : null,
      phoneNumber: clientData.phoneNumber,
      state: clientData.state,
      zip: clientData.zip,
    },
  });

  return newClient;
};

const getMyClientsFromDB = async (userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });

  const clients = await prisma.client.findMany({
    // where: {
    //   estimatorId: user.role === "ESTIMATOR" ? userId : undefined,
    // },
    select: {
      id: true,
      clientName: true,
      email: true,
      city: true,
      address: true,
      state: true,
      zip: true,
    },
  });
  return clients;
};

const createNewMarkUpInDB = async (payload: MarkUp) => {
  const existingMarkUp = await prisma.markUp.findUnique({
    where: {
      name: payload.name,
    },
  });

  if (existingMarkUp) {
    throw new ApiError(400, "MarkUp with this name already exists");
  }

  if (!payload.percentage && !payload.amount) {
    throw new ApiError(400, "Either percentage or amount must be provided");
  }

  if (payload.percentage && payload.amount) {
    throw new ApiError(400, "Only one of percentage or amount can be provided");
  }

  const newMarkUp = await prisma.markUp.create({
    data: {
      name: payload.name,
      percentage: payload.percentage,
      amount: payload.amount,
    },
  });

  return newMarkUp;
};

const getAllMarkUpsFromDB = async () => {
  const markUps = await prisma.markUp.findMany({
    select: {
      id: true,
      name: true,
      percentage: true,
      amount: true,
    },
  });
  return markUps;
};

const createNewItemInDB = async (payload: Item) => {
  const existingItem = await prisma.item.findFirst({
    where: {
      itemName: payload.itemName,
    },
  });

  if (existingItem) {
    throw new ApiError(400, "Item with this name already exists");
  }

  if (payload.markUpId) {
    const markUp = await prisma.markUp.findUnique({
      where: {
        id: payload.markUpId,
      },
    });
    if (!markUp) {
      throw new ApiError(400, "MarkUp does not exist");
    }
  }

  if (payload.taxes?.length > 0) {
    const existingTaxes = await prisma.tax.findMany({
      where: {
        id: {
          in: payload.taxes,
        },
      },
      select: {
        id: true,
      },
    });

    const existingTaxIds = new Set(existingTaxes.map((tax) => tax.id));
    const invalidTaxIds = payload.taxes.filter(
      (taxId) => !existingTaxIds.has(taxId),
    );

    if (invalidTaxIds.length) {
      throw new ApiError(400, `Invalid tax id(s): ${invalidTaxIds.join(", ")}`);
    }
  }

  const newItem = await prisma.item.create({
    data: {
      itemName: payload.itemName,
      markUpId: payload.markUpId,
      rate: payload.rate,
      description: payload.description,
      notes: payload.notes,
      taxes: payload.taxes,
    },
  });
  return newItem;
};

const getItemListFromDB = async () => {
  const items = await prisma.item.findMany({
    select: {
      id: true,
      itemName: true,
      description: true,
      markUp: {
        select: {
          id: true,
          name: true,
          percentage: true,
          amount: true,
        },
      },
      taxes: true,
    },
  });

  const taxIds = [...new Set(items.flatMap((item) => item.taxes ?? []))];

  const taxList =
    taxIds.length > 0
      ? await prisma.tax.findMany({
          where: {
            id: {
              in: taxIds,
            },
          },
          select: {
            id: true,
            name: true,
            percentage: true,
          },
        })
      : [];

  const taxMap = new Map(taxList.map((tax) => [tax.id, tax]));

  const itemsWithTaxData = items.map((item) => ({
    ...item,
    taxes: (item.taxes ?? []).map((taxId) => taxMap.get(taxId)).filter(Boolean),
  }));

  return itemsWithTaxData;
};

const createNewTaxInDB = async (payload: Tax) => {
  const existingTax = await prisma.tax.findUnique({
    where: {
      name: payload.name,
    },
  });

  if (existingTax) {
    throw new ApiError(400, "Tax with this name already exists");
  }

  if (!payload.percentage) {
    throw new ApiError(400, "Percentage must be provided");
  }

  const newTax = await prisma.tax.create({
    data: {
      name: payload.name,
      percentage: payload.percentage,
    },
  });

  return newTax;
};

const getAllTaxesFromDB = async () => {
  const taxes = await prisma.tax.findMany({
    select: {
      id: true,
      name: true,
      percentage: true,
    },
  });
  return taxes;
};

export const estimateService = {
  createClientInDB,
  getMyClientsFromDB,
  createNewMarkUpInDB,
  getAllMarkUpsFromDB,
  createNewItemInDB,
  createNewTaxInDB,
  getItemListFromDB,
  getAllTaxesFromDB,
  createEstimateInDB,
};
```

## 📝 estimate.validation.ts

```ts
import { cli } from "winston/lib/winston/config";
import { z } from "zod";

const objectId = z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");
export const EstimateStatusEnum = z.enum(["Pending", "Approved", "Declined"]);

const TItemTypeSchema = z.object({
  id: objectId,
  quantity: z.number().int().positive("Quantity must be greater than 0"),
  subTotal: z.number().int().nonnegative("Subtotal must be >= 0"),
});

// 🔸 Main Estimate Schema
const estimateValidationSchema = z.object({
  clientId: objectId,
  estimateName: z.string().min(1, "Estimate name is required"),
  date: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  items: z.array(TItemTypeSchema).min(1, "At least one item is required"),
  additionalMarkUp: z.number().optional(),
  grandTotal: z.number().int().nonnegative("Grand total must be >= 0"),
  discountAmount: z.number().optional(),
  depositAmount: z.number().optional(),
});

const markUpValidationSchema = z.object({
  name: z.string().min(1, "Mark up name is required"),
  percentage: z.number().int().min(0).max(99).optional(),
  amount: z.number().int().min(0).optional(),
});
const taxValidationSchema = z.object({
  name: z.string().min(1, "Tax name is required"),
  percentage: z.number().int().min(0).max(99),
});

const itemValidationSchema = z.object({
  itemName: z.string(),
  markUpId: z.string().optional(),
  rate: z
    .number({
      required_error: "Rate is required",
      invalid_type_error: "Rate must be a number",
    })
    .int("Rate must be an integer")
    .nonnegative("Rate cannot be negative"),
  description: z.string().optional(),
  notes: z.string().optional(),
  taxes: z.array(z.string()).optional(),
});

export const estimateValidation = {
  estimateValidationSchema,
  markUpValidationSchema,
  itemValidationSchema,
  taxValidationSchema,
};
```

## 🎮 estimate.controller.ts

```ts
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { estimateService } from "./estimate.service";

const createEstimate = catchAsync(async (req, res) => {
  const result = await estimateService.createEstimateInDB(req);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Estimate has been created successfully",
    data: result,
  });
});
const createClient = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const result = await estimateService.createClientInDB(req.body, userId);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Client has been created successfully",
    data: result,
  });
});
const myClients = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const clients = await estimateService.getMyClientsFromDB(userId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "My clients retrieved successfully",
    data: clients,
  });
});
const createMarkUp = catchAsync(async (req, res) => {
  const markUpData = req.body;
  const newMarkUp = await estimateService.createNewMarkUpInDB(markUpData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "MarkUp created successfully",
    data: newMarkUp,
  });
});
const allMarkUps = catchAsync(async (req, res) => {
  const markUps = await estimateService.getAllMarkUpsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All markUps retrieved successfully",
    data: markUps,
  });
});

const createItem = catchAsync(async (req, res) => {
  const itemData = req.body;
  const newItem = await estimateService.createNewItemInDB(itemData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Item created successfully",
    data: newItem,
  });
});
const itemList = catchAsync(async (req, res) => {
  const items = await estimateService.getItemListFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Item list retrieved successfully",
    data: items,
  });
});
const createTax = catchAsync(async (req, res) => {
  const taxData = req.body;
  const newTax = await estimateService.createNewTaxInDB(taxData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Tax created successfully",
    data: newTax,
  });
});

const allTaxes = catchAsync(async (req, res) => {
  const taxes = await estimateService.getAllTaxesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All taxes retrieved successfully",
    data: taxes,
  });
});

export const estimateControllers = {
  createClient,
  myClients,
  createMarkUp,
  allMarkUps,
  createItem,
  createTax,
  allTaxes,
  itemList,
  createEstimate,
};
```

## 🔧 estimate.route.ts

```ts
import express from "express";
import auth from "../../middlewares/auth";

import { UserRole } from "@prisma/client";
import { estimateControllers } from "./estimate.controller";
import validateRequest from "../../middlewares/validateRequest";
import { estimateValidation } from "./estimate.validation";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = express.Router();

router.post(
  "/create-estimate",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(estimateValidation.estimateValidationSchema),
  estimateControllers.createEstimate,
);
router.post(
  "/create-client",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.createClient,
);
router.get(
  "/my-clients",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.myClients,
);
router.post(
  "/create-markup",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.markUpValidationSchema),
  estimateControllers.createMarkUp,
);
router.get(
  "/all-markups",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.allMarkUps,
);
router.post(
  "/create-item",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.itemValidationSchema),
  estimateControllers.createItem,
);
router.get(
  "/all-items",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.itemList,
);
router.post(
  "/create-tax",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.taxValidationSchema),
  estimateControllers.createTax,
);
router.get(
  "/all-taxes",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.allTaxes,
);

export const estimateRoutes = router;
```
