import { Request } from "express";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { TCreateInvoice, TUpdateInvoice } from "./invoice.validation";
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
    },
  });

  return newInvoice;
};

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

export const invoiceService = {
  createInvoice,
  updateInvoice,
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
  createPaymentIntent,
  deleteInvoice,
};
