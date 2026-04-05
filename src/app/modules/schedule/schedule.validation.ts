import * as z from 'zod';

export const createScheduleSchema = z.object({
  // Define fields
  name: z.string(),
});

export const ScheduleSchemaValidation = {
createScheduleSchema
};
  