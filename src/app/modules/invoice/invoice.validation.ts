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

export const invoiceValidation = {
  createInvoiceSchema,
};
