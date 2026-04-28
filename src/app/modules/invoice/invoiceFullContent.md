# invoiceFullContent.md

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
│   │   │   ├── invoice
│   │   │   │   ├── invoice.api.http
│   │   │   │   ├── invoice.controller.ts
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
├── tsconfig.json
├── uploads
│   └── google.png
└── vercel.json

32 directories, 127 files
```

## 📁 invoice Module Tree

```bash
/home/sj/web/smt_project/kal_sayegh_backend/src/app/modules/invoice
├── invoice.api.http
├── invoice.controller.ts
├── invoice.routes.ts
├── invoice.service.ts
└── invoice.validation.ts

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

  @@map("items")
}

model Estimate {
  id               String         @id @default(auto()) @map("_id") @db.ObjectId
  clientId         String         @db.ObjectId
  estimatorId      String         @db.ObjectId
  estimateName     String
  legendary        String?
  date             String
  endDate          String
  sideMap          String?
  fileUrls         String[]
  items            TItemType[]
  additionalMarkUp Float?
  grandTotal       Float
  discountAmount   Float?
  depositAmount    Float?
  status           EstimateStatus @default(Pending)
  createdAt        DateTime       @default(now())
  updatedAt        DateTime       @updatedAt
  client           Client         @relation(fields: [clientId], references: [id], onDelete: Cascade)
  estimator        User           @relation(fields: [estimatorId], references: [id], onDelete: Cascade)
  emailStatus      EmailStatus    @default(NOT_SENT)
  stage            EstimateStage  @default(DRAFT)
  isInvoiced       Boolean        @default(false)
  isOnlinePayment  Boolean        @default(false)
  isSigned         Boolean        @default(false)
  signedAt         DateTime?
  signedName       String?
  invoices         Invoice[]

  @@map("estimates")
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
  id               String        @id @default(auto()) @map("_id") @db.ObjectId
  clientId         String        @db.ObjectId
  estimatorId      String        @db.ObjectId
  invoiceName      String
  legendary        String?
  date             String
  endDate          String
  sideMap          String?
  fileUrls         String[]
  items            TItemType[]
  additionalMarkUp Float?
  grandTotal       Int
  discountAmount   Float?
  depositAmount    Float?
  status           InvoiceStatus @default(ACTIVE)
  stage            InvoiceStage  @default(DRAFT)
  emailStatus      EmailStatus   @default(NOT_SENT)
  isSigned         Boolean       @default(false)
  signedAt         DateTime?
  signedName       String?
  createdAt        DateTime      @default(now())
  updatedAt        DateTime      @updatedAt
  client           Client        @relation(fields: [clientId], references: [id], onDelete: Cascade)
  estimator        User          @relation(fields: [estimatorId], references: [id], onDelete: Cascade)
  estimate         Estimate?     @relation(fields: [estimateId], references: [id])
  estimateId       String?       @db.ObjectId
  payments         Payment[]

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
  amount                Int // in dollars not cents
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
  amount         Int // amount in dollars not cents
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

enum PaymentStatus {
  COMPLETED
  REFUNDED
  PARTIALLY_REFUNDED
}
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

const router = Router();

router.post(
  "/create",
  fileUploader.uploadMultiple,
  parseBodyData,
  validateRequest(invoiceValidation.createInvoiceSchema),
  auth(UserRole.ESTIMATOR, UserRole.ADMIN),
  invoiceController.createInvoice,
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

export const invoiceRoutes = router;
```

## 🛠️ invoice.service.ts

```ts
import { Request } from "express";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { TCreateInvoice } from "./invoice.validation";
import {
  EmailStatus,
  InvoiceStatus,
  PaymentStatus,
  Prisma,
} from "@prisma/client";
import { paginationHelper, TOptions } from "../../../shared/pagination";
import { invoiceEmailWithPayment } from "../../../shared/emailTemplate";
import sendEmailAdvanced from "../../../helpers/sendEmailAdvanced";
import { stripe } from "../../../helpers/stripe";

const createInvoice = async (req: Request) => {
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

  const newInvoice = await prisma.invoice.create({
    data: {
      clientId: payload.clientId,
      estimatorId: estimatorId,
      legendary: payload.legendary,
      date: payload.date,
      endDate: payload.endDate,
      invoiceName: payload.invoiceName,
      items: payload.items,
      grandTotal: payload.grandTotal,
      additionalMarkUp: payload.additionalMarkUp,
      sideMap: map ? map[0] : undefined,
      fileUrls: urls ? urls : undefined,
      depositAmount: payload.depositAmount,
      discountAmount: payload.discountAmount,
    },
  });

  return newInvoice;
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
    },
    omit: {
      createdAt: true,
    },
  });

  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  const invoiceItems = Array.isArray(invoice.items) ? invoice.items : [];

  const itemIds = invoiceItems
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
          },
        })
      : [];

  return {
    ...invoice,
    items,
  };
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
      client: { select: { clientName: true } },
    },
  });

  if (!invoice) {
    throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
  }

  // Prepare recipients
  let to = [...payload.to];
  const cc: string[] = [];

  if (payload.sendMeCopy) {
    cc.push("shahjalal.backend@gmail.com");
  }

  // Default subject
  const defaultSubject = `Your Invoice #${invoice.invoiceName || invoiceId.slice(-6)} from Geo Paving and Sealcoating`;
  const subject = payload.subject || defaultSubject;

  // Generate payment link
  const frontendUrl = process.env.FRONTEND_URL || "https://yourfrontend.com";
  const paymentLink = `${frontendUrl}/invoice/${invoiceId}/pay`;

  // Generate HTML
  const html = invoiceEmailWithPayment({
    clientName: invoice.client.clientName,
    invoiceName: invoice.invoiceName || invoiceId.slice(-6),
    grandTotal: invoice.grandTotal,
    date: invoice.date,
    dueDate: invoice.endDate, // using endDate as due date
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

  // Update email status if your Invoice model has emailStatus (add if needed)
  await prisma.invoice.update({
    where: { id: invoiceId },
    data: { emailStatus: EmailStatus.SENT, stage: "ISSUED" },
  });

  return { success: true, to, cc };
};

// Add to invoice.service.ts

const updateInvoiceEmailAndSign = async (
  invoiceId: string,
  emailStatus?: "READ",
  signedName?: string,
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
  const amountDue = invoice.grandTotal - totalPaidNet;
  if (amountDue <= 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Invoice already fully paid");
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

  const amountDue = invoice.grandTotal - totalPaidNet;

  return {
    ...invoice,
    payments: {
      totalPaid: totalPaidNet,
      amountDue: Math.max(0, amountDue),
    },
  };
};

export const invoiceService = {
  createInvoice,
  getAllInvoices,
  getInvoiceDetails,
  sendInvoiceEmail,
  updateInvoiceEmailAndSign,
  generateInvoiceFromEstimate,
  recordManualPayment,
  getInvoicePayments,
  refundPayment,
  getPaymentDetails,
  payInvoiceWithCard,
  getPublicInvoiceDetails,
};
```

## 🎮 invoice.controller.ts

```ts
import Stripe from "stripe";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { invoiceService, updateInvoiceStatus } from "./invoice.service";
import pick from "../../../shared/pick";
import { paginationOptions } from "../../../shared/pagination";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";
import { stripe } from "../../../helpers/stripe";

const createInvoice = catchAsync(async (req, res) => {
  const result = await invoiceService.createInvoice(req);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Invoice has been created successfully",
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
  const { emailStatus, signedName } = req.body;

  const result = await invoiceService.updateInvoiceEmailAndSign(
    invoiceId,
    emailStatus,
    signedName,
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

export const invoiceController = {
  createInvoice,
  getAllInvoices,
  getInvoiceDetails,
  sendInvoiceEmail,
  updateInvoiceEmailAndSign,
  generateInvoiceFromEstimate,
  recordManualPayment,
  getInvoicePayments,
  refundPayment,
  getPaymentDetails,
  payInvoiceWithCard,
  getPublicInvoiceDetails,
};
```

## 📝 invoice.validation.ts

```ts
import z from "zod";
import { objectId, TItemTypeSchema } from "../estimate/estimate.validation";

const createInvoiceSchema = z
  .object({
    clientId: objectId,
    invoiceName: z.string().min(1, "Estimate name is required"),
    legendary: z.string(),
    date: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    items: z.array(TItemTypeSchema).min(1, "At least one item is required"),
    additionalMarkUp: z.number().optional(),
    grandTotal: z.number().nonnegative("Grand total must be >= 0"),
    discountAmount: z.number().optional(),
    depositAmount: z.number().optional(),
  })
  .strict();

export type TCreateInvoice = z.infer<typeof createInvoiceSchema>;

const sendInvoiceEmailSchema = z.object({
  to: z
    .array(z.string().email("Invalid recipient email"))
    .min(1, "At least one recipient is required"),
  subject: z.string().optional(),
  message: z.string().optional(),
  sendMeCopy: z.boolean().optional().default(false),
});

const updateInvoiceEmailSignSchema = z.object({
  emailStatus: z.enum(["READ"]).optional(),
  signedName: z
    .string()
    .min(1, "Signed name is required if provided")
    .optional(),
});

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

export const invoiceValidation = {
  createInvoiceSchema,
  sendInvoiceEmailSchema,
  updateInvoiceEmailSignSchema,
  generateInvoiceSchema,
  recordManualPaymentSchema,
  refundPaymentSchema,
  payWithCardSchema,
};
```
