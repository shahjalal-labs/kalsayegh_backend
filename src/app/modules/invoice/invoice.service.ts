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

  if (filter?.status) {
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
  if (data.paymentMethod === "CHECK" && !data.checkNumber) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Check number is required for check payment",
    );
  }

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
        amount: amount, // optional, defaults to full refund
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
};
