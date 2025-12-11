import { z } from 'zod';

export const userInformationSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  phone_code: z.number().optional(),
  landline: z.string().optional(),
  landline_code: z.number().optional(),
});

export const userProfileSchema = z.object({
  cover: z.any(),
  portrait: z.any(),
});

export const userPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[0-9]/, 'Password must contain at least 1 number')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least 1 special character',
      )
      .regex(/[a-z]/, 'Password must contain at least 1 lowercase letter')
      .regex(/[A-Z]/, 'Password must contain at least 1 uppercase letter'),

    password_confirm: z.string(),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Passwords don't match",
    path: ['password_confirm'],
  });
export type userInformationSchemaFormValues = z.infer<
  typeof userInformationSchema
>;

export type userProfileSchemaSchemaFormValues = z.infer<
  typeof userProfileSchema
>;

export type userPasswordSchemaSchemaFormValues = z.infer<
  typeof userPasswordSchema
>;
