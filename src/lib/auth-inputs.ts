import { z } from "zod";

export const loginInputSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8).max(72),
});

const registerFieldsSchema = z.object({
  email: z.string().trim().email(),
  name: z.string().trim().min(2).max(30),
  password: z.string().min(8).max(72),
  confirmPassword: z.string().min(8).max(72),
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
