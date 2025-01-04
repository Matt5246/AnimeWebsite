import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please enter a valid email.' })
    .min(4, { message: 'Email must be at least 4 characters long.' })
    .max(40, { message: 'Email must be at most 40 characters long.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long.' })
    .max(65, { message: 'Password must be at most 65 characters long.' }),
});

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(4, { message: 'Name must be at least 4 characters long.' })
      .max(40, { message: 'Email must be at most 40 characters long.' }),
    email: z
      .string()
      .email({ message: 'Please enter a valid email.' })
      .trim(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .max(65, { message: 'Password must be at most 65 characters long.' })
      .regex(/[a-zA-Z]/, {
        message: 'Password must contain at least one letter.',
      })
      .regex(/[0-9]/, {
        message: 'Password must contain at least one number.',
      })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Password must contain at least one special character.',
      })
      .trim(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match.',
    path: ['confirmPassword'],
  });

export type signInType = z.infer<typeof signInSchema>;
export type signUpType = z.infer<typeof signUpSchema>;
