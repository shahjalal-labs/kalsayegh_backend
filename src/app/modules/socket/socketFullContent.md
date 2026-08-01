# socketFullContent.md

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
│   │   │   │   ├── adminFullContent.md
│   │   │   │   ├── admin.routes.ts
│   │   │   │   ├── admin.service.ts
│   │   │   │   └── admin.validation.ts
│   │   │   ├── auth
│   │   │   │   ├── auth.api.http
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── authFullContent.md
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
│   │   │   │   ├── estimate.api2.http
│   │   │   │   ├── estimate.api.http
│   │   │   │   ├── estimate.controller.ts
│   │   │   │   ├── estimateFullContent.md
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
│   │   │   │   ├── invoice.api2.http
│   │   │   │   ├── invoice.api.http
│   │   │   │   ├── invoice.controller.ts
│   │   │   │   ├── invoiceFullContent.md
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

33 directories, 146 files
```

## 📁 socket Module Tree

```bash
/home/sj/web/smt_project/kalsayegh_backend/src/app/modules/socket
├── socket.interface.ts
├── socket.service.ts
└── socket.verifyToken.ts

1 directory, 3 files
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
  SUPER_ADMIN
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
  id          String  @id @default(auto()) @map("_id") @db.ObjectId
  estimatorId String? @db.ObjectId
  clientName  String
  email       String  @unique
  phoneNumber String
  address     String
  city        String
  zip         String
  state       String

  // ===  for service address ===
  serviceAddress     String?
  serviceCity        String?
  serviceState       String?
  serviceZip         String?
  isServiceDifferent Boolean? @default(false)

  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
  estimator User?      @relation(fields: [estimatorId], references: [id], onDelete: Cascade)
  estimates Estimate[]
  invoices  Invoice[]

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

  // === FIELDS FOR CHECK DEPOSIT ===
  checkFrontImage String? // URL of uploaded front check image
  checkBackImage  String? // URL of uploaded back check image (optional)
  description     String? // Optional description 

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  invoice   Invoice  @relation(fields: [invoiceId], references: [id], onDelete: Cascade)
  refunds   Refund[]

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

## 📄 socket.interface.ts

```ts
export interface CustomWebSocket extends WebSocket {
  userId?: string;
}
```

## 🛠️ socket.service.ts

```ts
import { WebSocket, WebSocketServer } from "ws";
import { Request } from "express";
import prisma from "../../../shared/prisma";
import redisClient from "../../../helpers/redis";
import { verifyWebSocketToken } from "./socket.verifyToken";

interface CustomWebSocket extends WebSocket {
  userId?: string;
}

const roomUsers = new Map<string, Set<WebSocket>>();
const connectedUsers = new Set<CustomWebSocket>();
let wss;

export function setupWebSocketServer(server: any) {
  wss = new WebSocketServer({ server });

  const getConnectedUserIds = () =>
    new Set(
      Array.from(connectedUsers)
        .map((ws) => ws.userId)
        .filter((id): id is string => Boolean(id)),
    );

  const getUserMap = async (memberIds: string[]) => {
    if (memberIds.length === 0) return new Map<string, any>();
    const users = await prisma.user.findMany({
      where: { id: { in: memberIds } },
      select: { id: true, fullName: true, profileImage: true },
    });
    return new Map(users.map((user) => [user.id, user]));
  };

  const getMessageReactions = async (messageIds: string[]) => {
    if (messageIds.length === 0) return new Map<string, any[]>();

    const reactions = await prisma.reaction.findMany({
      where: { messageId: { in: messageIds } },
      select: { messageId: true, userId: true, reactionIcon: true },
    });

    const reactionMap = new Map<string, any[]>();
    for (const reaction of reactions) {
      const existing = reactionMap.get(reaction.messageId) || [];
      existing.push({
        userId: reaction.userId,
        reaction: reaction.reactionIcon,
      });
      reactionMap.set(reaction.messageId, existing);
    }

    return reactionMap;
  };

  const attachReactionsToMessages = async (messages: any[]) => {
    const messageIds = messages
      .map((msg) => msg.id)
      .filter((id): id is string => Boolean(id));
    const reactionMap = await getMessageReactions(messageIds);

    return messages.map((message) => ({
      ...message,
      reactions: reactionMap.get(message.id) || [],
    }));
  };

  const buildConversations = async (targetUserId: string) => {
    const rooms = await prisma.room.findMany({
      where: { memberIds: { has: targetUserId } },
      orderBy: { updatedAt: "desc" },
    });

    const memberIds = Array.from(
      new Set(rooms.flatMap((room) => room.memberIds)),
    );
    const userMap = await getUserMap(memberIds);
    const connectedUserIds = getConnectedUserIds();

    return Promise.all(
      rooms.map(async (room) => {
        const redisKey = `room:${room.id}:messages`;
        const unreadKey = `room:${room.id}:unread:${targetUserId}`;

        const [latestRaw, unreadCountStr] = await Promise.all([
          redisClient.lrange(redisKey, -1, -1),
          redisClient.get(unreadKey),
        ]);

        const latestMsg =
          latestRaw.length > 0 ? JSON.parse(latestRaw[0]) : null;
        const lastMessage = latestMsg
          ? {
              content:
                latestMsg.content ??
                (latestMsg.fileUrl?.length ? "sent file" : null),
              createdAt: latestMsg.createdAt,
              senderId: latestMsg.senderId ?? null,
            }
          : null;

        const members = room.memberIds.map((memberId) => {
          const member = userMap.get(memberId);
          return {
            id: memberId,
            fullName: member?.fullName ?? null,
            profileImage: member?.profileImage ?? null,
            isActive: connectedUserIds.has(memberId),
          };
        });

        const partner =
          room.memberIds.length === 2
            ? members.find((m) => m.id !== targetUserId) || null
            : null;

        return {
          roomId: room.id,
          roomType: room.roomType,
          roomName: room.roomName,
          roomPhoto: room.roomPhoto,
          members,
          partner,
          lastMessage,
          unreadCount: parseInt(unreadCountStr || "0", 10),
        };
      }),
    );
  };

  wss.on("connection", async (ws: CustomWebSocket, req: Request) => {
    const baseUrl = `http://${req.headers.host || "localhost"}`;
    const url = new URL(req.url || "/", baseUrl);
    let authToken =
      url.searchParams.get("x-token") ?? (req.headers["x-token"] as string);

    const decoded = verifyWebSocketToken(ws, authToken);
    if (!decoded) {
      ws.close();
      return;
    }

    const userId = decoded.id;
    ws.userId = userId;
    connectedUsers.add(ws);

    let roomId: string | null = null;

    const interval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) ws.ping();
    }, 30000);

    ws.send(
      JSON.stringify({
        message: "Welcome to the WebSocket server!",
      }),
    );

    ws.on("message", async (message: any) => {
      try {
        const {
          type,
          roomId: incomingRoomId,
          receiverId,
          content,
          fileUrl,
          messageId,
          reaction,
        } = JSON.parse(message.toString());

        switch (type) {
          case "conversation": {
            const conversations = await buildConversations(userId);
            ws.send(
              JSON.stringify({
                type: "conversation",
                conversations,
              }),
            );
            break;
          }

          case "subscribe": {
            let targetRoomId = incomingRoomId as string | undefined;

            if (!targetRoomId && receiverId) {
              const existingRoom = await prisma.room.findFirst({
                where: {
                  memberIds: { hasEvery: [userId, receiverId] },
                  roomName: null,
                },
              });

              const createdRoom = existingRoom
                ? null
                : await prisma.room.create({
                    data: {
                      roomName: null,
                      roomPhoto: null,
                      creatorId: userId,
                      memberIds: [userId, receiverId],
                    },
                  });

              targetRoomId = (createdRoom || existingRoom)?.id;
            }

            if (!targetRoomId) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "roomId or receiverId is required",
                }),
              );
            }

            const room = await prisma.room.findUnique({
              where: { id: targetRoomId },
              select: { memberIds: true },
            });

            if (!room || !room.memberIds.includes(userId)) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "Room not found or access denied",
                }),
              );
            }

            roomId = targetRoomId;

            const unreadKey = `room:${roomId}:unread:${userId}`;
            await redisClient.set(unreadKey, "0");

            roomUsers.forEach((clients, key) => {
              if (clients.has(ws)) {
                clients.delete(ws);
                if (clients.size === 0) roomUsers.delete(key);
              }
            });

            if (!roomUsers.has(roomId)) {
              roomUsers.set(roomId, new Set());
            }
            roomUsers.get(roomId)?.add(ws);

            const redisKey = `room:${roomId}:messages`;
            const redisRaw = await redisClient.lrange(redisKey, -15, -1);
            let messages = redisRaw.reverse().map((msg) => JSON.parse(msg));

            const hasMissingIds = messages.some(
              (msg) => !msg?.id || typeof msg.id !== "string",
            );

            if (messages.length === 0 || hasMissingIds) {
              const dbMessages = await prisma.message.findMany({
                where: { roomId },
                orderBy: { createdAt: "desc" },
                take: 15,
              });

              messages = dbMessages.map((msg) => ({
                id: msg.id,
                content: msg.content,
                senderId: msg.senderId,
                roomId: msg.roomId,
                fileUrl: msg.fileUrl,
                createdAt: msg.createdAt.toISOString(),
                updatedAt: msg.updatedAt.toISOString(),
              }));
            }

            const messagesWithReactions =
              await attachReactionsToMessages(messages);

            ws.send(
              JSON.stringify({
                type: "subscribe",
                roomId,
                messages: messagesWithReactions,
              }),
            );

            break;
          }

          case "send-message": {
            if (!roomId) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "You are not subscribed to any room",
                }),
              );
            }

            const room = await prisma.room.findUnique({
              where: { id: roomId },
              select: { memberIds: true },
            });

            if (!room || !room.memberIds.includes(userId)) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "Room not found or access denied",
                }),
              );
            }

            const senderInfo = await prisma.user.findUnique({
              where: { id: userId },
              select: { id: true, fullName: true, profileImage: true },
            });

            const createdMessage = await prisma.message.create({
              data: {
                roomId,
                senderId: userId,
                content: content ?? null,
                fileUrl: Array.isArray(fileUrl) ? fileUrl : [],
              },
            });

            const messagePayload = {
              id: createdMessage.id,
              content: createdMessage.content,
              senderId: userId,
              sender: senderInfo
                ? {
                    id: senderInfo.id,
                    fullName: senderInfo.fullName,
                    profileImage: senderInfo.profileImage,
                  }
                : null,
              roomId,
              fileUrl: createdMessage.fileUrl,
              createdAt: createdMessage.createdAt.toISOString(),
              updatedAt: createdMessage.updatedAt.toISOString(),
              reactions: [],
            };

            const redisKey = `room:${roomId}:messages`;
            await redisClient.rpush(redisKey, JSON.stringify(messagePayload));
            await redisClient.ltrim(redisKey, -30, -1);

            const pipeline = redisClient.multi();
            for (const memberId of room.memberIds) {
              if (memberId !== userId) {
                pipeline.incr(`room:${roomId}:unread:${memberId}`);
              }
            }
            await pipeline.exec();

            await prisma.room.update({
              where: { id: roomId },
              data: { updatedAt: new Date() },
            });

            roomUsers.get(roomId)?.forEach((client) => {
              if (client.readyState === WebSocket.OPEN) {
                client.send(
                  JSON.stringify({
                    type: "receive-message",
                    message: messagePayload,
                    roomId,
                  }),
                );
              }
            });

            for (const memberId of room.memberIds) {
              const target = Array.from(connectedUsers).find(
                (client) => client.userId === memberId,
              );

              if (target) {
                const conversations = await buildConversations(memberId);
                target.send(
                  JSON.stringify({
                    type: "conversation",
                    conversations,
                  }),
                );
              }
            }

            break;
          }

          case "reaction": {
            if (!roomId) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "You are not subscribed to any room",
                }),
              );
            }

            if (!messageId || typeof messageId !== "string") {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "messageId is required",
                }),
              );
            }

            const messageRecord = await prisma.message.findUnique({
              where: { id: messageId },
              select: { id: true, roomId: true },
            });

            if (!messageRecord || messageRecord.roomId !== roomId) {
              return ws.send(
                JSON.stringify({
                  type: "error",
                  message: "Message not found in subscribed room",
                }),
              );
            }

            const normalizedReaction =
              typeof reaction === "string" ? reaction.trim() : "";

            const existingReaction = await prisma.reaction.findFirst({
              where: { messageId, userId },
              select: { id: true, reactionIcon: true },
            });

            if (!normalizedReaction) {
              if (existingReaction) {
                await prisma.reaction.delete({
                  where: { id: existingReaction.id },
                });
              }
            } else if (existingReaction?.reactionIcon === normalizedReaction) {
              await prisma.reaction.delete({
                where: { id: existingReaction.id },
              });
            } else if (existingReaction) {
              await prisma.reaction.update({
                where: { id: existingReaction.id },
                data: { reactionIcon: normalizedReaction },
              });
            } else {
              await prisma.reaction.create({
                data: {
                  messageId,
                  userId,
                  reactionIcon: normalizedReaction,
                },
              });
            }

            const reactionsRaw = await prisma.reaction.findMany({
              where: { messageId },
              select: { userId: true, reactionIcon: true },
            });

            const reactions = reactionsRaw.map((item) => ({
              userId: item.userId,
              reaction: item.reactionIcon,
            }));

            roomUsers.get(roomId)?.forEach((client) => {
              if (client.readyState === WebSocket.OPEN) {
                client.send(
                  JSON.stringify({
                    type: "update-reactions",
                    messageId,
                    roomId,
                    reactions,
                  }),
                );
              }
            });

            break;
          }

          default:
            ws.send(
              JSON.stringify({
                type: "error",
                message: "Invalid message type",
              }),
            );
        }
      } catch (err: unknown) {
        if (err instanceof SyntaxError) {
          ws.send(JSON.stringify({ type: "error", message: "Bad JSON" }));
        } else if (err instanceof Error) {
          ws.send(JSON.stringify({ type: "error", message: err.message }));
        } else {
          ws.send(
            JSON.stringify({ type: "error", message: "Unexpected error" }),
          );
        }
      }
    });

    ws.on("close", async () => {
      connectedUsers.delete(ws);

      if (roomId) {
        const clients = roomUsers.get(roomId);
        clients?.delete(ws);
        if (clients?.size === 0) roomUsers.delete(roomId);
      }
      clearInterval(interval);
    });
  });
}

export const socket = { wss, roomUsers };
```

## 📄 socket.verifyToken.ts

```ts
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";

export function verifyWebSocketToken(ws: any, token: string) {
  if (!token) {
    ws.send(
      JSON.stringify({ type: "error", message: "You are not authenticated" }),
    );
    return null;
  }

  try {
    const decoded = jwtHelpers.verifyToken(
      token,
      config.jwt.jwt_secret as string,
    );
    return decoded;
  } catch (error: any) {
    const errorMessage =
      error.name === "TokenExpiredError"
        ? "Token has expired!"
        : "Invalid token!";

    ws.send(JSON.stringify({ type: "error", message: errorMessage }));
    return null;
  }
}
```
