import * as z from 'zod';

export const createSessionSchema = z.object({
  // Define fields
  name: z.string(),
});

export const SessionSchemaValidation = {
createSessionSchema
};
  