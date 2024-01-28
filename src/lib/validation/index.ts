import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Terlalu pendek" }),
  username: z.string().min(2, { message: "Terlalu pendek" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password harus 8 karakter atau lebih" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password harus 8 karakter atau lebih" }),
});

export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
