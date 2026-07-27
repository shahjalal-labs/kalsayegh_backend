# adminFullContent.md

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
│   │   │   │   └── admin.validation.ts
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

## 📁 admin Module Tree

```bash
/home/sj/web/smt_project/kalsayegh_backend/src/app/modules/admin
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

## 🎮 admin.controller.ts

```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";
import { paginationOptions } from "../../../shared/pagination";

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

const updateUserDetails = catchAsync(async (req, res) => {
  const { id: userId } = req.params;
  const result = await adminService.updateUserDetails(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee details updated successfully",
    data: result,
  });
});

const deleteUserAccount = catchAsync(async (req, res) => {
  const { id: userId } = req.params;
  const result = await adminService.deleteUserAccount(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee account deleted successfully",
    data: result,
  });
});

const getAllEstimator = catchAsync(async (req, res) => {
  const paginations = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm"]);
  const result = await adminService.getAllEstimator(paginations, filter);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All estimators retrieved successfully",
    data: result,
  });
});

const getAllOfficeAdmin = catchAsync(async (req, res) => {
  const paginations = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm"]);
  const result = await adminService.getAllOfficeAdmin(paginations, filter);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All office admin retrieved successfully",
    data: result,
  });
});

const getAllPendingUsers = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const paginations = pick(req.query, paginationOptions);
  const filter = pick(req.query, ["searchTerm"]);

  const result = await adminService.getAllPendingUsers(
    userId,
    paginations,
    filter,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All pending users retrieved successfully",
    data: result,
  });
});

export const adminController = {
  getEmployeeList,
  getAdminOverview,
  getHoursTrend,
  getEmployeeDetails,
  updateUserDetails,
  deleteUserAccount,
  getAllEstimator,
  getAllOfficeAdmin,
  getAllPendingUsers,
};
```

## 🛠️ admin.service.ts

```ts
import prisma from "../../../shared/prisma";

import { Prisma, SessionType, UserRole, UserStatus } from "@prisma/client";
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
  isSameDay,
} from "date-fns";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";
import { TUpdateUserDetailsSchema } from "./admin.validation";
import { paginationHelper, TOptions } from "../../../shared/pagination";
import { logger } from "../../../shared/logger";

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
  // 1. Get user info
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      fullName: true,
      email: true,
      profession: true,
      profileImage: true,
      createdAt: true,
    },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  // 2. Define current week (Monday to Sunday)
  const now = new Date();
  const weekStart = startOfWeek(now, { weekStartsOn: 1 }); // Monday
  const weekEnd = endOfWeek(now, { weekStartsOn: 1 }); // Sunday

  // 3. Fetch all sessions for this user within the week
  const sessions = await prisma.session.findMany({
    where: {
      userId,
      createdAt: { gte: weekStart, lte: weekEnd },
      sessionType: { in: [SessionType.Regular_Hours, SessionType.PW_Hours] },
    },
    select: {
      sessionType: true,
      clockInAt: true,
      clockOutAt: true,
    },
  });

  // 4. Prepare daily data for each day of the week (Mon to Sun)
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });
  const dailyDetails = [];
  let weeklyRegular = 0;
  let weeklyPW = 0;
  let weeklyOvertime = 0;

  for (const day of weekDays) {
    const daySessions = sessions.filter((s) => isSameDay(s.clockInAt, day));
    let dayRegular = 0;
    let dayPW = 0;
    const sessionsList = [];

    for (const session of daySessions) {
      const hours = calculateHours(session.clockInAt, session.clockOutAt);
      if (session.sessionType === SessionType.Regular_Hours) {
        dayRegular += hours;
        weeklyRegular += hours;
      } else if (session.sessionType === SessionType.PW_Hours) {
        dayPW += hours;
        weeklyPW += hours;
      }

      sessionsList.push({
        startTime: format(session.clockInAt, "hh:mm a"),
        endTime: session.clockOutAt
          ? format(session.clockOutAt, "hh:mm a")
          : null,
        type:
          session.sessionType === SessionType.Regular_Hours ? "Regular" : "PW",
        hours: hours.toFixed(2),
      });
    }

    const dayTotal = dayRegular + dayPW;
    // Overtime for the day: excess over 8 hours from regular, plus excess over 8 from PW
    let dayOvertime = 0;
    if (dayRegular > 8) dayOvertime += dayRegular - 8;
    if (dayPW > 8) dayOvertime += dayPW - 8;
    weeklyOvertime += dayOvertime;

    dailyDetails.push({
      dayName: format(day, "EEEE"), // e.g., Monday
      date: format(day, "dd"), // day of month (e.g., 06)
      month: format(day, "MMM"), // month abbreviation (e.g., Apr)
      sessions: sessionsList,
      totalHours: dayTotal.toFixed(2),
      overtime: dayOvertime > 0 ? dayOvertime.toFixed(2) : null,
    });
  }

  // 5. Build response
  return {
    user: {
      fullName: user.fullName,
      email: user.email,
      profession: user.profession,
      // hiringDate: format(user.createdAt, "MMMM dd, yyyy"),
      profileImage: user.profileImage,
      createdAt: user.createdAt,
    },
    weeklyTotals: {
      regularHours: weeklyRegular.toFixed(2),
      pwHours: weeklyPW.toFixed(2),
      totalHours: (weeklyRegular + weeklyPW).toFixed(2),
      overtimeHours: weeklyOvertime.toFixed(2),
    },
    dailyDetails,
  };
};

const updateUserDetails = async (
  userId: string,
  payload: TUpdateUserDetailsSchema,
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
    },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found.");

  if (payload.email) {
    const isExist = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
      select: {
        id: true,
      },
    });

    if (isExist)
      throw new ApiError(httpStatus.BAD_REQUEST, "Email already exist");
  }

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: payload,
  });
};

const deleteUserAccount = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
    },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found.");

  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
};

const getAllEstimator = async (
  paginations: TOptions,
  filter?: {
    searchTerm?: string;
  },
) => {
  const { page, skip, limit } = paginationHelper(paginations);
  const whereClause: Prisma.UserWhereInput = {
    role: "ESTIMATOR",
  };

  const andClause: Prisma.UserWhereInput[] = [];
  const searchTerm = filter?.searchTerm?.trim();

  if (searchTerm) {
    andClause.push({
      OR: [
        {
          fullName: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          profession: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  if (andClause.length) {
    whereClause.AND = andClause;
  }

  const [estimators, total] = await Promise.all([
    prisma.user.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: {
        id: "desc", // same as created:"desc"
      },

      select: {
        id: true,
        fullName: true,
        email: true,
        status: true,
        role: true,
      },
    }),

    prisma.user.count({
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
    data: estimators,
  };
};

const getAllOfficeAdmin = async (
  paginations: TOptions,
  filter?: {
    searchTerm?: string;
  },
) => {
  const { page, skip, limit } = paginationHelper(paginations);

  const whereClause: Prisma.UserWhereInput = {
    role: "OFFICE_ADMINISTRATOR",
  };

  const andClause: Prisma.UserWhereInput[] = [];

  const searchTerm = filter?.searchTerm?.trim();

  if (searchTerm)
    andClause.push({
      OR: [
        {
          fullName: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          profession: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });

  if (andClause.length) whereClause.AND = andClause;

  const [officeAdmins, total] = await Promise.all([
    prisma.user.findMany({
      where: whereClause,
      select: {
        id: true,
        fullName: true,
        email: true,
        status: true,
        role: true,
      },
      skip,
      take: limit,
      orderBy: {
        id: "desc", //same as createdAt:"desc"
      },
    }),

    prisma.user.count({
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

    data: officeAdmins,
  };
};

const getAllPendingUsers = async (
  userId: string,
  paginations: TOptions,
  filter?: {
    searchTerm?: string;
  },
) => {
  const [user] = await Promise.all([
    prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        role: true,
      },
    }),
  ]);

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  if (
    user.role !== UserRole.ADMIN &&
    user.role !== UserRole.OFFICE_ADMINISTRATOR
  )
    throw new ApiError(httpStatus.UNAUTHORIZED, "You have not permission");

  const whereClause: Prisma.UserWhereInput = {};

  const andClause: Prisma.UserWhereInput[] = [];
  const searchTerm = filter?.searchTerm?.trim();

  if (searchTerm) {
    andClause.push({
      OR: [
        {
          fullName: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        {
          profession: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  if (andClause.length) {
    whereClause.AND = andClause;
  }

  const { page, skip, limit } = paginationHelper(paginations);

  const [users, totalUsers] = await Promise.all([
    prisma.user.findMany({
      where: whereClause,
      select: {
        id: true,
        fullName: true,
        email: true,
        status: true,
        role: true,
      },
      skip,
      take: limit,
      orderBy: {
        id: "desc", // same as created:"desc"
      },
    }),

    prisma.user.count({
      where: whereClause,
    }),
  ]);

  return {
    meta: {
      page,
      limit,
      total: totalUsers,
      totalPages: Math.ceil(totalUsers / limit),
    },

    data: users,
  };
};

export const adminService = {
  getEmployeeList,
  getAdminOverview,
  getHoursTrend,
  getEmployeeDetails,
  updateUserDetails,
  deleteUserAccount,
  getAllEstimator,
  getAllOfficeAdmin,
  getAllPendingUsers,
};
```

## 📝 admin.validation.ts

```ts
import { UserStatus } from "@prisma/client";
import z from "zod";

const updateUserDetailsSchema = z
  .object({
    fullName: z.string(),
    profession: z.string(),
    email: z.string().email(),
    status: z.nativeEnum(UserStatus),
    createdAt: z.string().datetime(),
  })
  .partial()
  .strict();

export type TUpdateUserDetailsSchema = z.infer<typeof updateUserDetailsSchema>;

export const adminValidation = {
  updateUserDetailsSchema,
};
```

## 🔧 admin.routes.ts

```ts
import { Router } from "express";
import { adminController } from "./admin.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { adminValidation } from "./admin.validation";

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

router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(adminValidation.updateUserDetailsSchema),
  adminController.updateUserDetails,
);

router.delete("/:id", auth(UserRole.ADMIN), adminController.deleteUserAccount);

router.get(
  "/estimator/all",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  adminController.getAllEstimator,
);

router.get(
  "/office-admin/all",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  adminController.getAllOfficeAdmin,
);

router.get(
  "/pending-users/all",
  auth(UserRole.ADMIN, UserRole.OFFICE_ADMINISTRATOR),
  adminController.getAllPendingUsers,
);

export const adminRoutes = router;
```
