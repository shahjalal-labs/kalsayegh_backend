import z from "zod";

const createTodolistSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    assignedId: z.string(),
  })
  .strict();

const updateTodoSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    isComplete: z.boolean(),
  })
  .partial()
  .strict();

export type TupdateTodo = z.infer<typeof updateTodoSchema>;

export type TCreateTodolist = z.infer<typeof createTodolistSchema>;

export const todolistValidation = {
  createTodolistSchema,
  updateTodoSchema,
};
