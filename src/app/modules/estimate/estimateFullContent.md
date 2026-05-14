# estimateFullContent.md

## 🌲 Full Project Structure

```bash
/home/sj/web/smt_project/kalsayegh_backend
├── bun.lock
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
│   │   │   ├── contract
│   │   │   │   ├── contract.api.http
│   │   │   │   ├── contract.api.json
│   │   │   │   ├── contract.controller.ts
│   │   │   │   ├── contract.routes.ts
│   │   │   │   ├── contract.service.ts
│   │   │   │   └── contract.validation.ts
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
│   │   │   ├── invoice
│   │   │   │   ├── invoice.api.http
│   │   │   │   ├── invoice.controller.ts
│   │   │   │   ├── invoiceFullContent.md
│   │   │   │   ├── invoice.routes.ts
│   │   │   │   ├── invoice.service.ts
│   │   │   │   └── invoice.validation.ts
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
│   │   │   ├── report
│   │   │   │   ├── report.api.http
│   │   │   │   ├── report.api.json
│   │   │   │   ├── report.controller.ts
│   │   │   │   ├── report.routes.ts
│   │   │   │   ├── report.service.ts
│   │   │   │   └── report.validation.ts
│   │   │   ├── schedule
│   │   │   │   ├── schedule.api.http
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
│   ├── clarification.md
│   ├── config
│   │   ├── index.ts
│   │   ├── serviceAccount.ts
│   │   └── viewRoutes.ts
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
│   │   ├── sendEmailAdvanced.ts
│   │   ├── sendEmail.ts
│   │   ├── stripe.ts
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
│   │   ├── emailTemplate.ts
│   │   ├── logger.ts
│   │   ├── pagination.ts
│   │   ├── pick.ts
│   │   ├── prisma.ts
│   │   ├── searchFilter.ts
│   │   ├── sendResponse.ts
│   │   └── webhook.ts
│   ├── types
│   │   └── index.ts
│   └── workers
│       └── emailWorker.ts
├── structure.md
├── tsconfig.json
├── uploads
│   └── google.png
└── vercel.json

33 directories, 136 files
```

## 📁 estimate Module Tree

```bash
/home/sj/web/smt_project/kalsayegh_backend/src/app/modules/estimate
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
  invoices              Invoice[]

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
  title        String?
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
  invoices    Invoice[]

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
  format      Format?  @default(DESCRIPTION)

  @@map("items")
}

model Estimate {
  id                        String         @id @default(auto()) @map("_id") @db.ObjectId
  clientId                  String         @db.ObjectId
  estimatorId               String         @db.ObjectId
  estimateName              String
  legendary                 String?
  date                      String
  endDate                   String?
  sideMap                   String?
  fileUrls                  String[]
  items                     TItemType[]
  additionalMarkUp          Float?
  grandTotal                Float
  discountAmount            Float?
  depositAmount             Float?
  status                    EstimateStatus @default(Pending)
  createdAt                 DateTime       @default(now())
  updatedAt                 DateTime       @updatedAt
  client                    Client         @relation(fields: [clientId], references: [id], onDelete: Cascade)
  estimator                 User           @relation(fields: [estimatorId], references: [id], onDelete: Cascade)
  emailStatus               EmailStatus    @default(NOT_SENT)
  stage                     EstimateStage  @default(DRAFT)
  isInvoiced                Boolean        @default(false)
  isSigned                  Boolean        @default(false)
  signedAt                  DateTime?
  signedName                String?
  invoices                  Invoice[]
  isOnlinePayment           Boolean        @default(false)
  coverPaymentProcessingFee Boolean?
  noteForClient             String?
  privateNote               String?
  clientSign                Boolean?
  mySign                    Boolean?
  mySignAt                  DateTime?
  mySignName                String?
  isAutoInvoice             Boolean?
  format                    Format         @default(DESCRIPTION)
  contractId                String?        @db.ObjectId
  contract                  Contract?      @relation(fields: [contractId], references: [id], onDelete: SetNull)
  poNumber                  String?
  isGroupingEnabled         Boolean?
  estimateNumber            String?

  @@map("estimates")
}

enum Format {
  DESCRIPTION
  TABLE
  IMAGE_PDF
}

enum EstimateStatus {
  Pending
  Approved
  Declined
}

enum EstimateStage {
  DRAFT
  ISSUED
  INVOICED
}

type TItemType {
  id       String @db.ObjectId
  quantity Int
  subTotal Int
}

model Invoice {
  id                        String        @id @default(auto()) @map("_id") @db.ObjectId
  clientId                  String        @db.ObjectId
  estimatorId               String        @db.ObjectId
  invoiceName               String
  legendary                 String?
  date                      String
  endDate                   String?
  sideMap                   String?
  fileUrls                  String[]
  items                     TItemType[]
  additionalMarkUp          Float?
  grandTotal                Int
  discountAmount            Float?
  depositAmount             Float?
  status                    InvoiceStatus @default(ACTIVE)
  stage                     InvoiceStage  @default(DRAFT)
  emailStatus               EmailStatus   @default(NOT_SENT)
  isSigned                  Boolean       @default(false)
  signedAt                  DateTime?
  signedName                String?
  createdAt                 DateTime      @default(now())
  updatedAt                 DateTime      @updatedAt
  client                    Client        @relation(fields: [clientId], references: [id], onDelete: Cascade)
  estimator                 User          @relation(fields: [estimatorId], references: [id], onDelete: Cascade)
  estimate                  Estimate?     @relation(fields: [estimateId], references: [id], onDelete: SetNull)
  estimateId                String?       @db.ObjectId
  payments                  Payment[]
  isOnlinePayment           Boolean       @default(false)
  coverPaymentProcessingFee Boolean?
  noteForClient             String?
  privateNote               String?
  clientSign                Boolean?
  mySign                    Boolean?
  mySignAt                  DateTime?
  mySignName                String?
  format                    Format        @default(DESCRIPTION)
  contractId                String?       @db.ObjectId
  contract                  Contract?     @relation(fields: [contractId], references: [id], onDelete: SetNull)
  poNumber                  String?
  isGroupingEnabled         Boolean?
  invoiceNumber             String?

  @@map("invoices")
}

enum EmailStatus {
  SENT
  NOT_SENT
  READ
}

enum InvoiceStatus {
  ACTIVE
  PARTIAL
  PAID
}

enum InvoiceStage {
  DRAFT
  ISSUED
  PARTIAL
  OVERDUE
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
  office          Office?          @relation(fields: [officeId], references: [id], onDelete: Cascade)
  date            DateTime
  note            String?
  jobSerial       String?
  officeLatitude  Float?
  officeLongitude Float?
  images          String[]
  address         String?
  contact         String?
  email           String?
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

model Payment {
  id                    String        @id @default(auto()) @map("_id") @db.ObjectId
  invoiceId             String        @db.ObjectId
  amount                Float // in dollars not cents
  paymentDate           DateTime
  paymentMethod         PaymentMethod
  checkNumber           String? // only for CHECK method
  stripePaymentIntentId String? // for Stripe payments
  status                PaymentStatus @default(COMPLETED)
  createdAt             DateTime      @default(now())
  updatedAt             DateTime      @updatedAt
  invoice               Invoice       @relation(fields: [invoiceId], references: [id], onDelete: Cascade)
  refunds               Refund[]

  @@map("payments")
}

model Refund {
  id             String   @id @default(auto()) @map("_id") @db.ObjectId
  paymentId      String   @db.ObjectId
  amount         Float // amount in dollars not cents
  reason         String?
  stripeRefundId String? // ID from Stripe, e.g., 're_123abc'
  createdAt      DateTime @default(now())
  payment        Payment  @relation(fields: [paymentId], references: [id], onDelete: Cascade)

  @@map("refunds")
}

enum PaymentMethod {
  CASH
  CHECK
  CARD
  BANK_TRANSFER
  STRIPE
}

model Contract {
  id          String     @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  estimates   Estimate[]
  invoices    Invoice[]
}

enum PaymentStatus {
  COMPLETED
  REFUNDED
  PARTIALLY_REFUNDED
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
    "devPrev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "dev": "tsx watch src/server.ts",
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
    "tsx": "^4.21.0",
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
    "stripe": "^22.1.0",
    "winston": "^3.19.0",
    "ws": "^8.18.3",
    "zod": "^3.23.8"
  }
}
```

## 🛠️ estimate.service.ts

```ts
import {
  Client,
  EmailStatus,
  EstimateStatus,
  Item,
  MarkUp,
  Prisma,
  Tax,
} from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import { Request } from "express";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { paginationHelper, TOptions } from "../../../shared/pagination";
import httpStatus from "http-status";

const createEstimateInDB = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload: TCreateEstimate = req.body;
  const estimatorId = req.user.id;

  const existingClient = await prisma.client.findUnique({
    where: {
      id: payload.clientId,
    },
  });

  if (!existingClient) {
    throw new ApiError(400, "Client does not exist");
  }

  if (payload.contractId) {
    const contract = await prisma.contract.count({
      where: {
        id: payload.contractId,
      },
    });
    if (!contract)
      throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
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

  const estimateCount = await prisma.estimate.count();

  const newEstimate = await prisma.estimate.create({
    data: {
      clientId: payload.clientId,
      estimatorId: estimatorId,
      legendary: payload.legendary,
      date: payload.date,
      endDate: payload.endDate as string,
      estimateName: payload.estimateName,
      items: payload.items,
      grandTotal: payload.grandTotal,
      additionalMarkUp: payload.additionalMarkUp,
      sideMap: map ? map[0] : undefined,
      fileUrls: urls ? urls : undefined,
      depositAmount: payload.depositAmount,
      discountAmount: payload.discountAmount,
      isOnlinePayment: payload.isOnlinePayment,
      coverPaymentProcessingFee: payload.coverPaymentProcessingFee,
      noteForClient: payload.noteForClient,
      privateNote: payload.privateNote,
      clientSign: payload.clientSign,
      mySign: payload.mySign,
      format: payload.format,
      contractId: payload.contractId,
      poNumber: payload.poNumber,
      isGroupingEnabled: payload.isGroupingEnabled,
      estimateNumber: (estimateCount + 1).toString(),
      isAutoInvoice: payload.isAutoInvoice,
    },
  });

  const itemss = await prisma.item.findMany({
    where: { id: { in: payload.items.map((item: any) => item.id) } },
  });

  if (newEstimate.isAutoInvoice) {
    invoiceService.generateInvoiceFromEstimate(newEstimate.id);
  }

  return {
    ...newEstimate,
    itemss,
  };
};

const editEstimateInDB = async (estimateId: string, req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload = req.body;
  const estimatorId = req.user.id;

  const existingEstimate = await prisma.estimate.findUnique({
    where: {
      id: estimateId,
    },
  });

  if (!existingEstimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

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
      files.map((file) => uploadInSpace(file, `estimates/${folder}`)),
    );
  };

  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  const updatedEstimate = await prisma.estimate.update({
    where: {
      id: estimateId,
    },
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

  const itemss = await prisma.item.findMany({
    where: { id: { in: payload.items.map((item: any) => item.id) } },
  });

  return {
    ...updatedEstimate,
    itemss,
  };
};

const getEstimateByIdFromDB = async (estimateId: string) => {
  const estimate = await prisma.estimate.findUnique({
    where: {
      id: estimateId,
    },
    include: {
      client: true,
    },
  });
  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  const items = estimate.items;

  const itemsIds = items.map((item) => {
    return item.id;
  });

  const itemsData = await prisma.item.findMany({
    where: {
      id: {
        in: itemsIds,
      },
    },
    include: {
      markUp: true,
    },
  });

  const taxIds = itemsData.flatMap((item) => item.taxes ?? []);
  const uniqueTaxIds = Array.from(new Set(taxIds));

  const taxesData = await prisma.tax.findMany({
    where: {
      id: {
        in: uniqueTaxIds,
      },
    },
  });
  const taxMap = new Map(taxesData.map((tax) => [tax.id, tax]));

  const itemsDataWithTax = itemsData.map((item) => ({
    ...item,
    taxes: (item.taxes ?? []).map((taxId) => taxMap.get(taxId)).filter(Boolean),
  }));

  return {
    ...estimate,
    itemsData: itemsDataWithTax,
  };
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
      format: payload.format,
    },
  });
  return newItem;
};

const updateItemInDb = async (payload: any) => {
  const existingItem = await prisma.item.findUnique({
    where: {
      id: payload.itemId,
    },
  });

  if (!existingItem) {
    throw new ApiError(404, "Item does not exist");
  }

  if (payload.itemName) {
    const duplicateItem = await prisma.item.findFirst({
      where: {
        itemName: payload.itemName,
        id: {
          not: payload.itemId,
        },
      },
    });

    if (duplicateItem) {
      throw new ApiError(400, "Item with this name already exists");
    }
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

  if (payload.taxes?.length) {
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
      (taxId: any) => !existingTaxIds.has(taxId),
    );

    if (invalidTaxIds.length) {
      throw new ApiError(400, `Invalid tax id(s): ${invalidTaxIds.join(", ")}`);
    }
  }

  const updatedItem = await prisma.item.update({
    where: {
      id: payload.itemId,
    },
    data: {
      itemName: payload.itemName,
      markUpId: payload.markUpId,
      rate: payload.rate,
      description: payload.description,
      notes: payload.notes,
      taxes: payload.taxes,
      format: payload.format,
    },
  });

  return updatedItem;
};

const getItemListFromDB = async () => {
  const items = await prisma.item.findMany({
    select: {
      id: true,
      itemName: true,
      description: true,
      rate: true,
      notes: true,
      format: true,
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

const getAllEstimate = async (
  paginations: TOptions,
  filter?: {
    status?: EstimateStatus;
    searchTerm?: string;
  },
) => {
  const { page, limit, skip } = paginationHelper(paginations);

  const whereClause: Prisma.EstimateWhereInput = {};

  const andClause: Prisma.EstimateWhereInput[] = [];

  if (filter?.status) {
    andClause.push({
      status: filter.status,
    });
  }

  const searchTerm = filter?.searchTerm?.trim();
  if (searchTerm)
    andClause.push({
      OR: [
        {
          estimateName: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },

        {
          client: {
            OR: [
              { clientName: { contains: searchTerm, mode: "insensitive" } },
              { email: { contains: searchTerm, mode: "insensitive" } },
              { phoneNumber: { contains: searchTerm, mode: "insensitive" } },
              { address: { contains: searchTerm, mode: "insensitive" } },
            ],
          },
        },
      ],
    });

  if (andClause.length) whereClause.AND = andClause;

  const [estimates, total] = await Promise.all([
    prisma.estimate.findMany({
      where: whereClause,
      include: { client: true },
      omit: {
        items: true,
      },
      skip,
      take: limit,
      orderBy: {
        id: "desc", // same as createdAt:"desc"
      },
    }),

    prisma.estimate.count({
      where: whereClause,
    }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: estimates,
  };
};

/* const getEstimateDetails = async (estimateId: string) => {
  const estimate = await prisma.estimate.findUnique({
    where: {
      id: estimateId,
    },
    include: {
      client: true,
    },
    omit: {
      createdAt: true,
    },
  });

  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  const estimateItems = Array.isArray(estimate.items) ? estimate.items : [];

  const itemIds = estimateItems
    .map((item) => {
      if (typeof item !== "object" || item === null) return undefined;
      const currentItem = item as { id?: unknown };
      return typeof currentItem.id === "string" ? currentItem.id : undefined;
    })
    .filter((id): id is string => Boolean(id));

  const items =
    itemIds.length > 0
      ? await prisma.item.findMany({
          where: {
            id: {
              in: itemIds,
            },
          },
          select: {
            description: true,
            itemName: true,
            rate: true,
            markUp: true,
            taxes: true,
          },
        })
      : [];

  return {
    ...estimate,
    items,
  };
}; */

// updated for added item quantity & subtotal
const getEstimateDetails = async (estimateId: string) => {
  const estimate = await prisma.estimate.findUnique({
    where: {
      id: estimateId,
    },
    include: {
      client: true,
      contract: true,
    },
    omit: {
      createdAt: true,
    },
  });

  if (!estimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  const estimateItems = Array.isArray(estimate.items) ? estimate.items : [];

  const itemIds = estimateItems.map((item) => item.id);

  const dbItems =
    itemIds.length > 0
      ? await prisma.item.findMany({
          where: {
            id: {
              in: itemIds,
            },
          },
          select: {
            id: true, // required for mapping
            description: true,
            itemName: true,
            rate: true,
            markUp: true,
            taxes: true,
          },
        })
      : [];

  const finalItems = dbItems.map((dbItem) => {
    const matchedEstimateItem = estimateItems.find(
      (item) => item.id === dbItem.id,
    );

    return {
      ...dbItem,
      quantity: matchedEstimateItem?.quantity ?? 0,
      subTotal: matchedEstimateItem?.subTotal ?? 0,
    };
  });

  return {
    ...estimate,
    items: finalItems,
  };
};

const updateEstimateStatus = async (
  estimateId: string,
  status: EstimateStatus,
) => {
  const existingEstimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    select: {
      id: true,
    },
  });

  if (!existingEstimate)
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  // Update the status
  const updatedEstimate = await prisma.estimate.update({
    where: { id: estimateId },
    data: { status },
    select: {
      id: true,
      estimateName: true,
      status: true,
    },
  });

  return updatedEstimate;
};

// In estimate.service.ts

const updateEstimateEmailAndSign = async (
  estimateId: string,
  emailStatus?: "READ",
  signedName?: string,
  mySignName?: string,
  mySignAt?: string,
) => {
  // Check if estimate exists
  const existingEstimate = await prisma.estimate.count({
    where: { id: estimateId },
  });

  if (!existingEstimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  // Build update data
  const updateData: Prisma.EstimateUpdateInput = {};

  if (emailStatus) {
    updateData.emailStatus = emailStatus;
  }

  if (signedName) {
    updateData.isSigned = true;
    updateData.signedAt = new Date();
    updateData.signedName = signedName;
    updateData.status = "Approved";
  }

  if (mySignName) {
    updateData.mySignName = mySignName;
    updateData.mySignAt = mySignAt;
  }

  // If no fields to update, throw error
  if (Object.keys(updateData).length === 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No valid fields to update");
  }

  const updatedEstimate = await prisma.estimate.update({
    where: { id: estimateId },
    data: updateData,
    select: {
      id: true,
      estimateName: true,
      emailStatus: true,
      isSigned: true,
    },
  });

  return updatedEstimate;
};

// Add to estimate.service.ts
import sendEmailAdvanced from "../../../helpers/sendEmailAdvanced";
import { estimateEmailWithReview } from "../../../shared/emailTemplate";
import { TCreateEstimate } from "./estimate.validation";
import { invoiceService } from "../invoice/invoice.service";

const sendEstimateEmailFlexible = async (
  estimateId: string,
  payload: {
    to: string[];
    cc?: string[];
    bcc?: string[];
    subject?: string;
    message?: string;
    sendMeCopy?: boolean;
  },
) => {
  // Fetch estimate with client and estimator details
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    include: {
      client: { select: { clientName: true } },
      estimator: { select: { fullName: true } },
    },
  });

  if (!estimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  // Prepare recipients
  let to = [...payload.to];
  let cc = payload.cc ? [...payload.cc] : [];
  const bcc = payload.bcc ? [...payload.bcc] : [];

  // Add "send me a copy" to CC if requested
  if (payload.sendMeCopy) {
    cc.push("shahjalal.backend@gmail.com");
  }

  // Default subject if not provided
  const defaultSubject = `Your Estimate #${estimate.estimateName || estimateId.slice(-6)} from Geo Paving and Sealcoating`;
  const subject = payload.subject || defaultSubject;

  // Generate review link
  const frontendUrl = process.env.FRONTEND_URL || "https://yourfrontend.com";
  const reviewLink = `${frontendUrl}/estimate/${estimateId}`;

  // Generate HTML
  const html = estimateEmailWithReview({
    clientName: estimate.client.clientName,
    estimateName: estimate.estimateName || estimateId.slice(-6),
    grandTotal: estimate.grandTotal,
    date: estimate.date,
    endDate: estimate.endDate,
    customMessage: payload.message,
    reviewLink,
  });

  // Send email
  await sendEmailAdvanced({
    to,
    cc: cc.length ? cc : undefined,
    bcc: bcc.length ? bcc : undefined,
    subject,
    html,
  });

  // Update email status (optional)
  await prisma.estimate.update({
    where: { id: estimateId },
    data: { emailStatus: EmailStatus.SENT },
  });

  return { success: true, to, cc, bcc };
};

const deleteEstimate = async (estimateId: string) => {
  const estimateExist = await prisma.estimate.count({
    where: {
      id: estimateId,
    },
  });

  if (!estimateExist)
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  return prisma.estimate.delete({
    where: {
      id: estimateId,
    },
    select: {
      id: true,
      estimateName: true,
    },
  });
};

const getEstimateNumber = async () => {
  return prisma.estimate.count();
};

export const estimateService = {
  createClientInDB,
  getEstimateByIdFromDB,
  getMyClientsFromDB,
  createNewMarkUpInDB,
  getAllMarkUpsFromDB,
  createNewItemInDB,
  updateItemInDb,
  createNewTaxInDB,
  getItemListFromDB,
  getAllTaxesFromDB,
  createEstimateInDB,
  editEstimateInDB,
  getAllEstimate,
  getEstimateDetails,
  updateEstimateStatus,
  updateEstimateEmailAndSign,
  sendEstimateEmailFlexible,
  deleteEstimate,
  getEstimateNumber,
};

// contract
```

## 📝 estimate.validation.ts

```ts
import { Format } from "@prisma/client";
import { z } from "zod";

export const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

export const EstimateStatusEnum = z.enum(["Pending", "Approved", "Declined"]);

export const TItemTypeSchema = z.object({
  id: objectIdSchema,
  quantity: z.number().int().positive("Quantity must be greater than 0"),
  subTotal: z.number().int().nonnegative("Subtotal must be >= 0"),
});

// 🔸 Main Estimate Schema
const createEstimateSchema = z
  .object({
    clientId: objectIdSchema,
    estimateName: z.string().min(1, "Estimate name is required"),
    legendary: z.string(),
    date: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required").optional(),
    items: z.array(TItemTypeSchema).min(1, "At least one item is required"),
    additionalMarkUp: z.number().optional(),
    grandTotal: z.number().nonnegative("Grand total must be >= 0"),
    discountAmount: z.number().optional(),
    depositAmount: z.number().optional(),
    isOnlinePayment: z.boolean().optional(),
    coverPaymentProcessingFee: z.boolean().optional(),
    noteForClient: z.string().max(1000, "Client note is too long").optional(),
    privateNote: z.string().max(1000, "Private note is too long").optional(),
    clientSign: z.boolean().optional(),
    mySign: z.boolean().optional(),
    format: z.nativeEnum(Format).default("DESCRIPTION"),
    contractId: objectIdSchema,
    poNumber: z.string().optional(),
    isGroupingEnabled: z.boolean().optional(),
    estimateNumber: z.string().optional(),
    isAutoInvoice: z.boolean().optional(),
  })
  .strict();

export type TCreateEstimate = z.infer<typeof createEstimateSchema>;

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
  format: z.nativeEnum(Format).default("DESCRIPTION"),
});

const itemUpdateValidationSchema = z.object({
  itemId: z.string(),
  itemName: z.string().optional(),
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

const updateEstimateStatusSchema = z
  .object({
    status: EstimateStatusEnum, // "Pending", "Approved", "Declined"
  })
  .strict();

const updateEmailSignSchema = z
  .object({
    emailStatus: z.enum(["READ"]).optional(),
    signedName: z
      .string()
      .min(1, "Signed name is required if provided")
      .optional(),
    mySignName: z.string().trim().optional(),
    mySignAt: z
      .string()
      .datetime({ message: "Invalid ISO datetime format" })
      .optional(),
  })
  .superRefine((value, ctx) => {
    if (value.mySignName && !value.mySignAt) {
      ctx.addIssue({
        code: "custom",
        message: "My signAt is required.",
      });
    }
  });

export type TUpdateEstimateEmailSignSchema = z.infer<
  typeof updateEmailSignSchema
>;

const sendEstimateEmailSchema = z.object({
  to: z
    .array(z.string().email("Invalid recipient email"))
    .min(1, "At least one recipient is required"),
  cc: z.array(z.string().email("Invalid CC email")).optional(),
  bcc: z.array(z.string().email("Invalid BCC email")).optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
  sendMeCopy: z.boolean().optional().default(false),
  isOnlinePayment: z.boolean().optional(),
});

export const estimateValidation = {
  createEstimateSchema,
  markUpValidationSchema,
  itemValidationSchema,
  taxValidationSchema,
  itemUpdateValidationSchema,
  updateEstimateStatusSchema,
  updateEmailSignSchema,
  sendEstimateEmailSchema,
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
  validateRequest(estimateValidation.createEstimateSchema),
  estimateControllers.createEstimate,
);

router.patch(
  "/edit-estimate/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(estimateValidation.createEstimateSchema),
  estimateControllers.editEstimate,
);

router.get(
  "/single-estimate/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.getEstimateById,
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
router.patch(
  "/update-item",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.itemUpdateValidationSchema),
  estimateControllers.updateItem,
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

router.get(
  "/all-estimates",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.getAllEstimate,
);

router.get(
  "/estimate/:id",
  // auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateControllers.getEstimateDetails,
);

router.patch(
  "/update-status/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.updateEstimateStatusSchema),
  estimateControllers.updateEstimateStatus,
);

router.patch(
  "/update-email-sign/:id",
  validateRequest(estimateValidation.updateEmailSignSchema),
  estimateControllers.updateEstimateEmailAndSign,
);

router.post(
  "/send-email/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.sendEstimateEmailSchema),
  estimateControllers.sendEstimateEmailFlexible,
);

router.delete(
  "/delete/:id",
  auth(UserRole.ESTIMATOR, UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  estimateControllers.deleteEstimate,
);

router.get("/estimate-number", auth(), estimateControllers.getEstimateNumber);

export const estimateRoutes = router;
```

## 🎮 estimate.controller.ts

```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { paginationOptions } from "../../../shared/pagination";
import pick from "../../../shared/pick";
import sendResponse from "../../../shared/sendResponse";
import { estimateService } from "./estimate.service";
import { TUpdateEstimateEmailSignSchema } from "./estimate.validation";

const createEstimate = catchAsync(async (req, res) => {
  const result = await estimateService.createEstimateInDB(req);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Estimate has been created successfully",
    data: result,
  });
});

const editEstimate = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const result = await estimateService.editEstimateInDB(estimateId, req);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Estimate has been updated successfully",
    data: result,
  });
});

const getEstimateById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await estimateService.getEstimateByIdFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Estimate retrieved successfully",
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

const updateItem = catchAsync(async (req, res) => {
  const itemData = req.body;
  const updatedItem = await estimateService.updateItemInDb(itemData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Item updated successfully",
    data: updatedItem,
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

const allTaxes = catchAsync(async (_req, res) => {
  const taxes = await estimateService.getAllTaxesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "All taxes retrieved successfully",
    data: taxes,
  });
});

const getAllEstimate = catchAsync(async (req, res) => {
  const pagination = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm", "status"]);
  const result = await estimateService.getAllEstimate(pagination, filter);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimates retrieved successfully.",
    data: result,
  });
});

const getEstimateDetails = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const result = await estimateService.getEstimateDetails(estimateId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate details retrieved successfully.",
    data: result,
  });
});

const updateEstimateStatus = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const { status } = req.body;

  const result = await estimateService.updateEstimateStatus(estimateId, status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate status updated successfully.",
    data: result,
  });
});

const updateEstimateEmailAndSign = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const { emailStatus, signedName, mySignName, mySignAt } =
    req.body as TUpdateEstimateEmailSignSchema;

  const result = await estimateService.updateEstimateEmailAndSign(
    estimateId,
    emailStatus,
    signedName,
    mySignName,
    mySignAt,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate email/signature updated successfully.",
    data: result,
  });
});

const sendEstimateEmailFlexible = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const payload = req.body;

  const result = await estimateService.sendEstimateEmailFlexible(
    estimateId,
    payload,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate email(s) sent successfully.",
    data: result,
  });
});

const deleteEstimate = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;

  const result = await estimateService.deleteEstimate(estimateId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate deleted successfully",
    data: result,
  });
});

const getEstimateNumber = catchAsync(async (_req, res) => {
  const result = await estimateService.getEstimateNumber();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate number retrieved successfully",
    data: result,
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
  editEstimate,
  getAllEstimate,
  getEstimateById,
  getEstimateDetails,
  updateItem,
  updateEstimateStatus,
  updateEstimateEmailAndSign,
  sendEstimateEmailFlexible,
  deleteEstimate,
  getEstimateNumber,
};
```
