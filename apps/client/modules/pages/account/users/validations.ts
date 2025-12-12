import { z } from 'zod';

export const accountUser = z.object({});

export type accountUserFormValues = z.infer<typeof accountUser>;
