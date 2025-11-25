import { z } from "zod";

import { ContantsValidate } from "@/validator/global";

export const CreateLicenseSchema = z.object({
  license_name: z.string().min(1, { message: "License name is required." }),
  license_name_ar: z.string().optional(),
  country: ContantsValidate.optional(),
  state: ContantsValidate.optional(),
  company_industry: ContantsValidate.optional(),
  company_types: ContantsValidate.optional(),
  info_message: z.string().optional(),
  mandatory_license: z.boolean().optional(),
  general_license: z.boolean().optional(),
});

export type CreateLicenseSchemaFormValues = z.infer<typeof CreateLicenseSchema>;
