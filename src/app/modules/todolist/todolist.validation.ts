import z from "zod";

const createTodolistSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    assignedId: z.string(),
  })
  .strict();

export type TCreateTodolist = z.infer<typeof createTodolistSchema>;

export const todolistValidation = {
  createTodolistSchema,
};
