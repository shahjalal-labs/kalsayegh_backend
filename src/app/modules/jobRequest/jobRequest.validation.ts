import { JobRequestStatus } from "@prisma/client";
import z from "zod";

const createOfficeSchema = z
  .object({
    name: z.string(),
    address: z.string(),
  })
  .strict();

export type TCreateOffice = z.infer<typeof createOfficeSchema>;

const createJobRequestSchema = z
  .object({
    title: z.string().trim().min(2).max(150),
    officeId: z.string(),
    date: z.string().datetime({ offset: true }), // iso utc format
    note: z.string().optional(),
    officeLatitude: z.number().min(-90).max(90),
    officeLongitude: z.number().min(-180).max(180),
    address: z.string(),
    contact: z.string(),
    email: z.string().email(),
  })
  .strict();

export type TCreateJobRequest = z.infer<typeof createJobRequestSchema>;

const updateJobRequestSchema = createJobRequestSchema
  .omit({
    officeId: true,
  })
  .extend({
    status: z.nativeEnum(JobRequestStatus),
  })
  .partial();

export type TUpdateJobRequest = z.infer<typeof updateJobRequestSchema>;

export const jobRequestValidatin = {
  createOfficeSchema,
  createJobRequestSchema,
  updateJobRequestSchema,
};
