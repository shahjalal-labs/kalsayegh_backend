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

export const invoiceValidation = {
  createInvoiceSchema,
  sendInvoiceEmailSchema,
  updateInvoiceEmailSignSchema,
  generateInvoiceSchema,
  recordManualPaymentSchema,
  refundPaymentSchema,
  payWithCardSchema,
  updateInvoiceSchema,
  invoiceImageActionSchema,
  updateInvoiceItemImagesSchema,
};
