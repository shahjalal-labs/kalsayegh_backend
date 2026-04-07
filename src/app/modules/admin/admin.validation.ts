import z from "zod";

const updateUserDetailsSchema = z
  .object({
    fullName: z.string(),
    profession: z.string(),
    email: z.string().email(),
    createdAt: z.string().datetime({
      offset: false,
    }),
  })
  .partial()
  .strict();

export type TUpdateUserDetailsSchema = z.infer<typeof updateUserDetailsSchema>;

export const adminValidation = {
  updateUserDetailsSchema,
};
