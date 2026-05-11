import { Format } from "@prisma/client";
import { z } from "zod";

export const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");

export const EstimateStatusEnum = z.enum(["Pending", "Approved", "Declined"]);

export const TItemTypeSchema = z.object({
  id: objectIdSchema,
  quantity: z.number().int().positive("Quantity must be greater than 0"),
  subTotal: z.number().int().nonnegative("Subtotal must be >= 0"),
});

// 🔸 Main Estimate Schema
const createEstimateSchema = z
  .object({
    clientId: objectIdSchema,
    estimateName: z.string().min(1, "Estimate name is required"),
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
    contractId: objectIdSchema,
  })
  .strict();

export type TCreateEstimate = z.infer<typeof createEstimateSchema>;

const markUpValidationSchema = z.object({
  name: z.string().min(1, "Mark up name is required"),
  percentage: z.number().int().min(0).max(99).optional(),
  amount: z.number().int().min(0).optional(),
});

const taxValidationSchema = z.object({
  name: z.string().min(1, "Tax name is required"),
  percentage: z.number().int().min(0).max(99),
});

const itemValidationSchema = z.object({
  itemName: z.string(),
  markUpId: z.string().optional(),
  rate: z
    .number({
      required_error: "Rate is required",
      invalid_type_error: "Rate must be a number",
    })
    .int("Rate must be an integer")
    .nonnegative("Rate cannot be negative"),
  description: z.string().optional(),
  notes: z.string().optional(),
  taxes: z.array(z.string()).optional(),
});

const itemUpdateValidationSchema = z.object({
  itemId: z.string(),
  itemName: z.string().optional(),
  markUpId: z.string().optional(),
  rate: z
    .number({
      required_error: "Rate is required",
      invalid_type_error: "Rate must be a number",
    })
    .int("Rate must be an integer")
    .nonnegative("Rate cannot be negative"),
  description: z.string().optional(),
  notes: z.string().optional(),
  taxes: z.array(z.string()).optional(),
});

const updateEstimateStatusSchema = z
  .object({
    status: EstimateStatusEnum, // "Pending", "Approved", "Declined"
  })
  .strict();

const updateEmailSignSchema = z
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

export type TUpdateEstimateEmailSignSchema = z.infer<
  typeof updateEmailSignSchema
>;

const sendEstimateEmailSchema = z.object({
  to: z
    .array(z.string().email("Invalid recipient email"))
    .min(1, "At least one recipient is required"),
  cc: z.array(z.string().email("Invalid CC email")).optional(),
  bcc: z.array(z.string().email("Invalid BCC email")).optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
  sendMeCopy: z.boolean().optional().default(false),
  isOnlinePayment: z.boolean().optional(),
});

export const estimateValidation = {
  createEstimateSchema,
  markUpValidationSchema,
  itemValidationSchema,
  taxValidationSchema,
  itemUpdateValidationSchema,
  updateEstimateStatusSchema,
  updateEmailSignSchema,
  sendEstimateEmailSchema,
};
