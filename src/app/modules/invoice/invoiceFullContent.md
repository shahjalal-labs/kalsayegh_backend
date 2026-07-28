# invoiceFullContent.md

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

33 directories, 145 files
```

## 📁 invoice Module Tree

```bash
/home/sj/web/smt_project/kalsayegh_backend/src/app/modules/invoice
├── invoice.api2.http
├── invoice.api.http
├── invoice.controller.ts
├── invoice.routes.ts
├── invoice.service.ts
├── invoice.subItem.controller.ts
├── invoice.subItem.service.ts
├── invoice.validation.ts
└── subitems.api.http

1 directory, 9 files
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

## 🎮 invoice.controller.ts

```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { invoiceService } from "./invoice.service";
import pick from "../../../shared/pick";
import { paginationOptions } from "../../../shared/pagination";
import { TUpdateInvoiceEmailSignSchema } from "./invoice.validation";

const createInvoice = catchAsync(async (req, res) => {
  const result = await invoiceService.createInvoice(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Invoice has been created successfully",
    data: result,
  });
});

const updateInvoice = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.updateInvoice(invoiceId, req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice updated successfully",
    data: result,
  });
});

const getAllInvoices = catchAsync(async (req, res) => {
  const pagination = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm", "status"]);
  const result = await invoiceService.getAllInvoices(pagination, filter);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoices retrieved successfully.",
    data: result,
  });
});

const getInvoiceDetails = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.getInvoiceDetails(invoiceId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice details retrieved successfully.",
    data: result,
  });
});

const sendInvoiceEmail = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const payload = req.body;

  const result = await invoiceService.sendInvoiceEmail(invoiceId, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice email(s) sent successfully.",
    data: result,
  });
});

const updateInvoiceEmailAndSign = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const { emailStatus, signedName, mySignName, mySignAt } =
    req.body as TUpdateInvoiceEmailSignSchema;

  const result = await invoiceService.updateInvoiceEmailAndSign(
    invoiceId,
    emailStatus,
    signedName,
    mySignName,
    mySignAt,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice email/signature updated successfully.",
    data: result,
  });
});

const generateInvoiceFromEstimate = catchAsync(async (req, res) => {
  const { estimateId } = req.params; // assuming route param :estimateId
  const result = await invoiceService.generateInvoiceFromEstimate(estimateId);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Invoice generated successfully from estimate.",
    data: result,
  });
});

const recordManualPayment = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const userId = req.user.id;
  const result = await invoiceService.recordManualPayment(
    invoiceId,
    userId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Payment recorded successfully",
    data: result,
  });
});

const depositCheck = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const userId = req.user.id;

  // Extract text fields from request body
  const payload = {
    amount: parseFloat(req.body.amount),
    paymentDate: req.body.paymentDate,
    checkNumber: req.body.checkNumber,
    description: req.body.description,
  };

  // Extract files from request
  const files = req.files as {
    checkFront?: Express.Multer.File[];
    checkBack?: Express.Multer.File[];
  };

  const result = await invoiceService.recordCheckDeposit(
    invoiceId,
    userId,
    payload,
    files,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Check deposit recorded successfully",
    data: result,
  });
});

const getInvoicePayments = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.getInvoicePayments(invoiceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payments retrieved successfully",
    data: result,
  });
});

const refundPayment = catchAsync(async (req, res) => {
  const { id: paymentId } = req.params;
  const { amount, reason } = req.body;

  const result = await invoiceService.refundPayment(paymentId, {
    amount,
    reason,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Refund processed successfully",
    data: result,
  });
});

const getPaymentDetails = catchAsync(async (req, res) => {
  const { id: paymentId } = req.params;

  const result = await invoiceService.getPaymentDetails(paymentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment details retrieved successfully",
    data: result,
  });
});

const payInvoiceWithCard = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const { paymentMethodId } = req.body;

  const result = await invoiceService.payInvoiceWithCard(
    invoiceId,
    paymentMethodId,
  );

  sendResponse(res, {
    statusCode: result.success ? httpStatus.OK : httpStatus.PAYMENT_REQUIRED,
    success: result.success,
    message: result.success
      ? "Payment successful"
      : "Payment requires additional action",
    data: result,
  });
});

const getPublicInvoiceDetails = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.getPublicInvoiceDetails(invoiceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice details retrieved successfully",
    data: result,
  });
});

const createPaymentIntent = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.createPaymentIntent(invoiceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Payment intent created successfully",
    data: result,
  });
});

const deleteInvoice = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const result = await invoiceService.deleteInvoice(invoiceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice deleted successfully",
    data: result,
  });
});

const getInvoiceNumber = catchAsync(async (_req, res) => {
  const result = await invoiceService.getInvoiceNumber();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice number retrieved successfully",
    data: result,
  });
});

// invoice.controller.ts – add this function

const updateInvoiceImages = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const payload = req.body;
  const files = req.files as {
    sideMap?: Express.Multer.File[];
    fileUrls?: Express.Multer.File[];
  };

  const result = await invoiceService.updateInvoiceImages(
    invoiceId,
    payload,
    files,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Invoice images updated successfully",
    data: result,
  });
});

const updateInvoiceItemImages = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const payload = req.body;
  const files = req.files as { urls?: Express.Multer.File[] };

  const result = await invoiceService.updateInvoiceItemImages(
    invoiceId,
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

const addInvoiceItemImagesBulk = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const files = req.files as Express.Multer.File[]; // upload.any() → array

  const result = await invoiceService.addInvoiceItemImagesBulk(
    invoiceId,
    files,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bulk item images added successfully",
    data: result,
  });
});

const duplicateInvoice = catchAsync(async (req, res) => {
  const { id: invoiceId } = req.params;
  const userId = req.user.id;

  const result = await invoiceService.duplicateInvoiceInDB(invoiceId, userId);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Invoice duplicated successfully",
    data: result,
  });
});

export const invoiceController = {
  createInvoice,
  updateInvoice,
  getAllInvoices,
  getInvoiceDetails,
  sendInvoiceEmail,
  updateInvoiceEmailAndSign,
  generateInvoiceFromEstimate,
  recordManualPayment,
  depositCheck,
  getInvoicePayments,
  refundPayment,
  getPaymentDetails,
  payInvoiceWithCard,
  getPublicInvoiceDetails,
  createPaymentIntent,
  deleteInvoice,
  getInvoiceNumber,
  updateInvoiceImages,
  updateInvoiceItemImages,
  addInvoiceItemImagesBulk,
  duplicateInvoice,
};
```

## 🛠️ invoice.subItem.service.ts

```ts
import { randomUUID } from "crypto";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";

// Helper to get invoice and validate existence
const getInvoiceOrThrow = async (invoiceId: string) => {
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: { id: true, items: true, subItems: true },
  });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
  return invoice;
};

// Validate that all itemId values exist in invoice.items
const validateItemIds = (itemsArray: any[], subItems: { itemId: string }[]) => {
  const existingItemIds = new Set(itemsArray.map((item: any) => item.id));
  for (const sub of subItems) {
    if (!existingItemIds.has(sub.itemId)) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        `Item with id ${sub.itemId} not found in this invoice`,
      );
    }
  }
};

export const invoiceSubItemService = {
  // Add multiple subitems to an existing invoice
  async addSubItems(invoiceId: string, newSubItems: any[]) {
    const invoice = await getInvoiceOrThrow(invoiceId);
    const currentSubItems = (invoice.subItems as any[]) || [];

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
    validateItemIds(invoice.items, subItemsToAdd);

    const updatedSubItems = [...currentSubItems, ...subItemsToAdd];

    await prisma.invoice.update({
      where: { id: invoiceId },
      data: { subItems: updatedSubItems },
    });

    return subItemsToAdd; // return newly added subitems with their UUIDs
  },

  // Update a single subitem (by its UUID)
  async updateSubItem(invoiceId: string, subItemId: string, updateData: any) {
    const invoice = await getInvoiceOrThrow(invoiceId);
    const subItems = (invoice.subItems as any[]) || [];

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

    await prisma.invoice.update({
      where: { id: invoiceId },
      data: { subItems: subItems },
    });

    return updatedSubItem;
  },

  // Delete a single subitem by its UUID
  async deleteSubItem(invoiceId: string, subItemId: string) {
    const invoice = await getInvoiceOrThrow(invoiceId);
    const subItems = (invoice.subItems as any[]) || [];

    const newSubItems = subItems.filter((sub) => sub.id !== subItemId);
    if (newSubItems.length === subItems.length) {
      throw new ApiError(httpStatus.NOT_FOUND, "Subitem not found");
    }

    await prisma.invoice.update({
      where: { id: invoiceId },
      data: { subItems: newSubItems },
    });

    return { deleted: true, id: subItemId };
  },
};
```

## 📝 invoice.validation.ts

```ts
import z from "zod";
import {
  objectIdSchema,
  TItemTypeSchema,
} from "../estimate/estimate.validation";
import { Format } from "@prisma/client";

const createInvoiceSchema = z
  .object({
    clientId: objectIdSchema,
    invoiceName: z.string().min(1, "Estimate name is required"),
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
    mySignName: z.string().trim().optional(),
    mySignAt: z.string().optional(),
    format: z.nativeEnum(Format).default("DESCRIPTION"),
    contractId: objectIdSchema.optional(),
    poNumber: z.string().optional(),
    isGroupingEnabled: z.boolean().optional(),
    invoiceNumber: z.string().optional(),
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

export type TCreateInvoice = z.infer<typeof createInvoiceSchema>;

const updateInvoiceSchema = createInvoiceSchema.partial().extend({
  // Override items to be optional but keep item validation when provided
  items: z.array(TItemTypeSchema).optional(),
  clientId: objectIdSchema.optional(),
});

export type TUpdateInvoice = z.infer<typeof updateInvoiceSchema>;

const sendInvoiceEmailSchema = z.object({
  to: z
    .array(z.string().email("Invalid recipient email"))
    .min(1, "At least one recipient is required"),
  subject: z.string().optional(),
  message: z.string().optional(),
  sendMeCopy: z.boolean().optional().default(false),
});

const updateInvoiceEmailSignSchema = z
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

export type TUpdateInvoiceEmailSignSchema = z.infer<
  typeof updateInvoiceEmailSignSchema
>;

const generateInvoiceSchema = z.object({
  estimateId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid estimate ID"),
});

const recordManualPaymentSchema = z.object({
  amount: z.number().positive("Amount must be greater than 0"),
  paymentDate: z.string().datetime(),
  paymentMethod: z.enum(["CASH", "CHECK", "CARD", "BANK_TRANSFER"]),
  checkNumber: z.string().optional(),
});

const refundPaymentSchema = z.object({
  amount: z.number().positive("Amount must be greater than 0"),
  reason: z.string().optional(),
});

const payWithCardSchema = z.object({
  paymentMethodId: z.string().min(1, "Payment method ID is required"),
});

const depositCheckSchema = z.object({
  amount: z.number().positive("Amount must be greater than 0"),
  paymentDate: z.string().datetime("Invalid date format"),
  checkNumber: z.string().optional(),
  description: z.string().max(500, "Description too long").optional(),
  // Files are handled separately via multer, not in Zod
});

export type TDepositCheck = z.infer<typeof depositCheckSchema>;

// invoice image update validation

const invoiceImageActionSchema = z
  .object({
    // For sideMap (single image)
    sideMapAction: z.enum(["replace", "remove"]).optional(),
    // For fileUrls (multiple)
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

export type TInvoiceImageAction = z.infer<typeof invoiceImageActionSchema>;

// invoice item images validation
const updateInvoiceItemImagesSchema = z
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

export type TUpdateInvoiceItemImages = z.infer<
  typeof updateInvoiceItemImagesSchema
>;

// ========== SUBLINE ITEMS VALIDATION (INVOICE) ==========

// Schema for adding multiple subitems to an existing invoice
export const addInvoiceSubItemsSchema = z.object({
  subItems: z
    .array(
      z.object({
        itemId: objectIdSchema, // parent line item ID (must exist in invoice.items)
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
const updateInvoiceSubItemSchema = z
  .object({
    title: z.string().min(1).optional(),
    quantity: z.number().positive().optional(),
    unitCost: z.number().nonnegative().optional(),
    price: z.number().nonnegative().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update",
  });

export const invoiceValidation = {
  createInvoiceSchema,
  sendInvoiceEmailSchema,
  updateInvoiceEmailSignSchema,
  generateInvoiceSchema,
  recordManualPaymentSchema,
  depositCheckSchema,
  refundPaymentSchema,
  payWithCardSchema,
  updateInvoiceSchema,
  invoiceImageActionSchema,
  updateInvoiceItemImagesSchema,
  addInvoiceSubItemsSchema,
  updateInvoiceSubItemSchema,
};
```

## 🔧 invoice.routes.ts

```ts
import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import validateRequest from "../../middlewares/validateRequest";
import { invoiceValidation } from "./invoice.validation";
import { invoiceController } from "./invoice.controller";
import { invoiceSubItemControllers } from "./invoice.subItem.controller";

const router = Router();

router.post(
  "/create",
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(invoiceValidation.createInvoiceSchema),
  auth(UserRole.ESTIMATOR, UserRole.ADMIN),
  invoiceController.createInvoice,
);

router.patch(
  "/update/:id",
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(invoiceValidation.updateInvoiceSchema),
  auth(UserRole.ESTIMATOR, UserRole.ADMIN),
  invoiceController.updateInvoice,
);

router.get(
  "/all-invoices",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.getAllInvoices,
);

router.get(
  "/details/:id",
  // auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.getInvoiceDetails,
);

router.post(
  "/send-email/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR), // adjust roles as needed
  validateRequest(invoiceValidation.sendInvoiceEmailSchema),
  invoiceController.sendInvoiceEmail,
);

router.patch(
  "/update-email-sign/:id",
  validateRequest(invoiceValidation.updateInvoiceEmailSignSchema),
  invoiceController.updateInvoiceEmailAndSign,
);

router.post(
  "/generate-from-estimate/:estimateId",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.generateInvoiceFromEstimate,
);

router.post(
  "/record-payment/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(invoiceValidation.recordManualPaymentSchema),
  invoiceController.recordManualPayment,
);

router.post(
  "/deposit-check/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple, // handles checkFront, checkBack fields
  parseBodyData, // parses JSON fields from multipart
  validateRequest(invoiceValidation.depositCheckSchema),
  invoiceController.depositCheck,
);

// /:invoiceId
router.get(
  "/payments/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.getInvoicePayments,
);

router.post(
  "/refund-payment/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(invoiceValidation.refundPaymentSchema),
  invoiceController.refundPayment,
);

router.get(
  "/payment-details/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.getPaymentDetails,
);

router.post(
  "/pay-with-stripe/:id",
  validateRequest(invoiceValidation.payWithCardSchema),
  invoiceController.payInvoiceWithCard,
);

router.get("/public-invoice/:id", invoiceController.getPublicInvoiceDetails);

router.post(
  "/create-payment-intent/:id",
  invoiceController.createPaymentIntent,
);

router.delete(
  "/delete/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR, UserRole.OFFICE_ADMINISTRATOR),
  invoiceController.deleteInvoice,
);

router.get("/invoice-number", auth(), invoiceController.getInvoiceNumber);

router.patch(
  "/invoice-images/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(invoiceValidation.invoiceImageActionSchema),
  invoiceController.updateInvoiceImages,
);

router.patch(
  "/item-images/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.uploadMultiple, // provides req.files.urls
  parseBodyData,
  validateRequest(invoiceValidation.updateInvoiceItemImagesSchema),
  invoiceController.updateInvoiceItemImages,
);

// ========== SUBLINE ITEMS ROUTES (INVOICE) ==========

router.post(
  "/:invoiceId/sub-items",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(invoiceValidation.addInvoiceSubItemsSchema),
  invoiceSubItemControllers.addSubItems,
);

router.patch(
  "/:invoiceId/sub-items/:subItemId",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  validateRequest(invoiceValidation.updateInvoiceSubItemSchema),
  invoiceSubItemControllers.updateSubItem,
);

router.delete(
  "/:invoiceId/sub-items/:subItemId",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceSubItemControllers.deleteSubItem,
);

router.post(
  "/item-images/bulk-add/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  fileUploader.upload.any(), // accepts any field name → dynamic mapping
  parseBodyData, // parses the JSON 'items' field
  invoiceController.addInvoiceItemImagesBulk,
);

router.post(
  "/duplicate/:id",
  auth(UserRole.ADMIN, UserRole.ESTIMATOR),
  invoiceController.duplicateInvoice,
);

export const invoiceRoutes = router;
```

## 🎮 invoice.subItem.controller.ts

```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { invoiceSubItemService } from "./invoice.subItem.service";

export const invoiceSubItemControllers = {
  addSubItems: catchAsync(async (req, res) => {
    const { invoiceId } = req.params;
    const { subItems } = req.body;

    const result = await invoiceSubItemService.addSubItems(invoiceId, subItems);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Subitems added successfully",
      data: result,
    });
  }),

  updateSubItem: catchAsync(async (req, res) => {
    const { invoiceId, subItemId } = req.params;
    const updateData = req.body;

    const result = await invoiceSubItemService.updateSubItem(
      invoiceId,
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
    const { invoiceId, subItemId } = req.params;

    const result = await invoiceSubItemService.deleteSubItem(
      invoiceId,
      subItemId,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Subitem deleted successfully",
      data: result,
    });
  }),
};
```

## 🛠️ invoice.service.ts

```ts
import { Request } from "express";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import {
  TCreateInvoice,
  TInvoiceImageAction,
  TUpdateInvoice,
  TUpdateInvoiceItemImages,
} from "./invoice.validation";
import {
  EmailStatus,
  InvoiceStage,
  InvoiceStatus,
  PaymentStatus,
  Prisma,
} from "@prisma/client";
import { paginationHelper, TOptions } from "../../../shared/pagination";
import { invoiceEmailWithPayment } from "../../../shared/emailTemplate";
import sendEmailAdvanced from "../../../helpers/sendEmailAdvanced";
import { stripe } from "../../../helpers/stripe";
import { randomUUID } from "crypto";

/* const createInvoice = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload: TCreateInvoice = req.body;
  const estimatorId = req.user.id;

  const existingClient = await prisma.client.findUnique({
    where: {
      id: payload.clientId,
    },
  });

  if (!existingClient) {
    throw new ApiError(httpStatus.NOT_FOUND, "Client does not exist");
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
      files.map((file) => uploadInSpace(file, `invoice/${folder}`)),
    );
  };

  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  const invoiceCount = await prisma.invoice.count();

  const newInvoice = await prisma.invoice.create({
    data: {
      clientId: payload.clientId,
      estimatorId: estimatorId,
      legendary: payload.legendary,
      date: payload.date,
      endDate: payload.endDate as string,
      invoiceName: payload.invoiceName,
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
      invoiceNumber: (invoiceCount + 1).toString(),
    },
  });

  return newInvoice;
}; */

// accept subline items creation
const createInvoice = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload: TCreateInvoice = req.body;
  const estimatorId = req.user.id;

  // 1. Validate client
  const existingClient = await prisma.client.findUnique({
    where: { id: payload.clientId },
  });
  if (!existingClient)
    throw new ApiError(httpStatus.NOT_FOUND, "Client does not exist");

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
    if (!existingItem)
      throw new ApiError(400, `Item with id ${item.id} does not exist`);
  }

  // 4. Process subitems (if any) – generate UUIDs and validate itemId references
  let processedSubItems: any[] | undefined;
  if (
    payload.subItems &&
    Array.isArray(payload.subItems) &&
    payload.subItems.length > 0
  ) {
    const validItemIds = new Set(items.map((i: any) => i.id));
    processedSubItems = payload.subItems.map((sub: any) => {
      if (!validItemIds.has(sub.itemId)) {
        throw new ApiError(
          400,
          `Subitem references itemId ${sub.itemId} which is not in the invoice items list`,
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
  }

  // 5. Process images
  const processImages = async (
    files: Express.Multer.File[] | undefined,
    folder: string,
  ) => {
    if (!files || files.length === 0) return null;
    return Promise.all(
      files.map((file) => uploadInSpace(file, `invoice/${folder}`)),
    );
  };
  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  // 6. Get invoice count for numbering
  const invoiceCount = await prisma.invoice.count();

  // 7. Create invoice
  const newInvoice = await prisma.invoice.create({
    data: {
      clientId: payload.clientId,
      estimatorId: estimatorId,
      legendary: payload.legendary,
      date: payload.date,
      endDate: payload.endDate as string,
      invoiceName: payload.invoiceName,
      items: payload.items,
      subItems: processedSubItems, // store subitems
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
      invoiceNumber: (invoiceCount + 1).toString(),
    },
  });

  return newInvoice;
};

/* const updateInvoice = async (invoiceId: string, req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload: TUpdateInvoice = req.body;
  const estimatorId = req.user.id;

  // 1. Check if invoice exists
  const existingInvoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
  });

  if (!existingInvoice) {
    throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
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
      files.map((file) => uploadInSpace(file, `invoice/${folder}`)),
    );
  };

  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  // 6. Build update data object using relation connect syntax
  const updateData: Prisma.InvoiceUpdateInput = {
    // Always update the estimator (last editor)
    estimator: { connect: { id: estimatorId } },
  };

  if (payload.clientId !== undefined) {
    updateData.client = { connect: { id: payload.clientId } };
  }
  if (payload.invoiceName !== undefined) {
    updateData.invoiceName = payload.invoiceName;
  }
  if (payload.legendary !== undefined) {
    updateData.legendary = payload.legendary;
  }

  if (payload.date !== undefined) {
    updateData.date = payload.date;
  }
  if (payload.endDate !== undefined) {
    updateData.endDate = payload.endDate;
  }
  if (payload.items !== undefined) {
    updateData.items = payload.items;
  }
  if (payload.grandTotal !== undefined) {
    updateData.grandTotal = payload.grandTotal;
  }
  if (payload.additionalMarkUp !== undefined) {
    updateData.additionalMarkUp = payload.additionalMarkUp;
  }
  if (payload.discountAmount !== undefined) {
    updateData.discountAmount = payload.discountAmount;
  }
  if (payload.depositAmount !== undefined) {
    updateData.depositAmount = payload.depositAmount;
  }
  if (payload.isOnlinePayment !== undefined) {
    updateData.isOnlinePayment = payload.isOnlinePayment;
  }
  if (payload.coverPaymentProcessingFee !== undefined) {
    updateData.coverPaymentProcessingFee = payload.coverPaymentProcessingFee;
  }
  if (payload.noteForClient !== undefined) {
    updateData.noteForClient = payload.noteForClient;
  }
  if (payload.privateNote !== undefined) {
    updateData.privateNote = payload.privateNote;
  }
  if (payload.clientSign !== undefined) {
    updateData.clientSign = payload.clientSign;
  }
  if (payload.mySign !== undefined) {
    updateData.mySign = payload.mySign;
  }
  if (payload.format !== undefined) {
    updateData.format = payload.format;
  }
  if (payload.contractId !== undefined) {
    updateData.contract = { connect: { id: payload.contractId } };
  }

  // Overwrite sideMap / fileUrls if new files were uploaded
  if (map && map.length > 0) {
    updateData.sideMap = map[0];
  }
  if (urls && urls.length > 0) {
    updateData.fileUrls = urls;
  }

  // 7. Perform update
  const updatedInvoice = await prisma.invoice.update({
    where: { id: invoiceId },
    data: updateData,
  });

  // 8. Fetch detailed items for the response
  const itemIds = updatedInvoice.items.map((item: any) => item.id);
  const itemsDetail =
    itemIds.length > 0
      ? await prisma.item.findMany({
          where: { id: { in: itemIds } },
        })
      : [];

  return {
    ...updatedInvoice,
    items: itemsDetail,
  };
}; */

const updateInvoice = async (invoiceId: string, req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload: TUpdateInvoice = req.body;
  const estimatorId = req.user.id;

  // 1. Check if invoice exists
  const existingInvoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
  });
  if (!existingInvoice) {
    throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
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

  // 5. Process image uploads (if any)
  const processImages = async (
    files: Express.Multer.File[] | undefined,
    folder: string,
  ) => {
    if (!files || files.length === 0) return null;
    return Promise.all(
      files.map((file) => uploadInSpace(file, `invoice/${folder}`)),
    );
  };
  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  // 6. Build update data object
  const updateData: Prisma.InvoiceUpdateInput = {
    estimator: { connect: { id: estimatorId } },
  };

  // Scalar fields
  if (payload.clientId !== undefined) {
    updateData.client = { connect: { id: payload.clientId } };
  }
  if (payload.invoiceName !== undefined) {
    updateData.invoiceName = payload.invoiceName;
  }
  if (payload.legendary !== undefined) {
    updateData.legendary = payload.legendary;
  }
  if (payload.date !== undefined) {
    updateData.date = payload.date;
  }
  if (payload.endDate !== undefined) {
    updateData.endDate = payload.endDate;
  }
  if (payload.items !== undefined) {
    updateData.items = payload.items;
  }
  if (payload.grandTotal !== undefined) {
    updateData.grandTotal = payload.grandTotal;
  }
  if (payload.additionalMarkUp !== undefined) {
    updateData.additionalMarkUp = payload.additionalMarkUp;
  }
  if (payload.discountAmount !== undefined) {
    updateData.discountAmount = payload.discountAmount;
  }
  if (payload.depositAmount !== undefined) {
    updateData.depositAmount = payload.depositAmount;
  }
  if (payload.isOnlinePayment !== undefined) {
    updateData.isOnlinePayment = payload.isOnlinePayment;
  }
  if (payload.coverPaymentProcessingFee !== undefined) {
    updateData.coverPaymentProcessingFee = payload.coverPaymentProcessingFee;
  }
  if (payload.noteForClient !== undefined) {
    updateData.noteForClient = payload.noteForClient;
  }
  if (payload.privateNote !== undefined) {
    updateData.privateNote = payload.privateNote;
  }
  if (payload.clientSign !== undefined) {
    updateData.clientSign = payload.clientSign;
  }
  if (payload.mySign !== undefined) {
    updateData.mySign = payload.mySign;
  }
  if (payload.format !== undefined) {
    updateData.format = payload.format;
  }
  if (payload.contractId !== undefined) {
    updateData.contract = { connect: { id: payload.contractId } };
  }
  if (payload.poNumber !== undefined) {
    updateData.poNumber = payload.poNumber;
  }
  if (payload.isGroupingEnabled !== undefined) {
    updateData.isGroupingEnabled = payload.isGroupingEnabled;
  }
  if (payload.invoiceNumber !== undefined) {
    updateData.invoiceNumber = payload.invoiceNumber;
  }

  // Overwrite sideMap / fileUrls if new files were uploaded
  if (map && map.length > 0) {
    updateData.sideMap = map[0];
  }
  if (urls && urls.length > 0) {
    updateData.fileUrls = urls;
  }

  // ========== 7. Handle subitems – FULL REPLACEMENT ==========
  // Only process subitems if the payload includes `subItems` (even empty array)
  if (payload.subItems !== undefined) {
    // Determine the final items array (after update)
    const finalItems =
      payload.items && Array.isArray(payload.items)
        ? payload.items
        : (existingInvoice.items as any[]);

    const validItemIds = new Set(finalItems.map((item: any) => item.id));

    // Process each subitem from the payload
    const processedSubItems = (payload.subItems as any[]).map((sub: any) => {
      if (!validItemIds.has(sub.itemId)) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          `Subitem references itemId ${sub.itemId} which is not in the invoice items list (after update)`,
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
  const updatedInvoice = await prisma.invoice.update({
    where: { id: invoiceId },
    data: updateData,
  });

  // 9. Fetch detailed items for response
  const itemIds = updatedInvoice.items.map((item: any) => item.id);
  const itemsDetail =
    itemIds.length > 0
      ? await prisma.item.findMany({
          where: { id: { in: itemIds } },
        })
      : [];

  return {
    ...updatedInvoice,
    items: itemsDetail,
  };
};

const getAllInvoices = async (
  paginations: TOptions,
  filter?: {
    status?: InvoiceStatus;
    searchTerm?: string;
  },
) => {
  const { page, limit, skip } = paginationHelper(paginations);

  const whereClause: Prisma.InvoiceWhereInput = {};

  const andClause: Prisma.InvoiceWhereInput[] = [];

  if (filter?.status && filter.status !== "ACTIVE") {
    andClause.push({
      status: filter.status,
    });
  }

  if (filter?.status && filter.status === "ACTIVE") {
    andClause.push({
      OR: [
        {
          status: "ACTIVE",
        },
        {
          status: "PARTIAL",
        },
      ],
    });
  }

  const searchTerm = filter?.searchTerm?.trim();
  if (searchTerm)
    andClause.push({
      OR: [
        {
          invoiceName: {
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

  const [invoice, total] = await Promise.all([
    prisma.invoice.findMany({
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

    prisma.invoice.count({
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
    data: invoice,
  };
};

const getInvoiceDetails = async (invoiceId: string) => {
  const invoice = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
    },
    include: {
      client: true,
      contract: true,
    },
    omit: {
      createdAt: true,
    },
  });

  if (!invoice) {
    throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
  }

  const invoiceItems = Array.isArray(invoice.items) ? invoice.items : [];

  const itemIds = invoiceItems.map((item) => item.id);

  const dbItems =
    itemIds.length > 0
      ? await prisma.item.findMany({
          where: {
            id: {
              in: itemIds,
            },
          },
          select: {
            id: true, // needed for mapping
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
    const matchedInvoiceItem = invoiceItems.find(
      (item) => item.id === dbItem.id,
    );

    return {
      ...dbItem,
      quantity: matchedInvoiceItem?.quantity ?? 0,
      subTotal: matchedInvoiceItem?.subTotal ?? 0,
    };
  });

  return {
    ...invoice,
    items: finalItems,
  };
};

// Compute the amount a client must pay right now (deposit first, then remaining balance)
const getAmountDue = (
  invoice: { grandTotal: number; depositAmount: number | null },
  totalPaidNet: number,
): number => {
  const { grandTotal, depositAmount } = invoice;
  const netPaid = totalPaidNet;
  let due: number;
  if (depositAmount && depositAmount > 0 && netPaid < depositAmount) {
    due = depositAmount - netPaid;
  } else {
    due = grandTotal - netPaid;
  }
  // Round to 2 decimal places to avoid floating‑point leftovers
  const rounded = Math.round(due * 100) / 100;
  // Treat anything less than 1 cent as zero
  return rounded < 0.01 ? 0 : rounded;
};

const sendInvoiceEmail = async (
  invoiceId: string,
  payload: {
    to: string[];
    subject?: string;
    message?: string;
    sendMeCopy?: boolean;
  },
) => {
  // Fetch invoice with client details
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: {
      client: { select: { clientName: true, email: true } },
    },
  });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  // ---- Calculate total paid net (respecting refunds) ----
  const payments = await prisma.payment.findMany({
    where: { invoiceId, status: { not: "REFUNDED" } },
    include: { refunds: true },
  });
  let totalPaidNet = 0;
  for (const p of payments) {
    const refunded = p.refunds.reduce((sum, r) => sum + r.amount, 0);
    totalPaidNet += p.amount - refunded;
  }

  const amountDue = getAmountDue(invoice, totalPaidNet);
  if (amountDue <= 0.01) {
    // tolerate up to 1 cent due to rounding
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Invoice already fully paid. No amount due.",
    );
  }

  if (amountDue <= 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Invoice already fully paid. No amount due.",
    );
  }

  // Prepare recipients
  let to = [...payload.to];
  const cc: string[] = [];
  if (payload.sendMeCopy) cc.push("shahjalal.backend@gmail.com");

  // Default subject
  const defaultSubject = `Your Invoice #${invoice.invoiceName || invoiceId.slice(-6)} from Geo Paving and Sealcoating`;
  const subject = payload.subject || defaultSubject;

  // Generate payment link
  const frontendUrl = process.env.FRONTEND_URL || "https://yourfrontend.com";
  const paymentLink = `${frontendUrl}/invoice/${invoiceId}/pay`;

  // Generate HTML using AMOUNT DUE (not grand total)
  const html = invoiceEmailWithPayment({
    clientName: invoice.client.clientName,
    invoiceName: invoice.invoiceName || invoiceId.slice(-6),
    amountDue: amountDue, // ← critical: dynamic amount due
    date: invoice.date,
    dueDate: invoice.endDate as string,
    customMessage: payload.message,
    paymentLink,
  });

  // Send email
  await sendEmailAdvanced({
    to,
    cc: cc.length ? cc : undefined,
    subject,
    html,
  });

  // Update invoice status
  await prisma.invoice.update({
    where: { id: invoiceId },
    data: { emailStatus: EmailStatus.SENT, stage: "ISSUED" },
  });

  return { success: true, to, cc, amountDue };
};

// Add to invoice.service.ts

const updateInvoiceEmailAndSign = async (
  invoiceId: string,
  emailStatus?: "READ",
  signedName?: string,
  mySignName?: string,
  mySignAt?: string,
) => {
  const existingInvoice = await prisma.invoice.count({
    where: { id: invoiceId },
  });

  if (!existingInvoice) {
    throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
  }

  const updateData: Prisma.InvoiceUpdateInput = {};

  if (emailStatus) {
    updateData.emailStatus = emailStatus;
  }

  if (signedName) {
    updateData.isSigned = true;
    updateData.signedAt = new Date();
    updateData.signedName = signedName;
  }

  if (mySignName) {
    updateData.mySignName = mySignName;
    updateData.mySignAt = mySignAt;
  }

  console.log(`updateData:`, updateData);
  if (Object.keys(updateData).length === 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No valid fields to update");
  }

  const updatedInvoice = await prisma.invoice.update({
    where: { id: invoiceId },
    data: updateData,
    select: {
      id: true,
      invoiceName: true,
      emailStatus: true,
      isSigned: true,
      signedName: true,
      signedAt: true,
    },
  });

  return updatedInvoice;
};

const generateInvoiceFromEstimate = async (estimateId: string) => {
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
  });

  if (!estimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  // block if already generated
  /* if (estimate.isInvoiced) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Invoice already generated for this estimate",
    );
  } */

  // 3. Prepare invoice data (copy from estimate)
  const invoiceData: Prisma.InvoiceCreateInput = {
    client: { connect: { id: estimate.clientId } },
    estimator: { connect: { id: estimate.estimatorId } },
    invoiceName: estimate.estimateName, // or generate unique invoice number
    legendary: estimate.legendary,
    date: estimate.date,
    endDate: estimate.endDate,
    sideMap: estimate.sideMap,
    fileUrls: estimate.fileUrls,
    items: estimate.items,
    additionalMarkUp: estimate.additionalMarkUp,
    grandTotal: estimate.grandTotal,
    discountAmount: estimate.discountAmount,
    depositAmount: estimate.depositAmount,
    // Default status/stage for new invoice
    status: "ACTIVE",
    stage: "DRAFT",
    emailStatus: "NOT_SENT",
    // Signature fields (copy if signed)
    isSigned: estimate.isSigned,
    signedAt: estimate.signedAt,
    signedName: estimate.signedName,
    // Link back to estimate
    estimate: { connect: { id: estimateId } },
  };

  // 4. Create invoice
  const newInvoice = await prisma.invoice.create({
    data: invoiceData,
  });

  // 5. Update estimate: mark as invoiced
  await prisma.estimate.update({
    where: { id: estimateId },
    data: { isInvoiced: true },
  });

  return newInvoice;
};

export const updateInvoiceStatus = async (invoiceId: string) => {
  // Get total paid amount from all COMPLETED payments (excluding refunded amounts)
  const payments = await prisma.payment.findMany({
    where: { invoiceId, status: { not: "REFUNDED" } },
    include: { refunds: true },
  });

  let totalPaid = 0;
  for (const payment of payments) {
    let netPaid = payment.amount;
    const refundedAmount = payment.refunds.reduce(
      (sum, r) => sum + r.amount,
      0,
    );
    netPaid -= refundedAmount;
    if (netPaid > 0) totalPaid += netPaid;
  }

  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: { grandTotal: true },
  });
  if (!invoice) return;

  let newStatus: InvoiceStatus = InvoiceStatus.ACTIVE;
  if (totalPaid >= invoice.grandTotal) {
    newStatus = InvoiceStatus.PAID;
  } else if (totalPaid > 0) {
    newStatus = InvoiceStatus.PARTIAL;
  } else {
    newStatus = InvoiceStatus.ACTIVE;
  }

  await prisma.invoice.update({
    where: { id: invoiceId },
    data: { status: newStatus },
  });
};

// in invoice.service.ts

const recordManualPayment = async (
  invoiceId: string,
  userId: string,
  data: any,
) => {
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
  });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  // Validate check number if payment method is CHECK
  /* if (data.paymentMethod === "CHECK" && !data.checkNumber) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Check number is required for check payment",
    );
  } */

  // --- prevent overpayment ---
  // Calculate total paid so far (net of refunds)
  const existingPayments = await prisma.payment.findMany({
    where: { invoiceId, status: { not: "REFUNDED" } },
    include: { refunds: true },
  });

  let totalPaidNet = 0;
  for (const p of existingPayments) {
    const refunded = p.refunds.reduce((sum, r) => sum + r.amount, 0);
    totalPaidNet += p.amount - refunded;
  }

  const remainingDue = invoice.grandTotal - totalPaidNet;
  if (remainingDue <= 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Invoice is already fully paid. Cannot record additional payment.",
    );
  }

  if (data.amount > remainingDue) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Payment amount exceeds remaining due of $${(remainingDue / 100).toFixed(2)}.`,
    );
  }
  // --- end overpayment prevention ---

  // Create payment record
  const payment = await prisma.payment.create({
    data: {
      invoiceId,
      amount: data.amount,
      paymentDate: new Date(data.paymentDate),
      paymentMethod: data.paymentMethod,
      checkNumber: data.checkNumber,
      status: "COMPLETED",
    },
  });

  // Update invoice status
  await updateInvoiceStatus(invoiceId);

  return payment;
};

const recordCheckDeposit = async (
  invoiceId: string,
  userId: string,
  payload: {
    amount: number;
    paymentDate: string;
    checkNumber?: string;
    description?: string;
  },
  files?: {
    checkFront?: Express.Multer.File[];
    checkBack?: Express.Multer.File[];
  },
) => {
  // 1. Verify invoice exists
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
  });
  if (!invoice) {
    throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
  }

  // 2. Validate payment date
  const paymentDate = new Date(payload.paymentDate);
  if (isNaN(paymentDate.getTime())) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invalid payment date");
  }

  // 3. Prevent overpayment (same logic as recordManualPayment)
  const existingPayments = await prisma.payment.findMany({
    where: { invoiceId, status: { not: "REFUNDED" } },
    include: { refunds: true },
  });

  let totalPaidNet = 0;
  for (const p of existingPayments) {
    const refunded = p.refunds.reduce((sum, r) => sum + r.amount, 0);
    totalPaidNet += p.amount - refunded;
  }

  const remainingDue = invoice.grandTotal - totalPaidNet;
  if (remainingDue <= 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invoice is already fully paid");
  }

  if (payload.amount > remainingDue) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Payment amount exceeds remaining due of $${remainingDue.toFixed(2)}`,
    );
  }

  // 4. Upload check images (optional)
  let checkFrontImage: string | null = null;
  let checkBackImage: string | null = null;

  if (files?.checkFront && files.checkFront.length > 0) {
    checkFrontImage = await uploadInSpace(
      files.checkFront[0],
      "payments/checks/front",
    );
  }

  if (files?.checkBack && files.checkBack.length > 0) {
    checkBackImage = await uploadInSpace(
      files.checkBack[0],
      "payments/checks/back",
    );
  }

  // 5. Create payment record
  const payment = await prisma.payment.create({
    data: {
      invoiceId,
      amount: payload.amount,
      paymentDate,
      paymentMethod: "CHECK",
      checkNumber: payload.checkNumber,
      description: payload.description,
      checkFrontImage,
      checkBackImage,
      status: "COMPLETED",
    },
  });

  // 6. Update invoice status
  await updateInvoiceStatus(invoiceId);

  return payment;
};

const getInvoicePayments = async (invoiceId: string) => {
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: { grandTotal: true },
  });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  // Fetch all payments with their refunds
  const payments = await prisma.payment.findMany({
    where: { invoiceId },
    include: { refunds: true },
    orderBy: { paymentDate: "asc" },
  });

  // Build unified transactions
  const transactions = [];
  for (const payment of payments) {
    // Payment transaction (positive)
    transactions.push({
      id: payment.id,
      type: "payment",
      amount: payment.amount,
      date: payment.paymentDate,
      method: payment.paymentMethod,
      checkNumber: payment.checkNumber,
      description: payment.paymentMethod,
      status: payment.status,
    });

    // Refund transactions (negative)
    for (const refund of payment.refunds) {
      transactions.push({
        id: refund.id,
        type: "refund",
        amount: -refund.amount,
        date: refund.createdAt,
        method: payment.paymentMethod,
        description: `Refund (${payment.paymentMethod})`,
        originalPaymentId: payment.id,
      });
    }
  }

  // Sort by date descending (newest first)
  transactions.sort((a, b) => b.date.getTime() - a.date.getTime());

  // Calculate totals for summary (without balanceDue)
  const totalPaid = payments.reduce((sum, p) => {
    const refunded = p.refunds.reduce((rSum, r) => rSum + r.amount, 0);
    return sum + (p.amount - refunded);
  }, 0);
  const totalDue = invoice.grandTotal;
  const paidPercentage = (totalPaid / totalDue) * 100;

  return {
    summary: {
      totalPaid,
      totalDue,
      paidPercentage,
    },
    transactions,
  };
};

const refundPayment = async (
  paymentId: string,
  data: { amount: number; reason?: string /* userId: string */ },
) => {
  const { amount, reason } = data;

  // 1. Retrieve payment with its invoice details
  const payment = await prisma.payment.findUnique({
    where: { id: paymentId },
    include: {
      invoice: true,
      refunds: true,
    },
  });
  if (!payment) throw new ApiError(httpStatus.NOT_FOUND, "Payment not found");

  // 2. Calculate remaining refundable amount
  const alreadyRefunded = payment.refunds.reduce((sum, r) => sum + r.amount, 0);
  const remaining = payment.amount - alreadyRefunded;
  if (amount > remaining) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Refund amount cannot exceed remaining payment amount of $${(remaining / 100).toFixed(2)}`,
    );
  }

  // 3. PROCESS BASE STRIPE REFUND IF NECESSARY
  let stripeRefundId: string | null = null;
  if (payment.paymentMethod === "STRIPE") {
    // Ensure we have the payment_intent_id
    if (!payment.stripePaymentIntentId) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Missing Stripe PaymentIntent ID. Cannot process refund for this online payment.",
      );
    }

    try {
      // Create the refund using Stripe's API
      const stripeRefund = await stripe.refunds.create({
        payment_intent: payment.stripePaymentIntentId,
        amount: Math.round(amount * 100), // convert dollars → cents
        reason: reason === "FRAUD" ? "fraudulent" : "requested_by_customer",
      });
      stripeRefundId = stripeRefund.id;
    } catch (stripeError: any) {
      throw new ApiError(
        httpStatus.BAD_GATEWAY,
        `Stripe refund failed: ${stripeError.message}`,
      );
    }
  }

  // 4. RECORD REFUND IN YOUR DATABASE
  const refund = await prisma.refund.create({
    data: {
      paymentId: payment.id,
      amount: amount,
      reason: reason,
      stripeRefundId: stripeRefundId,
    },
  });

  // 5. UPDATE PAYMENT STATUS
  const newRefundTotal = alreadyRefunded + amount;
  let newPaymentStatus: PaymentStatus = "COMPLETED";
  if (newRefundTotal === payment.amount) {
    newPaymentStatus = "REFUNDED";
  } else {
    newPaymentStatus = "PARTIALLY_REFUNDED";
  }
  await prisma.payment.update({
    where: { id: paymentId },
    data: { status: newPaymentStatus },
  });

  // 6. UPDATE INVOICE STATUS
  await updateInvoiceStatus(payment.invoiceId);

  return { refund, newPaymentStatus, stripeRefundId };
};

const getPaymentDetails = async (paymentId: string) => {
  const payment = await prisma.payment.findUnique({
    where: {
      id: paymentId,
    },
    omit: {
      updatedAt: true,
      stripePaymentIntentId: true,
    },
  });
  return payment;
};

const payInvoiceWithCard = async (
  invoiceId: string,
  paymentMethodId: string,
) => {
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: { client: true },
  });

  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  // Calculate remaining amount due
  const payments = await prisma.payment.findMany({
    where: { invoiceId, status: { not: "REFUNDED" } },
    include: { refunds: true },
  });
  let totalPaidNet = 0;
  for (const p of payments) {
    const refunded = p.refunds.reduce((sum, r) => sum + r.amount, 0);
    totalPaidNet += p.amount - refunded;
  }
  //const amountDue = invoice.grandTotal - totalPaidNet;
  const amountDue = getAmountDue(invoice, totalPaidNet);
  if (amountDue <= 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invoice already fully paid");
  }

  if (amountDue < 0.01 && amountDue > 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Amount due is less than 1 cent. Cannot process payment.",
    );
  }

  // Create or reuse Stripe customer (optional)
  let customerId: string | undefined;
  if (invoice.client.email) {
    const customers = await stripe.customers.list({
      email: invoice.client.email,
      limit: 1,
    });
    if (customers.data.length) {
      customerId = customers.data[0].id;
    } else {
      const customer = await stripe.customers.create({
        email: invoice.client.email,
        name: invoice.client.clientName,
        metadata: { clientId: invoice.clientId },
      });
      customerId = customer.id;
    }
  }

  // Create and confirm PaymentIntent – with redirects disabled
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amountDue * 100), // convert dollars → cents,
    currency: "usd",
    payment_method: paymentMethodId,
    customer: customerId,
    confirm: true,
    description: `Payment for Invoice ${invoice.invoiceName}`,
    metadata: {
      invoiceId: invoice.id,
      clientEmail: invoice.client.email || "",
    },
    automatic_payment_methods: {
      enabled: true,
      allow_redirects: "never", // ← the fix
    },
  });

  if (paymentIntent.status === "succeeded") {
    const payment = await prisma.payment.create({
      data: {
        invoiceId: invoice.id,
        amount: amountDue,
        paymentDate: new Date(),
        paymentMethod: "STRIPE",
        stripePaymentIntentId: paymentIntent.id,
        status: "COMPLETED",
      },
    });
    await updateInvoiceStatus(invoice.id);
    return { success: true, payment };
  } else if (paymentIntent.status === "requires_action") {
    return {
      success: false,
      requiresAction: true,
      clientSecret: paymentIntent.client_secret,
      message: "Additional authentication required",
    };
  } else {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Payment failed: ${paymentIntent.status}`,
    );
  }
};

const getPublicInvoiceDetails = async (invoiceId: string) => {
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: {
      client: {
        select: {
          clientName: true,
          email: true,
          phoneNumber: true,
          address: true,
          city: true,
          state: true,
          zip: true,
        },
      },
      estimator: {
        select: {
          fullName: true,
          email: true,
        },
      },
    },
  });

  if (!invoice) {
    throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
  }

  // Also include the total paid amount and balance due
  const payments = await prisma.payment.findMany({
    where: { invoiceId, status: "COMPLETED" },
    include: { refunds: true },
  });

  let totalPaidNet = 0;
  for (const p of payments) {
    const refunded = p.refunds.reduce((sum, r) => sum + r.amount, 0);
    totalPaidNet += p.amount - refunded;
  }

  // const amountDue = invoice.grandTotal - totalPaidNet;

  let amountDue = getAmountDue(invoice, totalPaidNet);
  amountDue = Math.max(0, Math.round(amountDue * 100) / 100);

  return {
    ...invoice,
    payments: {
      totalPaid: totalPaidNet,
      amountDue: Math.max(0, amountDue),
    },
  };
};

/* const createPaymentIntent = async (invoiceId: string) => {
  const invoice = await prisma.invoice.findUnique({ where: { id: invoiceId } });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  // Calculate amount due (same as before)
  const payments = await prisma.payment.findMany({
    where: { invoiceId, status: { not: "REFUNDED" } },
    include: { refunds: true },
  });
  let totalPaidNet = 0;
  for (const p of payments) {
    const refunded = p.refunds.reduce((sum, r) => sum + r.amount, 0);
    totalPaidNet += p.amount - refunded;
  }
  const amountDue = getAmountDue(invoice, totalPaidNet);
  if (amountDue <= 0)
    throw new ApiError(httpStatus.BAD_REQUEST, "Invoice fully paid");

  // Create PaymentIntent – NOT confirmed. Allow both card and US bank account.
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amountDue * 100),
    currency: "usd",
    payment_method_types: ["card", "us_bank_account"], // enable ACH
    metadata: { invoiceId: invoice.id },
    automatic_payment_methods: { enabled: true, allow_redirects: "never" },
  });

  return { clientSecret: paymentIntent.client_secret };
}; */

const createPaymentIntent = async (invoiceId: string) => {
  const invoice = await prisma.invoice.findUnique({ where: { id: invoiceId } });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  // Calculate amount due (re-use your existing logic)
  const payments = await prisma.payment.findMany({
    where: { invoiceId, status: { not: "REFUNDED" } },
    include: { refunds: true },
  });
  let totalPaidNet = 0;
  for (const p of payments) {
    const refunded = p.refunds.reduce((sum, r) => sum + r.amount, 0);
    totalPaidNet += p.amount - refunded;
  }
  const amountDue = getAmountDue(invoice, totalPaidNet);
  if (amountDue <= 0)
    throw new ApiError(httpStatus.BAD_REQUEST, "Invoice fully paid");

  // Create PaymentIntent – only enable automatic payment methods
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amountDue * 100),
    currency: "usd",
    payment_method_types: ["card", "us_bank_account"], // explicit list
    metadata: { invoiceId: invoice.id },
    // Do NOT include automatic_payment_methods
  });

  return { clientSecret: paymentIntent.client_secret };
};

const deleteInvoice = async (invoiceId: string) => {
  const invoiceExist = await prisma.invoice.count({
    where: {
      id: invoiceId,
    },
  });

  if (!invoiceExist)
    throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  return prisma.invoice.delete({
    where: {
      id: invoiceId,
    },
    select: {
      id: true,
      invoiceName: true,
    },
  });
};

const getInvoiceNumber = async () => {
  return prisma.invoice.count();
};

// update invoice images

// invoice.service.ts – add this function

const updateInvoiceImages = async (
  invoiceId: string,
  payload: TInvoiceImageAction,
  files?: {
    sideMap?: Express.Multer.File[];
    fileUrls?: Express.Multer.File[];
  },
) => {
  // 1. Fetch existing invoice
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: { id: true, sideMap: true, fileUrls: true },
  });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  let updatedSideMap = invoice.sideMap;
  let updatedFileUrls = invoice.fileUrls ?? [];

  // 2. Handle sideMap (single image)
  if (payload.sideMapAction === "replace") {
    if (!files?.sideMap || files.sideMap.length === 0) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "No image provided to replace sideMap",
      );
    }
    const uploaded = await uploadInSpace(files.sideMap[0], "invoice/sideMap");
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
          files.fileUrls.map((f) => uploadInSpace(f, "invoice/fileUrls")),
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
          files.fileUrls.map((f) => uploadInSpace(f, "invoice/fileUrls")),
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
  const updatedInvoice = await prisma.invoice.update({
    where: { id: invoiceId },
    data: {
      sideMap: updatedSideMap,
      fileUrls: updatedFileUrls,
    },
    select: {
      id: true,
      invoiceName: true,
      sideMap: true,
      fileUrls: true,
    },
  });

  return updatedInvoice;
};

// update invoice item images
const updateInvoiceItemImages = async (
  invoiceId: string,
  payload: TUpdateInvoiceItemImages,
  files?: Express.Multer.File[],
) => {
  // 1. Fetch invoice
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: { itemImages: true, items: true },
  });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  // 2. Verify item exists in invoice's items array
  /* const itemExists = invoice.items.some(
    (item: any) => item.id === payload.itemId,
  );
  if (!itemExists)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Item ${payload.itemId} not found in invoice`,
    ); */

  // 3. Get current itemImages array
  let itemImages: { itemId: string; images: string[] }[] =
    (invoice.itemImages as any) || [];
  let itemIndex = itemImages.findIndex((i) => i.itemId === payload.itemId);
  let currentImages: string[] =
    itemIndex !== -1 ? itemImages[itemIndex].images : [];

  // 4. Handle actions
  if (payload.action === "add") {
    if (!files || files.length === 0)
      throw new ApiError(400, "No images provided");
    if (files.length > 20) throw new ApiError(400, "Max 20 images per request");
    const uploadedUrls = await Promise.all(
      files.map((f) => uploadInSpace(f, "invoices/itemImages")),
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
      files.map((f) => uploadInSpace(f, "invoices/itemImages")),
    );
    const remainingImages = currentImages.filter((url) => !oldUrlsSet.has(url));
    itemImages[itemIndex].images = [...remainingImages, ...uploadedUrls];
  }

  // 5. Save back to database
  await prisma.invoice.update({
    where: { id: invoiceId },
    data: { itemImages: itemImages as any },
  });

  return { success: true, itemId: payload.itemId, action: payload.action };
};

const addInvoiceItemImagesBulk = async (
  invoiceId: string,
  files?: Express.Multer.File[],
) => {
  // 1. Fetch invoice & validate
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: { id: true, items: true, itemImages: true },
  });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  // 2. If no files were sent, just return (nothing to add)
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

  // 4. Ensure all item IDs exist in the invoice's items
  const validItemIds = new Set(
    (invoice.items as Array<{ id: string }>).map((i) => i.id),
  );
  for (const itemId of Object.keys(filesByItem)) {
    if (!validItemIds.has(itemId)) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        `Item with id ${itemId} does not exist in this invoice`,
      );
    }
  }

  // 5. Upload all files concurrently, preserving per-item grouping
  const uploadResults: Record<string, string[]> = {};
  for (const [itemId, fileArr] of Object.entries(filesByItem)) {
    // Enforce max 20 images per item (optional, consistent with existing limits)
    if (fileArr.length > 20) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        `Maximum 20 images per item allowed. Item ${itemId} received ${fileArr.length}.`,
      );
    }

    const urls = await Promise.all(
      fileArr.map((file) => uploadInSpace(file, "invoices/itemImages")),
    );
    uploadResults[itemId] = urls;
  }

  // 6. Update the invoice itemImages array
  let existingItemImages: Array<{ itemId: string; images: string[] }> =
    (invoice.itemImages as any) || [];

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

  await prisma.invoice.update({
    where: { id: invoiceId },
    data: { itemImages: existingItemImages as any },
  });

  // 7. Return a summary
  return Object.entries(uploadResults).map(([itemId, urls]) => ({
    itemId,
    uploadedCount: urls.length,
    urls,
  }));
};

const duplicateInvoiceInDB = async (invoiceId: string, userId: string) => {
  // 1. Fetch the original invoice with all needed fields
  const original = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: {
      clientId: true,
      contractId: true,
      invoiceName: true,
      legendary: true,
      date: true,
      endDate: true,
      sideMap: true,
      fileUrls: true,
      items: true,
      subItems: true,
      itemImages: true,
      additionalMarkUp: true,
      grandTotal: true,
      discountAmount: true,
      depositAmount: true,
      isOnlinePayment: true,
      coverPaymentProcessingFee: true,
      noteForClient: true,
      privateNote: true,
      format: true,
      poNumber: true,
      isGroupingEnabled: true,
      mySign: true,
      mySignAt: true,
      mySignName: true,
      // We intentionally omit estimateId to set it null later
    },
  });

  if (!original) {
    throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
  }

  // 2. Process subItems: generate new UUIDs for each
  let processedSubItems = undefined;
  if (
    original.subItems &&
    Array.isArray(original.subItems) &&
    original.subItems.length > 0
  ) {
    processedSubItems = original.subItems.map((sub: any) => ({
      ...sub,
      id: randomUUID(), // new unique ID for each sub-item
    }));
  }

  // 3. Get invoice count for numbering
  const invoiceCount = await prisma.invoice.count();

  // 4. Prepare data for new invoice
  const newInvoiceData = {
    // Copied fields
    clientId: original.clientId,
    contractId: original.contractId,
    invoiceName: original.invoiceName,
    legendary: original.legendary,
    date: original.date,
    endDate: original.endDate,
    sideMap: original.sideMap,
    fileUrls: original.fileUrls,
    items: original.items,
    subItems: processedSubItems,
    itemImages: original.itemImages,
    additionalMarkUp: original.additionalMarkUp,
    grandTotal: original.grandTotal,
    discountAmount: original.discountAmount,
    depositAmount: original.depositAmount,
    isOnlinePayment: original.isOnlinePayment,
    coverPaymentProcessingFee: original.coverPaymentProcessingFee,
    noteForClient: original.noteForClient,
    privateNote: original.privateNote,
    format: original.format,
    poNumber: original.poNumber,
    isGroupingEnabled: original.isGroupingEnabled,

    // Copied signature fields (mySign, mySignAt, mySignName)
    mySign: original.mySign,
    mySignAt: original.mySignAt,
    mySignName: original.mySignName,

    // Reset fields with proper enum values
    estimatorId: userId,
    status: InvoiceStatus.ACTIVE,
    stage: InvoiceStage.DRAFT,
    emailStatus: EmailStatus.NOT_SENT,
    isSigned: false,
    signedAt: null,
    signedName: null,
    clientSign: false,
    estimateId: null, // explicitly unlink from any estimate

    // New invoice number
    invoiceNumber: (invoiceCount + 1).toString(),
  };

  // 5. Create the new invoice
  const newInvoice = await prisma.invoice.create({
    data: newInvoiceData,
  });

  return newInvoice;
};

export const invoiceService = {
  createInvoice,
  updateInvoice,
  getAllInvoices,
  getInvoiceDetails,
  sendInvoiceEmail,
  updateInvoiceEmailAndSign,
  generateInvoiceFromEstimate,
  recordManualPayment,
  recordCheckDeposit,
  getInvoicePayments,
  refundPayment,
  getPaymentDetails,
  payInvoiceWithCard,
  getPublicInvoiceDetails,
  createPaymentIntent,
  deleteInvoice,
  getInvoiceNumber,
  updateInvoiceImages,
  updateInvoiceItemImages,
  addInvoiceItemImagesBulk,
  duplicateInvoiceInDB,
};
```
