import { z } from 'zod';

export const ContantsValidate = z
  .object({
    id: z.number(),
    label: z.string(),
  })
  .or(z.null())
  .or(z.undefined());

export const ContantsV0Validate = z
  .object({
    id: z.number(),
    title: z.string(),
  })
  .or(z.null())
  .or(z.undefined());
