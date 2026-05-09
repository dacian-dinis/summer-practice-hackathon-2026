import { z } from "zod";

export const loginInputSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(72, "Password must be 72 characters or fewer."),
});

const registerFieldsSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(30, "Name must be 30 characters or fewer."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(72, "Password must be 72 characters or fewer."),
  confirmPassword: z
    .string()
    .min(8, "Please confirm your password.")
    .max(72),
});

export const registerInputSchema = z
  .object(registerFieldsSchema.shape)
  .refine((value) => value.password === value.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const registerRouteInputSchema = registerFieldsSchema.omit({
  confirmPassword: true,
});
