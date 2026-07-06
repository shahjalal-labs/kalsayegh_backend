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
│   │   │   │   ├── estimate.subItem.controller.ts
│   │   │   │   ├── estimate.subItem.service.ts
│   │   │   │   ├── estimate.validation.ts
│   │   │   │   └── subitems.api.http
│   │   │   ├── group
│   │   │   │   ├── group.controller.ts
│   │   │   │   ├── group.routes.ts
│   │   │   │   ├── group.service.ts
│   │   │   │   └── group.validation.ts
│   │   │   ├── invoice
│   │   │   │   ├── invoice.api.http
│   │   │   │   ├── invoice.controller.ts
│   │   │   │   ├── invoice.routes.ts
│   │   │   │   ├── invoice.service.ts
│   │   │   │   ├── invoice.subItem.controller.ts
│   │   │   │   ├── invoice.subItem.service.ts
│   │   │   │   ├── invoice.validation.ts
│   │   │   │   └── subitems.api.http
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
│   ├── todo.md
│   ├── types
│   │   └── index.ts
│   └── workers
│       └── emailWorker.ts
├── structure.md
├── tsconfig.json
├── uploads
│   └── google.png
└── vercel.json

33 directories, 142 files
```

## 📁 estimate Module Tree

```bash
/home/sj/web/smt_project/kalsayegh_backend/src/app/modules/estimate
├── estimate.api.http
├── estimate.controller.ts
├── estimate.route.ts
├── estimate.service.ts
├── estimate.subItem.controller.ts
├── estimate.subItem.service.ts
├── estimate.validation.ts
└── subitems.api.http

1 directory, 8 files
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
  imageUrls   String[]

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
  itemImages                TItemImages[]
  subItems                  TSubItems[]

  @@map("estimates")
}

type TSubItems {
  id       String
  itemId   String
  title    String
  quantity Float?
  unitCost Float?
  price    Float?
}

type TItemImages {
  itemId String   @db.ObjectId
  images String[]
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
  subTotal Float
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
  itemImages                TItemImages[]
  subItems                  TSubItems[]

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
  title       String?
  serial      Int?
  description String?
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
  jobSerial       Int?
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
import { randomUUID } from "crypto";

/* const createEstimateInDB = async (req: Request) => {
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
}; */

const createEstimateInDB = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload: TCreateEstimate = req.body;
  const estimatorId = req.user.id;

  // 1. Validate client
  const existingClient = await prisma.client.findUnique({
    where: { id: payload.clientId },
  });
  if (!existingClient) {
    throw new ApiError(400, "Client does not exist");
  }

  // 2. Validate contract if provided
  if (payload.contractId) {
    const contract = await prisma.contract.count({
      where: { id: payload.contractId },
    });
    if (!contract)
      throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
  }

  // 3. Validate each line item exists globally
  const items = payload.items;
  for (const item of items) {
    const existingItem = await prisma.item.findUnique({
      where: { id: item.id },
    });
    if (!existingItem) {
      throw new ApiError(400, `Item with id ${item.id} does not exist`);
    }
  }

  // 4. Process subitems (if any) – generate UUIDs and validate itemId references
  let processedSubItems = undefined;
  if (
    payload.subItems &&
    Array.isArray(payload.subItems) &&
    payload.subItems.length > 0
  ) {
    // Build a set of valid line item IDs from payload.items
    const validItemIds = new Set(items.map((i: any) => i.id));

    processedSubItems = payload.subItems.map((sub: any) => {
      // Check that the referenced itemId exists in the estimate's items
      if (!validItemIds.has(sub.itemId)) {
        throw new ApiError(
          400,
          `Subitem references itemId ${sub.itemId} which is not in the estimate items list`,
        );
      }
      return {
        id: randomUUID(), // generate unique UUID for this subline item
        itemId: sub.itemId,
        title: sub.title,
        quantity: sub.quantity ?? null,
        unitCost: sub.unitCost ?? null,
        price: sub.price ?? null,
      };
    });
  }

  // 5. Process images
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

  // 6. Get estimate count for numbering
  const estimateCount = await prisma.estimate.count();

  // 7. Create estimate
  const newEstimate = await prisma.estimate.create({
    data: {
      clientId: payload.clientId,
      estimatorId: estimatorId,
      legendary: payload.legendary,
      date: payload.date,
      endDate: payload.endDate as string,
      estimateName: payload.estimateName,
      items: payload.items,
      subItems: processedSubItems,
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

  // 8. Fetch detailed line items (for response)
  const itemss = await prisma.item.findMany({
    where: { id: { in: payload.items.map((item: any) => item.id) } },
  });

  // 9. Auto-generate invoice if requested
  if (newEstimate.isAutoInvoice) {
    invoiceService.generateInvoiceFromEstimate(newEstimate.id);
  }

  return {
    ...newEstimate,
    itemss,
  };
};

/* const editEstimateInDB = async (estimateId: string, req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload = req.body;
  const estimatorId = req.user.id;

  // 1. Check if estimate exists
  const existingEstimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
  });
  if (!existingEstimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  // 2. Validate client if provided
  if (payload.clientId) {
    const existingClient = await prisma.client.findUnique({
      where: { id: payload.clientId },
    });
    if (!existingClient) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Client does not exist");
    }
  }

  // 3. Validate contract if provided
  if (payload.contractId) {
    const contractExists = await prisma.contract.count({
      where: { id: payload.contractId },
    });
    if (!contractExists) {
      throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
    }
  }

  // 4. Validate items if provided
  if (payload.items && Array.isArray(payload.items)) {
    for (const item of payload.items) {
      const existingItem = await prisma.item.findUnique({
        where: { id: item.id },
      });
      if (!existingItem) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          `Item with id ${item.id} does not exist`,
        );
      }
    }
  }

  // 5. Process image uploads (if any)
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

  // 6. Build update data object (only include fields that are provided)
  const updateData: Prisma.EstimateUpdateInput = {
    // Always update the estimator (last editor)
    estimator: { connect: { id: estimatorId } },
  };

  // Scalar fields
  if (payload.estimateName !== undefined)
    updateData.estimateName = payload.estimateName;
  if (payload.legendary !== undefined) updateData.legendary = payload.legendary;
  if (payload.date !== undefined) updateData.date = payload.date;
  if (payload.endDate !== undefined) updateData.endDate = payload.endDate;
  if (payload.items !== undefined) updateData.items = payload.items;
  if (payload.additionalMarkUp !== undefined)
    updateData.additionalMarkUp = payload.additionalMarkUp;
  if (payload.grandTotal !== undefined)
    updateData.grandTotal = payload.grandTotal;
  if (payload.discountAmount !== undefined)
    updateData.discountAmount = payload.discountAmount;
  if (payload.depositAmount !== undefined)
    updateData.depositAmount = payload.depositAmount;
  if (payload.isOnlinePayment !== undefined)
    updateData.isOnlinePayment = payload.isOnlinePayment;
  if (payload.coverPaymentProcessingFee !== undefined)
    updateData.coverPaymentProcessingFee = payload.coverPaymentProcessingFee;
  if (payload.noteForClient !== undefined)
    updateData.noteForClient = payload.noteForClient;
  if (payload.privateNote !== undefined)
    updateData.privateNote = payload.privateNote;
  if (payload.clientSign !== undefined)
    updateData.clientSign = payload.clientSign;
  if (payload.mySign !== undefined) updateData.mySign = payload.mySign;
  if (payload.format !== undefined) updateData.format = payload.format;
  if (payload.poNumber !== undefined) updateData.poNumber = payload.poNumber;
  if (payload.isGroupingEnabled !== undefined)
    updateData.isGroupingEnabled = payload.isGroupingEnabled;
  if (payload.isAutoInvoice !== undefined)
    updateData.isAutoInvoice = payload.isAutoInvoice;
  if (payload.estimateNumber !== undefined)
    updateData.estimateNumber = payload.estimateNumber; // usually auto-generated, but allow manual override

  // Relation fields (connect syntax)
  if (payload.clientId !== undefined) {
    updateData.client = { connect: { id: payload.clientId } };
  }
  if (payload.contractId !== undefined) {
    updateData.contract = { connect: { id: payload.contractId } };
  }

  // Overwrite sideMap / fileUrls if new files were uploaded
  if (map) updateData.sideMap = map[0];
  if (urls) updateData.fileUrls = urls;

  // 7. Perform update
  const updatedEstimate = await prisma.estimate.update({
    where: { id: estimateId },
    data: updateData,
  });

  // 8. Fetch detailed items for the response
  const itemIds = updatedEstimate.items.map((item: any) => item.id);
  const itemsDetail =
    itemIds.length > 0
      ? await prisma.item.findMany({
          where: { id: { in: itemIds } },
        })
      : [];

  return {
    ...updatedEstimate,
    items: itemsDetail,
  };
}; */

const editEstimateInDB = async (estimateId: string, req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload = req.body;
  const estimatorId = req.user.id;

  // 1. Check if estimate exists
  const existingEstimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    include: { client: true },
  });
  if (!existingEstimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  // 2. Validate client if provided
  if (payload.clientId) {
    const existingClient = await prisma.client.findUnique({
      where: { id: payload.clientId },
    });
    if (!existingClient) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Client does not exist");
    }
  }

  // 3. Validate contract if provided
  if (payload.contractId) {
    const contractExists = await prisma.contract.count({
      where: { id: payload.contractId },
    });
    if (!contractExists) {
      throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
    }
  }

  // 4. Validate items if provided (each must exist globally)
  if (payload.items && Array.isArray(payload.items)) {
    for (const item of payload.items) {
      const existingItem = await prisma.item.findUnique({
        where: { id: item.id },
      });
      if (!existingItem) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          `Item with id ${item.id} does not exist`,
        );
      }
    }
  }

  // 5. Process image uploads
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

  // 6. Prepare update data
  const updateData: Prisma.EstimateUpdateInput = {
    estimator: { connect: { id: estimatorId } },
  };

  // Scalar fields
  if (payload.estimateName !== undefined)
    updateData.estimateName = payload.estimateName;
  if (payload.legendary !== undefined) updateData.legendary = payload.legendary;
  if (payload.date !== undefined) updateData.date = payload.date;
  if (payload.endDate !== undefined) updateData.endDate = payload.endDate;
  if (payload.items !== undefined) updateData.items = payload.items;
  if (payload.additionalMarkUp !== undefined)
    updateData.additionalMarkUp = payload.additionalMarkUp;
  if (payload.grandTotal !== undefined)
    updateData.grandTotal = payload.grandTotal;
  if (payload.discountAmount !== undefined)
    updateData.discountAmount = payload.discountAmount;
  if (payload.depositAmount !== undefined)
    updateData.depositAmount = payload.depositAmount;
  if (payload.isOnlinePayment !== undefined)
    updateData.isOnlinePayment = payload.isOnlinePayment;
  if (payload.coverPaymentProcessingFee !== undefined)
    updateData.coverPaymentProcessingFee = payload.coverPaymentProcessingFee;
  if (payload.noteForClient !== undefined)
    updateData.noteForClient = payload.noteForClient;
  if (payload.privateNote !== undefined)
    updateData.privateNote = payload.privateNote;
  if (payload.clientSign !== undefined)
    updateData.clientSign = payload.clientSign;
  if (payload.mySign !== undefined) updateData.mySign = payload.mySign;
  if (payload.format !== undefined) updateData.format = payload.format;
  if (payload.poNumber !== undefined) updateData.poNumber = payload.poNumber;
  if (payload.isGroupingEnabled !== undefined)
    updateData.isGroupingEnabled = payload.isGroupingEnabled;
  if (payload.isAutoInvoice !== undefined)
    updateData.isAutoInvoice = payload.isAutoInvoice;
  if (payload.estimateNumber !== undefined)
    updateData.estimateNumber = payload.estimateNumber;

  // Relations
  if (payload.clientId !== undefined) {
    updateData.client = { connect: { id: payload.clientId } };
  }
  if (payload.contractId !== undefined) {
    updateData.contract = { connect: { id: payload.contractId } };
  }

  if (map) updateData.sideMap = map[0];
  if (urls) updateData.fileUrls = urls;

  // ========== 7. Handle subitems – FULL REPLACEMENT ==========
  // Only process subitems if the payload includes `subItems` (even empty array)
  if (payload.subItems !== undefined) {
    // Determine the final items array (after update)
    const finalItems =
      payload.items && Array.isArray(payload.items)
        ? payload.items
        : (existingEstimate.items as any[]);

    const validItemIds = new Set(finalItems.map((item: any) => item.id));

    // Process each subitem from the payload
    const processedSubItems = (payload.subItems as any[]).map((sub: any) => {
      if (!validItemIds.has(sub.itemId)) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          `Subitem references itemId ${sub.itemId} which is not in the estimate items list (after update)`,
        );
      }
      return {
        id: randomUUID(),
        itemId: sub.itemId,
        title: sub.title,
        quantity: sub.quantity ?? null,
        unitCost: sub.unitCost ?? null,
        price: sub.price ?? null,
      };
    });

    // Replace existing subitems with the new ones
    updateData.subItems = processedSubItems;
  }
  // ========== End of subitems handling ==========

  // 8. Perform update
  const updatedEstimate = await prisma.estimate.update({
    where: { id: estimateId },
    data: updateData,
  });

  // 9. Fetch detailed items for response
  const itemIds = updatedEstimate.items.map((item: any) => item.id);
  const itemsDetail =
    itemIds.length > 0
      ? await prisma.item.findMany({ where: { id: { in: itemIds } } })
      : [];

  return {
    ...updatedEstimate,
    items: itemsDetail,
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

const createNewItemInDB = async (
  payload: Item,
  files?: Express.Multer.File[],
) => {
  const existingItem = await prisma.item.findFirst({
    where: { itemName: payload.itemName },
  });
  if (existingItem) {
    throw new ApiError(400, "Item with this name already exists");
  }

  if (payload.markUpId) {
    const markUp = await prisma.markUp.findUnique({
      where: { id: payload.markUpId },
    });
    if (!markUp) throw new ApiError(400, "MarkUp does not exist");
  }

  if (payload.taxes?.length) {
    const existingTaxes = await prisma.tax.findMany({
      where: { id: { in: payload.taxes } },
      select: { id: true },
    });
    const existingTaxIds = new Set(existingTaxes.map((tax) => tax.id));
    const invalidTaxIds = payload.taxes.filter((id) => !existingTaxIds.has(id));
    if (invalidTaxIds.length) {
      throw new ApiError(400, `Invalid tax id(s): ${invalidTaxIds.join(", ")}`);
    }
  }

  // Upload images if any
  let imageUrls: string[] = [];
  if (files && files.length > 0) {
    const uploadPromises = files.map((file) => uploadInSpace(file, "items"));
    imageUrls = await Promise.all(uploadPromises);
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
      imageUrls,
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
      imageUrls: true,
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
            format: true,
            imageUrls: true,
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
import {
  TCreateEstimate,
  TEstimateImageAction,
  TUpdateEstimateItemImages,
} from "./estimate.validation";
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

const updateEstimateImages = async (
  estimateId: string,
  payload: TEstimateImageAction,
  files?: {
    sideMap?: Express.Multer.File[];
    fileUrls?: Express.Multer.File[];
  },
) => {
  // 1. Fetch existing estimate
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    select: { id: true, sideMap: true, fileUrls: true },
  });
  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  let updatedSideMap = estimate.sideMap;
  let updatedFileUrls = estimate.fileUrls ?? [];

  // 2. Handle sideMap (single image)
  if (payload.sideMapAction === "replace") {
    if (!files?.sideMap || files.sideMap.length === 0) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "No image provided to replace sideMap",
      );
    }
    const uploaded = await uploadInSpace(files.sideMap[0], "estimates/sideMap");
    updatedSideMap = uploaded;
  } else if (payload.sideMapAction === "remove") {
    updatedSideMap = null;
  }

  // 3. Handle fileUrls (multiple)
  if (payload.fileUrlsAction) {
    switch (payload.fileUrlsAction) {
      case "add": {
        if (!files?.fileUrls || files.fileUrls.length === 0) {
          throw new ApiError(
            httpStatus.BAD_REQUEST,
            "No files provided to add",
          );
        }
        const uploadedUrls = await Promise.all(
          files.fileUrls.map((f) => uploadInSpace(f, "estimates/fileUrls")),
        );
        updatedFileUrls = [...updatedFileUrls, ...uploadedUrls];
        break;
      }
      case "remove": {
        if (!payload.fileUrls || payload.fileUrls.length === 0) {
          throw new ApiError(
            httpStatus.BAD_REQUEST,
            "No URLs provided to remove",
          );
        }
        const toRemove = new Set(payload.fileUrls);
        updatedFileUrls = updatedFileUrls.filter((url) => !toRemove.has(url));
        break;
      }
      case "replace": {
        if (!payload.fileUrls || payload.fileUrls.length === 0) {
          throw new ApiError(
            httpStatus.BAD_REQUEST,
            "No URLs provided to replace",
          );
        }
        if (
          !files?.fileUrls ||
          files.fileUrls.length !== payload.fileUrls.length
        ) {
          throw new ApiError(
            httpStatus.BAD_REQUEST,
            "Number of uploaded files must match number of URLs to replace",
          );
        }
        const uploadedUrls = await Promise.all(
          files.fileUrls.map((f) => uploadInSpace(f, "estimates/fileUrls")),
        );
        const replaceMap = new Map<string, string>();
        payload.fileUrls.forEach((oldUrl, idx) => {
          replaceMap.set(oldUrl, uploadedUrls[idx]);
        });
        updatedFileUrls = updatedFileUrls.map((url) =>
          replaceMap.has(url) ? replaceMap.get(url)! : url,
        );
        break;
      }
      default:
        throw new ApiError(httpStatus.BAD_REQUEST, "Invalid fileUrlsAction");
    }
  }

  // 4. Update database
  const updatedEstimate = await prisma.estimate.update({
    where: { id: estimateId },
    data: {
      sideMap: updatedSideMap,
      fileUrls: updatedFileUrls,
    },
    select: {
      id: true,
      estimateName: true,
      sideMap: true,
      fileUrls: true,
    },
  });

  return updatedEstimate;
};

// update estimate item images

const updateEstimateItemImages = async (
  estimateId: string,
  payload: TUpdateEstimateItemImages,
  files?: Express.Multer.File[],
) => {
  // 1. Fetch estimate
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    select: { itemImages: true, items: true },
  });
  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  // 2. Verify item exists in the estimate's items array
  /* const itemExists = estimate.items.some(
    (item: any) => item.id === payload.itemId,
  );
  if (!itemExists)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Item ${payload.itemId} not found in estimate`,
    );
 */
  // 3. Get current itemImages array
  let itemImages: { itemId: string; images: string[] }[] =
    (estimate.itemImages as any) || [];
  let itemIndex = itemImages.findIndex((i) => i.itemId === payload.itemId);
  let currentImages: string[] =
    itemIndex !== -1 ? itemImages[itemIndex].images : [];

  // 4. Handle actions
  if (payload.action === "add") {
    if (!files || files.length === 0)
      throw new ApiError(400, "No images provided");
    if (files.length > 20) throw new ApiError(400, "Max 20 images per request");
    const uploadedUrls = await Promise.all(
      files.map((f) => uploadInSpace(f, "estimates/itemImages")),
    );
    if (itemIndex === -1) {
      itemImages.push({ itemId: payload.itemId, images: uploadedUrls });
    } else {
      itemImages[itemIndex].images.push(...uploadedUrls);
    }
  } else if (payload.action === "remove") {
    if (!payload.imageUrls || payload.imageUrls.length === 0)
      throw new ApiError(400, "No URLs to remove");
    if (itemIndex === -1)
      throw new ApiError(404, "No images found for this item");
    const newImages = currentImages.filter(
      (url) => !payload.imageUrls!.includes(url),
    );
    if (newImages.length === currentImages.length)
      throw new ApiError(400, "None of the URLs were found");
    if (newImages.length === 0) {
      itemImages.splice(itemIndex, 1);
    } else {
      itemImages[itemIndex].images = newImages;
    }
  } else if (payload.action === "replace") {
    if (!files || files.length === 0)
      throw new ApiError(400, "No new images provided");
    if (!payload.imageUrls || payload.imageUrls.length === 0)
      throw new ApiError(400, "No URLs to replace");
    if (files.length !== payload.imageUrls.length)
      throw new ApiError(400, "Number of files must match number of URLs");
    if (files.length > 20) throw new ApiError(400, "Max 20 images");
    if (itemIndex === -1)
      throw new ApiError(404, "No images found for this item");
    const oldUrlsSet = new Set(payload.imageUrls);
    const toReplace = currentImages.filter((url) => oldUrlsSet.has(url));
    if (toReplace.length !== payload.imageUrls.length)
      throw new ApiError(400, "One or more URLs not found");
    const uploadedUrls = await Promise.all(
      files.map((f) => uploadInSpace(f, "estimates/itemImages")),
    );
    const remainingImages = currentImages.filter((url) => !oldUrlsSet.has(url));
    itemImages[itemIndex].images = [...remainingImages, ...uploadedUrls];
  }

  // 5. Save back to database
  await prisma.estimate.update({
    where: { id: estimateId },
    data: { itemImages: itemImages as any },
  });

  return { success: true, itemId: payload.itemId, action: payload.action };
};

const addEstimateItemImagesBulk = async (
  estimateId: string,
  files?: Express.Multer.File[],
) => {
  // 1. Fetch estimate & validate
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    select: { id: true, items: true, itemImages: true },
  });
  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  // 2. If no files were sent, throw error
  if (!files || files.length === 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No image files provided");
  }

  // 3. Group files by itemId (fieldname expected: "images[<itemId>]")
  const filesByItem: Record<string, Express.Multer.File[]> = {};
  for (const file of files) {
    const fieldName = file.fieldname;
    const match = fieldName.match(/^images\[(.+)\]$/);
    if (!match) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        `Invalid file field name: "${fieldName}". Expected format: images[<itemId>]`,
      );
    }
    const itemId = match[1];
    if (!filesByItem[itemId]) filesByItem[itemId] = [];
    filesByItem[itemId].push(file);
  }

  // 4. Ensure all item IDs exist in the estimate's items
  const validItemIds = new Set(
    (estimate.items as Array<{ id: string }>).map((i) => i.id),
  );
  for (const itemId of Object.keys(filesByItem)) {
    if (!validItemIds.has(itemId)) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        `Item with id ${itemId} does not exist in this estimate`,
      );
    }
  }

  // 5. Upload all files concurrently, preserving per-item grouping
  const uploadResults: Record<string, string[]> = {};
  for (const [itemId, fileArr] of Object.entries(filesByItem)) {
    // Enforce max 20 images per item (optional, consistent with existing limit)
    if (fileArr.length > 20) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        `Maximum 20 images per item allowed. Item ${itemId} received ${fileArr.length}.`,
      );
    }

    const urls = await Promise.all(
      fileArr.map((file) => uploadInSpace(file, "estimates/itemImages")),
    );
    uploadResults[itemId] = urls;
  }

  // 6. Update the estimate's itemImages array
  let existingItemImages: Array<{ itemId: string; images: string[] }> =
    (estimate.itemImages as any) || [];

  for (const [itemId, newUrls] of Object.entries(uploadResults)) {
    const existingEntry = existingItemImages.find(
      (entry) => entry.itemId === itemId,
    );
    if (existingEntry) {
      existingEntry.images = [...existingEntry.images, ...newUrls];
    } else {
      existingItemImages.push({ itemId, images: newUrls });
    }
  }

  await prisma.estimate.update({
    where: { id: estimateId },
    data: { itemImages: existingItemImages as any },
  });

  // 7. Return summary
  return Object.entries(uploadResults).map(([itemId, urls]) => ({
    itemId,
    uploadedCount: urls.length,
    urls,
  }));
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
  updateEstimateImages,
  updateEstimateItemImages,
  addEstimateItemImagesBulk,
};

// contract
```

## 🛠️ estimate.subItem.service.ts

```ts
import { randomUUID } from "crypto";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";

// Helper to get estimate and validate existence
const getEstimateOrThrow = async (estimateId: string) => {
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    select: { id: true, items: true, subItems: true },
  });
  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  return estimate;
};

// Validate that all itemId values exist in estimate.items
const validateItemIds = (itemsArray: any[], subItems: { itemId: string }[]) => {
  const existingItemIds = new Set(itemsArray.map((item: any) => item.id));
  for (const sub of subItems) {
    if (!existingItemIds.has(sub.itemId)) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        `Item with id ${sub.itemId} not found in this estimate`,
      );
    }
  }
};

export const subItemService = {
  // Add multiple subitems to an existing estimate
  async addSubItems(estimateId: string, newSubItems: any[]) {
    const estimate = await getEstimateOrThrow(estimateId);
    const currentSubItems = (estimate.subItems as any[]) || [];

    // Generate UUIDs for each new subitem (client never sends id)
    const subItemsToAdd = newSubItems.map((sub) => ({
      id: randomUUID(),
      itemId: sub.itemId,
      title: sub.title,
      quantity: sub.quantity ?? null,
      unitCost: sub.unitCost ?? null,
      price: sub.price ?? null,
    }));

    // Validate parent item IDs
    validateItemIds(estimate.items, subItemsToAdd);

    const updatedSubItems = [...currentSubItems, ...subItemsToAdd];

    await prisma.estimate.update({
      where: { id: estimateId },
      data: { subItems: updatedSubItems },
    });

    return subItemsToAdd; // return newly added subitems with their UUIDs
  },

  // Update a single subitem (by its UUID)
  async updateSubItem(estimateId: string, subItemId: string, updateData: any) {
    const estimate = await getEstimateOrThrow(estimateId);
    const subItems = (estimate.subItems as any[]) || [];

    const index = subItems.findIndex((sub) => sub.id === subItemId);
    if (index === -1) {
      throw new ApiError(httpStatus.NOT_FOUND, "Subitem not found");
    }

    // Apply updates (only fields provided)
    const updatedSubItem = {
      ...subItems[index],
      ...updateData,
    };

    subItems[index] = updatedSubItem;

    await prisma.estimate.update({
      where: { id: estimateId },
      data: { subItems: subItems },
    });

    return updatedSubItem;
  },

  // Delete a single subitem by its UUID
  async deleteSubItem(estimateId: string, subItemId: string) {
    const estimate = await getEstimateOrThrow(estimateId);
    const subItems = (estimate.subItems as any[]) || [];

    const newSubItems = subItems.filter((sub) => sub.id !== subItemId);
    if (newSubItems.length === subItems.length) {
      throw new ApiError(httpStatus.NOT_FOUND, "Subitem not found");
    }

    await prisma.estimate.update({
      where: { id: estimateId },
      data: { subItems: newSubItems },
    });

    return { deleted: true, id: subItemId };
  },
};
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
  subTotal: z.number().nonnegative("Subtotal must be >= 0"),
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
    contractId: objectIdSchema.optional(),
    poNumber: z.string().optional(),
    isGroupingEnabled: z.boolean().optional(),
    estimateNumber: z.string().optional(),
    isAutoInvoice: z.boolean().optional(),
    subItems: z
      .array(
        z.object({
          itemId: objectIdSchema,
          title: z.string().min(1),
          quantity: z.number().positive().optional(),
          unitCost: z.number().nonnegative().optional(),
          price: z.number().nonnegative().optional(),
        }),
      )
      .optional(),
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

// Add to estimate.validation.ts

const estimateImageActionSchema = z
  .object({
    sideMapAction: z.enum(["replace", "remove"]).optional(),
    fileUrlsAction: z.enum(["add", "remove", "replace"]).optional(),
    fileUrls: z.array(z.string().url()).optional(), // URLs to remove or to be replaced (for remove/replace)
  })
  .strict()
  .refine(
    (data) => {
      if (
        data.fileUrlsAction === "remove" &&
        (!data.fileUrls || data.fileUrls.length === 0)
      ) {
        return false;
      }
      if (
        data.fileUrlsAction === "replace" &&
        (!data.fileUrls || data.fileUrls.length === 0)
      ) {
        return false;
      }
      return true;
    },
    { message: "fileUrls must be provided for remove or replace actions" },
  );

export type TEstimateImageAction = z.infer<typeof estimateImageActionSchema>;

// estimate item images validation

const updateEstimateItemImagesSchema = z
  .object({
    itemId: objectIdSchema,
    action: z.enum(["add", "remove", "replace"]),
    imageUrls: z.array(z.string().url()).optional(),
  })
  .strict()
  .refine(
    (data) => {
      if (
        (data.action === "remove" || data.action === "replace") &&
        (!data.imageUrls || data.imageUrls.length === 0)
      )
        return false;
      return true;
    },
    { message: "imageUrls required for remove/replace actions" },
  );

export type TUpdateEstimateItemImages = z.infer<
  typeof updateEstimateItemImagesSchema
>;

// ========== SUBLINE ITEMS VALIDATION ==========

// Schema for adding multiple subitems to an existing estimate
const addSubItemsSchema = z.object({
  subItems: z
    .array(
      z.object({
        itemId: objectIdSchema, // parent line item ID (must exist in estimate.items)
        title: z.string().min(1, "Title is required"),
        quantity: z.number().positive("Quantity must be > 0").optional(),
        unitCost: z
          .number()
          .nonnegative("Unit cost cannot be negative")
          .optional(),
        price: z.number().nonnegative("Price cannot be negative").optional(),
      }),
    )
    .min(1, "At least one subitem is required"),
});

// Schema for updating a single subitem
const updateSubItemSchema = z
  .object({
    title: z.string().min(1).optional(),
    quantity: z.number().positive().optional(),
    unitCost: z.number().nonnegative().optional(),
    price: z.number().nonnegative().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update",
  });

// Schema for delete (only URL param – no body needed)

export const estimateValidation = {
  createEstimateSchema,
  markUpValidationSchema,
  itemValidationSchema,
  taxValidationSchema,
  itemUpdateValidationSchema,
  updateEstimateStatusSchema,
  updateEmailSignSchema,
  sendEstimateEmailSchema,
  estimateImageActionSchema,
  updateEstimateItemImagesSchema,
  addSubItemsSchema,
  updateSubItemSchema,
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
import { estimateSubItemControllers } from "./estimate.subItem.controller";

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
  fileUploader.uploadMultiple, // handles "itemImages" field
  parseBodyData, // parses JSON fields from multipart
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

router.patch(
  "/estimate-images/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(estimateValidation.estimateImageActionSchema),
  estimateControllers.updateEstimateImages,
);

router.patch(
  "/item-images/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple, // provides req.files.urls
  parseBodyData,
  validateRequest(estimateValidation.updateEstimateItemImagesSchema),
  estimateControllers.updateEstimateItemImages,
);

// ========== SUBLINE ITEMS ROUTES ==========

router.post(
  "/:estimateId/sub-items",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.addSubItemsSchema),
  estimateSubItemControllers.addSubItems,
);

router.patch(
  "/:estimateId/sub-items/:subItemId",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(estimateValidation.updateSubItemSchema),
  estimateSubItemControllers.updateSubItem,
);

router.delete(
  "/:estimateId/sub-items/:subItemId",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  estimateSubItemControllers.deleteSubItem,
);

router.post(
  "/item-images/bulk-add/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.upload.any(), // accepts dynamic field names like images[<itemId>]
  parseBodyData, // still needed? Not required for no body, but harmless
  // validateRequest(estimateValidation.addEstimateItemImagesBulkSchema), // optional
  estimateControllers.addEstimateItemImagesBulk,
);

export const estimateRoutes = router;
```

## 🎮 estimate.subItem.controller.ts

```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { subItemService } from "./estimate.subItem.service";

export const estimateSubItemControllers = {
  addSubItems: catchAsync(async (req, res) => {
    const { estimateId } = req.params;
    const { subItems } = req.body;

    const result = await subItemService.addSubItems(estimateId, subItems);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Subitems added successfully",
      data: result,
    });
  }),

  updateSubItem: catchAsync(async (req, res) => {
    const { estimateId, subItemId } = req.params;
    const updateData = req.body;

    const result = await subItemService.updateSubItem(
      estimateId,
      subItemId,
      updateData,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Subitem updated successfully",
      data: result,
    });
  }),

  deleteSubItem: catchAsync(async (req, res) => {
    const { estimateId, subItemId } = req.params;

    const result = await subItemService.deleteSubItem(estimateId, subItemId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Subitem deleted successfully",
      data: result,
    });
  }),
};
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
  const files = req.files as Express.Multer.File[] | undefined;
  // Note: req.files from multer.fields() is an object keyed by field name.
  // For simplicity we will flatten only the "itemImages" files.
  let itemImages: Express.Multer.File[] = [];
  if (files && (files as any).itemImages) {
    itemImages = (files as any).itemImages;
  }
  const newItem = await estimateService.createNewItemInDB(itemData, itemImages);
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

const itemList = catchAsync(async (_req, res) => {
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

const updateEstimateImages = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const payload = req.body;
  const files = req.files as {
    sideMap?: Express.Multer.File[];
    fileUrls?: Express.Multer.File[];
  };

  const result = await estimateService.updateEstimateImages(
    estimateId,
    payload,
    files,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Estimate images updated successfully",
    data: result,
  });
});

// update estimate item images
const updateEstimateItemImages = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const payload = req.body;
  const files = req.files as { urls?: Express.Multer.File[] };

  const result = await estimateService.updateEstimateItemImages(
    estimateId,
    payload,
    files?.urls,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Item images updated successfully",
    data: result,
  });
});

const addEstimateItemImagesBulk = catchAsync(async (req, res) => {
  const { id: estimateId } = req.params;
  const files = req.files as Express.Multer.File[]; // upload.any() → array

  const result = await estimateService.addEstimateItemImagesBulk(
    estimateId,
    files,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bulk item images added successfully",
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
  updateEstimateImages,
  updateEstimateItemImages,
  addEstimateItemImagesBulk,
};
```
