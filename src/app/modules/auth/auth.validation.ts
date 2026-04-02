import { z } from "zod";

const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
    fcmToken: z.string().optional(),
  })
  .strict();

export type TLogin = z.infer<typeof loginSchema>;

const changePasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string().min(6, "Password must be at least 6 characters long"),
});

const googleLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First Name is required"),
  fcmToken: z.string().min(1, "FCM token is required"),
});

const locationUpdateSchema = z.object({
  latitude: z
    .number()
    .min(-90, "Latitude must be greater than or equal to -90")
    .max(90, "Latitude must be less than or equal to 90"),
  longitude: z
    .number()
    .min(-180, "Longitude must be greater than or equal to -180")
    .max(180, "Longitude must be less than or equal to 180"),
});

const updateProfileSchema = z
  .object({
    fullName: z.string(),
    profession: z.string(),
  })
  .partial()
  .strict();

export const authValidation = {
  updateProfileSchema,
  googleLoginSchema,
  locationUpdateSchema,
  loginSchema,
  changePasswordSchema,
};
