# userFullContent.md

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
│   │   │   │   ├── socket.docs.md
│   │   │   │   ├── socketFullContent.md
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

33 directories, 147 files
```

## 📁 user Module Tree

```bash
/home/sj/web/smt_project/kalsayegh_backend/src/app/modules/user
├── user.api.http
├── user.controller.ts
├── user.route.ts
├── user.services.ts
└── user.validation.ts

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

## 🔧 user.route.ts

```ts
import express from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = express.Router();

router.post(
  "/create",
  fileUploader.profileImage,
  parseBodyData,
  validateRequest(userValidation.userRegisterValidationSchema),
  userControllers.createUser,
);
router.post("/resend-otp", userControllers.resendOtp);

router.post(
  "/signup-verification",
  validateRequest(userValidation.verificationSchema),
  userControllers.signupVerification,
);

router.get("/all", auth(), userControllers.getAllUsers);

router.get("/:id", auth(), userControllers.getUserDetails);

export const userRoutes = router;
```

## 🎮 user.controller.ts

```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { userService } from "./user.services";

const createUser = catchAsync(async (req, res) => {
  console.log(`file:`, req.file);
  const result = await userService.createUser(req.body, req.file);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Check your email for signup verification",
    data: result,
  });
});

const resendOtp = catchAsync(async (req, res) => {
  const result = await userService.resendOtp(req.body.email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "OTP resent successfully",
    data: result,
  });
});

const signupVerification = catchAsync(async (req, res) => {
  const result = await userService.signupVerification(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "OTP verification successful. Please wait for admin approval",
    data: result,
  });
});

const getUserDetails = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await userService.getUserDetails(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User detais retrieved successfully",
    data: result,
  });
});

const getAllUsers = catchAsync(async (_req, res) => {
  const result = await userService.getAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All users retrieved successfully",
    data: result,
  });
});

export const userControllers = {
  createUser,
  resendOtp,
  signupVerification,
  getUserDetails,
  getAllUsers,
};
```

## 📝 user.validation.ts

```ts
import { UserRole } from "@prisma/client";
import { z } from "zod";

const userRegisterValidationSchema = z
  .object({
    fullName: z.string().min(1, "Full name must be at least 1 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    profession: z.string().trim().min(2).max(30),
    role: z.nativeEnum(UserRole),
  })
  .strict();

export type TUserRegister = z.infer<typeof userRegisterValidationSchema>;

const verificationSchema = z.object({
  email: z.string().min(10, "Phone Number min 10 Digit"),
  otp: z.string().min(4, "OTP must be at least 4 characters long"),
  fcmToken: z.string().optional(),
});

const userUpdateValidationSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters long")
    .optional(),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .optional(),
  mobile: z.string().min(10, "Mobile Number at least 10 Digit long").optional(),
  role: z.enum(["ADMIN", "USER"]).optional(),
  status: z.enum(["ACTIVE", "BLOCKED", "DELETED"]).optional(),
});

export const userValidation = {
  userRegisterValidationSchema,
  verificationSchema,
  userUpdateValidationSchema,
};
```

## 🛠️ user.services.ts

```ts
import ApiError from "../../../errors/ApiErrors";
import bcrypt from "bcryptjs";
import prisma from "../../../shared/prisma";
import generateOTP from "../../../helpers/generateOtp";
import config from "../../../config";
import sendEmail from "../../../helpers/sendEmail";
import { TUserRegister } from "./user.validation";
import httpStatus from "http-status";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { Secret } from "jsonwebtoken";
import { UserStatus } from "@prisma/client";

const createUser = async (
  payload: TUserRegister,
  file?: Express.Multer.File,
) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (existingUser) {
    throw new ApiError(409, "User already exists using this email.");
  }

  let profileImage: string | undefined;
  if (file) {
    profileImage = await uploadInSpace(file, "users/profileImage");
  }

  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(config.jwt.gen_salt),
  );

  const otp = generateOTP();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await prisma.$transaction(async (tx) => {
    await tx.pendingUser.upsert({
      where: { email: payload.email },
      update: {
        ...payload,
        password: hashedPassword,
        profileImage,
      },
      create: {
        ...payload,
        password: hashedPassword,
        profileImage,
      },
    });

    await tx.otp.upsert({
      where: { email: payload.email },
      update: { otp, expiresAt },
      create: { email: payload.email, otp, expiresAt },
    });
  });

  const emailSubject = "Signup Verification";
  const emailHtml = `<div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Account verification</h2>
          <p>Hi <b>${payload.fullName}</b>,</p>
          <p>Your OTP for account verification is:</p>
          <h1 style="color: #007BFF;">${otp}</h1>
          <p>This OTP is valid for <b>5 minutes</b>. If you did not request this, please ignore this email.</p>
          <p>Thanks, <br>The Support Team</p>
        </div>`;
  await sendEmail(payload.email, emailSubject, emailHtml);

  return otp;
};

const resendOtp = async (email: string) => {
  const otp = generateOTP();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  const pendingUser = await prisma.pendingUser.findUnique({
    where: { email },
  });

  if (!pendingUser) {
    throw new ApiError(404, "No pending user found with this email.");
  }

  await prisma.otp.upsert({
    where: { email },
    update: { otp, expiresAt },
    create: { email, otp, expiresAt },
  });

  const emailSubject = "OTP Resend";
  const emailHtml = `<div style="font-family: Arial, sans-serif; color: #333;">
          <h2>OTP Resend</h2>
          <p>Hi,</p>
          <p>Your OTP for account verification is:</p>
          <h1 style="color: #007BFF;">${otp}</h1>
          <p>This OTP is valid for <b>5 minutes</b>. If you did not request this, please ignore this email.</p>
          <p>Thanks, <br>The Support Team</p>
        </div>`;
  await sendEmail(email, emailSubject, emailHtml);

  return otp;
};

const signupVerification = async (payload: {
  email: string;
  otp: string;
  fcmToken?: string;
}) => {
  const { email, otp } = payload;

  const pendingUser = await prisma.pendingUser.findUnique({
    where: { email },
  });
  if (!pendingUser) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "No pending user found. Please sign up again.",
    );
  }

  const otpRecord = await prisma.otp.findUnique({ where: { email } });
  if (!otpRecord) {
    throw new ApiError(400, "OTP not found. Please sign up again.");
  }

  const now = new Date();
  if (now > otpRecord.expiresAt) {
    await prisma.otp.delete({ where: { email } });
    throw new ApiError(400, "OTP has expired. Please sign up again.");
  }

  if (otp !== otpRecord.otp) {
    throw new ApiError(401, "Invalid OTP.");
  }

  const user = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email: pendingUser.email,
        fullName: pendingUser.fullName,
        password: pendingUser.password,
        role: pendingUser.role,
        profession: pendingUser.profession,
        profileImage: pendingUser.profileImage,
        fcmToken: payload.fcmToken,
        status: UserStatus.PENDING,
      },
    });
    await tx.pendingUser.delete({ where: { email } });
    await tx.otp.delete({ where: { email } });
    return user;
  });

  return {
    id: user.id,
    role: user.role,
  };
};

const getUserDetails = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      fullName: true,
      profession: true,
      profileImage: true,
    },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  return user;
};

const getAllUsers = async () => {
  return prisma.user.findMany({
    omit: {
      password: true,
      fcmToken: true,
      status: true,
    },
  });
};

export const userService = {
  createUser,
  resendOtp,
  signupVerification,
  getUserDetails,
  getAllUsers,
};
```
