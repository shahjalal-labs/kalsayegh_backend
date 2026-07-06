import { strict } from "assert";
import z from "zod";

const createTodolistSchema = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    assignedId: z.string().optional(),
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

const updateImageSchema = z
  .object({
    action: z.enum(["add", "replace", "remove"]),
    imgUrls: z.array(z.string().url()).optional(),
  })
  .strict();

export type TUpdateImageSchema = z.infer<typeof updateImageSchema>;

export const todolistValidation = {
  createTodolistSchema,
  updateTodoSchema,
  updateImageSchema,
};
