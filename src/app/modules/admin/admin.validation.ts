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

export const adminValidation = {
  updateUserDetailsSchema,
};
