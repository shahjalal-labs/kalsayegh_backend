import * as z from "zod";

export const createGroupSchema = z.object({
  // Define fields
  name: z.string(),
});

export const removeMemberSchema = z
  .object({
    groupId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid group ID"),
    memberId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid member ID"),
  })
  .strict();

export const GroupSchemaValidation = {
  createGroupSchema,
  removeMemberSchema,
};

