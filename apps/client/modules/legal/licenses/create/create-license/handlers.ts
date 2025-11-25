import { createLicense, updateLicense } from "@/modules/legal/api/legal";
import { CreateLicenseSchemaFormValues } from "@/modules/legal/validator/license";

export interface CreateLicenceProps {
  data?: CreateLicenseSchemaFormValues;
  dirty: CreateLicenseSchemaFormValues;
  cb?: (res: { Message?: string; error?: string } | null) => void;
  entityId?: string;
}

export const createLicenceHandler = ({
  data,
  dirty,
  cb,
  entityId,
}: CreateLicenceProps) => {
  const formData = new FormData();

  if (dirty?.license_name)
    formData.append("license_name", data?.license_name || "");

  if (dirty?.license_name_ar)
    formData.append("license_name_ar", data?.license_name_ar || "");

  if (dirty?.country)
    formData.append("country_id", data?.country?.id?.toString() || "");

  if (dirty?.state)
    formData.append("state_id", data?.state?.id?.toString() || "");

  if (dirty?.company_industry)
    formData.append(
      "company_industry_id",
      data?.company_industry?.id?.toString() || ""
    );

  if (dirty?.company_types)
    formData.append(
      "company_type_id",
      data?.company_types?.id?.toString() || ""
    );

  if (dirty?.info_message)
    formData.append("description", data?.info_message || "");

  if ("mandatory_license" in dirty)
    formData.append("mandatory_license", `${data?.mandatory_license}` || "");

  if ("general_license" in dirty)
    formData.append("is_general", `${data?.general_license}` || "");

  if (entityId) {
    formData.append("id", entityId);
    updateLicense(formData).then((res) => cb?.(res));
  } else {
    createLicense(formData).then((res) => cb?.(res));
  }
};
