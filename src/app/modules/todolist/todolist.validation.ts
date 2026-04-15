import { strict } from "assert";
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

const updateTodoImage = z
  .object({
    action: z.enum(["add", "replace", "remove"]),
    imgUrls: z.array(z.string().url()).optional(),
  })
  .strict();

export type TUpdateTodoImage = z.infer<typeof updateTodoImage>;

export const todolistValidation = {
  createTodolistSchema,
  updateTodoSchema,
  updateTodoImage,
};
