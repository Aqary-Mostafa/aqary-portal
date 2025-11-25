import CreateLicenseContainer from "@/modules/legal/licenses/create";

import { consts } from "@/api/consts";
import { locations } from "@/api/location";
import { getLicense } from "@/modules/legal/api/legal";
import { CreateLicenseSchemaFormValues } from "@/modules/legal/validator/license";

/**
 * Fetch init get requests
 *
 * @Fetcher
 * @param {_token} _token - User token.
 */
const loadData = async ({ id }: { id: string }) => {
  const [getAllCountries, companyIndustries, licenseData] = await Promise.all([
    // ? getAllCountries
    locations?.getAllCountries?.(),
    consts.getCompanyIndustries(),
    getLicense({ id }),
  ]);

  return {
    getAllCountries: getAllCountries?.data,
    companyIndustries: companyIndustries?.data,
    licenseData: licenseData?.data,
  };
};

const EditLicense = async (props: {
  params: Promise<{ entityId: string }>;
}) => {
  const param = await props?.params;
  const { getAllCountries, companyIndustries, licenseData } = await loadData({
    id: param?.entityId,
  });

  const convertedData: CreateLicenseSchemaFormValues = {
    license_name: licenseData?.license_name || "",
    license_name_ar: licenseData?.license_name_ar,
    country: licenseData?.country_id,
    state: licenseData?.state_id,
    company_industry: licenseData?.company_industry_id,
    company_types: licenseData?.company_type_id,
    info_message: "ask backend",
    mandatory_license: licenseData?.mandatory_license || false,
    general_license: licenseData?.is_general || false,
  };

  return (
    <CreateLicenseContainer
      formGet={{
        getAllCountries,
        companyIndustries,
        licenceData: convertedData,
      }}
    />
  );
};

export default EditLicense;
