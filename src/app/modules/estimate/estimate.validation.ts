import { cli } from "winston/lib/winston/config";
import { z } from "zod";

export const objectId = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid ObjectId");
export const EstimateStatusEnum = z.enum(["Pending", "Approved", "Declined"]);

export const TItemTypeSchema = z.object({
  id: objectId,
  quantity: z.number().int().positive("Quantity must be greater than 0"),
  subTotal: z.number().int().nonnegative("Subtotal must be >= 0"),
});

// 🔸 Main Estimate Schema
const estimateValidationSchema = z.object({
  clientId: objectId,
  estimateName: z.string().min(1, "Estimate name is required"),
  date: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  items: z.array(TItemTypeSchema).min(1, "At least one item is required"),
  additionalMarkUp: z.number().optional(),
  grandTotal: z.number().int().nonnegative("Grand total must be >= 0"),
  discountAmount: z.number().optional(),
  depositAmount: z.number().optional(),
});

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

export const estimateValidation = {
  estimateValidationSchema,
  markUpValidationSchema,
  itemValidationSchema,
  taxValidationSchema,
};
