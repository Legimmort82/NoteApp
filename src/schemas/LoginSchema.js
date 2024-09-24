import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;
export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Enter a valid email please" })
    .min(1, { message: "Please enter an email" }),
  password: z
    .string()
    .min(1, { message: "Please enter a password" })
    .min(5, { message: "Password must be bigger than 5 characters" })
    .regex(passwordRegex, {
      message:
        "Password must be more than 8 characters and include uppercase letters and numbers",
    }),
});
