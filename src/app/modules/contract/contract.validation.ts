import z from "zod";

const createContractSchema = z
  .object({
    title: z.string().trim().min(2),
    description: z.string().trim().min(2),
  })
  .strict();

export type TCreateContract = z.infer<typeof createContractSchema>;

const updateContractSchema = createContractSchema.partial();

export type TUpdateContract = z.infer<typeof createContractSchema>;

export const contractValidation = {
  createContractSchema,
  updateContractSchema,
};
