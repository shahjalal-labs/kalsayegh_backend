# authFullContent.md

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

33 directories, 145 files
```

## 📁 auth Module Tree

```bash
/home/sj/web/smt_project/kalsayegh_backend/src/app/modules/auth
├── auth.api.http
├── auth.controller.ts
├── auth.routes.ts
├── auth.service.ts
└── auth.validation.ts

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

## 📝 auth.validation.ts

```ts
import { z } from "zod";

const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
    fcmToken: z.string().optional(),
  })
  .strict();

export type TLogin = z.infer<typeof loginSchema>;

const changePasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string().min(6, "Password must be at least 6 characters long"),
});

const googleLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First Name is required"),
  fcmToken: z.string().min(1, "FCM token is required"),
});

const locationUpdateSchema = z.object({
  latitude: z
    .number()
    .min(-90, "Latitude must be greater than or equal to -90")
    .max(90, "Latitude must be less than or equal to 90"),
  longitude: z
    .number()
    .min(-180, "Longitude must be greater than or equal to -180")
    .max(180, "Longitude must be less than or equal to 180"),
});

const updateProfileSchema = z
  .object({
    fullName: z.string(),
    profession: z.string(),
  })
  .partial()
  .strict();

export const authValidation = {
  updateProfileSchema,
  googleLoginSchema,
  locationUpdateSchema,
  loginSchema,
  changePasswordSchema,
};
```

## 🔧 auth.routes.ts

```ts
import express from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { authValidation } from "./auth.validation";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";

const router = express.Router();

router.post(
  "/login",
  validateRequest(authValidation.loginSchema),
  authController.loginUser,
);

router.post(
  "/google-login",
  validateRequest(authValidation.googleLoginSchema),
  authController.googleLogin,
);

router.get("/profile", auth(), authController.myProfile);

router.post("/send-forgot-otp", authController.sendForgotPasswordOtp);

router.post("/verify-forgot-otp", authController.verifyForgotPasswordOtpCode);

router.patch("/reset-password", auth(), authController.resetPassword);

router.patch(
  "/profile",
  auth(),
  fileUploader.profileImage,
  parseBodyData,
  validateRequest(authValidation.updateProfileSchema),
  authController.updateProfile,
);

router.patch(
  "/change-password",
  auth(),
  validateRequest(authValidation.changePasswordSchema),
  authController.changePassword,
);

router.delete("/delete-account", auth(), authController.deleteAccount);

export const authRoute = router;
```

## 🎮 auth.controller.ts

```ts
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { authService } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const loginUser = catchAsync(async (req, res) => {
  const result = await authService.loginUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User successfully logged in",
    data: result,
  });
});

const googleLogin = catchAsync(async (req, res) => {
  const result = await authService.googleLogin(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Google login has been successfull",
    data: result,
  });
});

const sendForgotPasswordOtp = catchAsync(
  async (req: Request, res: Response) => {
    const email = req.body.email as string;
    const response = await authService.sendForgotPasswordOtpDB(email);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "OTP send successfully",
      data: response,
    });
  },
);

const verifyForgotPasswordOtpCode = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const response = await authService.verifyForgotPasswordOtpCodeDB(payload);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "OTP verified successfully.",
      data: response,
    });
  },
);

const resetPassword = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const { newPassword } = req.body;
  const result = await authService.resetForgotPasswordDB(newPassword, userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Password updated successfully.",
    data: result,
  });
});

const myProfile = catchAsync(async (req, res) => {
  const { id } = req.user;
  const user = await authService.myProfile(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Your profile has been retrieved successfully",
    data: user,
  });
});

const updateProfile = catchAsync(async (req, res) => {
  const { id } = req.user;
  const file = req.file as Express.Multer.File;
  await authService.updateProfileIntoDB(id, req.body, file);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Your profile has been updated successfully",
  });
});

const changePassword = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  await authService.changePassword(
    userId,
    req.body.oldPassword,
    req.body.newPassword,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your password has been updated successfully",
  });
});

const deleteAccount = catchAsync(async (req, res) => {
  const { id } = req.user;
  await authService.deleteAccount(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Your account has been deleted successfully",
  });
});

export const authController = {
  loginUser,
  googleLogin,
  myProfile,
  updateProfile,
  sendForgotPasswordOtp,
  verifyForgotPasswordOtpCode,
  resetPassword,
  changePassword,
  deleteAccount,
};
```

## 🛠️ auth.service.ts

```ts
import prisma from "../../../shared/prisma";
import bcrypt from "bcryptjs";
import ApiError from "../../../errors/ApiErrors";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config";
import { User } from "@prisma/client";
import generateOTP from "../../../helpers/generateOtp";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import sendEmail from "../../../helpers/sendEmail";
import httpStatus from "http-status";
import { TLogin } from "./auth.validation";
import { Secret } from "jsonwebtoken";

const loginUserIntoDB = async (payload: TLogin) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  if (user.status === "PENDING") {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Your account is under review. You can log in after admin approval.",
    );
  }

  /* if (user.status === "INACTIVE") {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Your account is inactive. Please contact support.",
    );
  } */

  const isPasswordValid = await bcrypt.compare(payload.password, user.password);

  if (!isPasswordValid) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid credentials");
  }

  if (payload.fcmToken && payload.fcmToken !== user.fcmToken) {
    await prisma.user.update({
      where: {
        email: payload.email,
      },
      data: {
        fcmToken: payload.fcmToken,
      },
    });
  }

  const accessToken = jwtHelpers.generateToken(
    { id: user.id, role: user.role },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string,
  );

  return {
    accessToken,
    id: user.id,
    role: user.role,
  };
};

const googleLogin = async (payload: {
  email: string;
  fullName: string;
  fcmToken: string;
}) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (user) {
    const accessToken = jwtHelpers.generateToken(
      { id: user.id, role: user.role },
      config.jwt.jwt_secret as Secret,
      config.jwt.expires_in as string,
    );
    return {
      id: user.id,
      accessToken,
      role: user.role,
    };
  }

  const newUser = await prisma.user.create({
    data: {
      email: payload.email,
      fullName: payload.fullName,
      password: "",
      role: "WORKER",
      fcmToken: payload.fcmToken,
    },
  });

  const accessToken = jwtHelpers.generateToken(
    { id: newUser.id, role: newUser.role },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string,
  );

  return {
    id: newUser.id,
    accessToken,
    role: newUser.role,
  };
};

const sendForgotPasswordOtpDB = async (email: string) => {
  const existringUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!existringUser) {
    throw new ApiError(404, "User not found");
  }
  const otp = generateOTP();

  await prisma.otp.upsert({
    where: { email },
    update: { otp, expiresAt: new Date(Date.now() + 5 * 60 * 1000) },
    create: { email, otp, expiresAt: new Date(Date.now() + 5 * 60 * 1000) },
  });

  const emailSubject = "Your Password Reset OTP";
  const emailHtml = `<div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Password Reset Request</h2>
        <p>Hi <b>${existringUser.fullName}</b>,</p>
        <p>Your OTP for password reset is:</p>
        <h1 style="color: #007BFF;">${otp}</h1>
        <p>This OTP is valid for <b>5 minutes</b>. If you did not request this, please ignore this email.</p>
        <p>Thanks, <br>The Support Team</p>
      </div>`;

  await sendEmail(email, emailSubject, emailHtml);

  return otp;
};

const verifyForgotPasswordOtpCodeDB = async (payload: {
  email: string;
  otp: string;
}) => {
  const { email, otp } = payload;

  const user = await prisma.user.findUnique({ where: { email: email } });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const userId = user.id;

  const savedOtpRecord = await prisma.otp.findUnique({ where: { email } });
  if (!savedOtpRecord) {
    throw new ApiError(400, "OTP not found. Please request a new one.");
  }
  if (new Date() > savedOtpRecord.expiresAt) {
    await prisma.otp.delete({ where: { email } });
    throw new ApiError(400, "OTP has expired. Please request a new one.");
  }

  if (otp !== savedOtpRecord.otp) {
    throw new ApiError(401, "Invalid OTP.");
  }

  const forgetToken = jwtHelpers.generateToken(
    { id: userId, email },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string,
  );

  await prisma.otp.delete({
    where: {
      email,
    },
  });

  return { forgetToken };
};

const resetForgotPasswordDB = async (newPassword: string, userId: string) => {
  const existingUser = await prisma.user.findUnique({ where: { id: userId } });
  if (!existingUser) {
    throw new ApiError(404, "user not found");
  }
  const email = existingUser.email as string;
  const hashedPassword = await bcrypt.hash(
    newPassword,
    Number(config.jwt.gen_salt),
  );

  await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      password: hashedPassword,
    },
  });
  return;
};

const myProfile = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      fullName: true,
      profileImage: true,
      profession: true,
      email: true,
      role: true,
      status: true,
    },
  });
  if (!user) {
    throw new ApiError(404, "User not found!");
  }

  return user;
};

const updateProfileIntoDB = async (
  userId: string,
  userData: User,
  file: Express.Multer.File,
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new ApiError(404, "User not found for edit");

  let profileImage;
  if (file) {
    profileImage = await uploadInSpace(file, "users/profileImage");
  }
  await prisma.user.update({
    where: { id: userId },
    data: {
      ...userData,
      profileImage: file ? profileImage : user.profileImage,
    },
  });

  return;
};

const changePassword = async (
  userId: string,
  oldPassword: string,
  newPassword: string,
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new ApiError(404, "User not found");

  if (oldPassword === newPassword) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "New password must be different from your current password.",
    );
  }

  const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

  if (!isPasswordValid)
    throw new ApiError(httpStatus.UNAUTHORIZED, "Wrong old password");

  const hashedPassword = await bcrypt.hash(
    newPassword,
    Number(config.jwt.gen_salt),
  );

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  });
  return;
};

const deleteAccount = async (userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new ApiError(404, "User not found");

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
  return;
};

export const authService = {
  loginUserIntoDB,
  googleLogin,
  myProfile,
  updateProfileIntoDB,
  sendForgotPasswordOtpDB,
  verifyForgotPasswordOtpCodeDB,
  resetForgotPasswordDB,
  changePassword,
  deleteAccount,
};
```
