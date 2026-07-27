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

const createOfficeAdminSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    fullName: z.string(),
    profession: z.string().optional(),
  })
  .strict();

export type TCreateOfficeAdmin = z.infer<typeof createOfficeAdminSchema>;

export const adminValidation = {
  updateUserDetailsSchema,
  createOfficeAdminSchema,
};
