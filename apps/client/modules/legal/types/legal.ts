import { ConstantsTypes } from "@/types/shared";

export interface LicensesTypes {
  id: 7;
  license_name: string;
  license_name_ar: string;
  country_id: ConstantsTypes;
  state_id: ConstantsTypes;
  company_industry_id: ConstantsTypes;
  company_type_id: ConstantsTypes;
  mandatory_license: boolean;
  created_by: ConstantsTypes;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  is_general: boolean;
}

export interface CertificatesTypes {
  certificate_name: string;
  certificate_name_ar: string;
  individual_type: string;
  country_id: ConstantsTypes;
  service_area: ConstantsTypes;
  service_expertise: ConstantsTypes;
  mandatory_certificate: boolean;
  is_general: boolean;
  id: number;
}

export interface LgalConditionsTypes {
  id: number;
  account_type: ConstantsTypes;
  country_id: ConstantsTypes;
  company_industry_id: ConstantsTypes;
  company_type_id: ConstantsTypes;
  service_expertise: ConstantsTypes;
  legal_conditions_title: string;
  legal_conditions_title_ar: string;
  legal_conditions_paragraph: string;
  legal_conditions_paragraph_ar: string;
  file_url: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
