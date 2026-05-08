import z from "zod";
import { objectId, TItemTypeSchema } from "../estimate/estimate.validation";
import { Format } from "@prisma/client";

const createInvoiceSchema = z
  .object({
    clientId: objectId,
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
    format: z.nativeEnum(Format).default("DESCRIPTION"),
    contract: z.string().optional(),
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
