import * as z from "zod";

export const formSchema = z.object({
  email: z.string(),
  name: z.string(),
  password: z.string(),
});

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginFormValues = z.infer<typeof LoginSchema>;
