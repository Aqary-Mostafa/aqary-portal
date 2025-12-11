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

export type userInformationSchemaFormValues = z.infer<
  typeof userInformationSchema
>;

export type userProfileSchemaSchemaFormValues = z.infer<
  typeof userProfileSchema
>;
