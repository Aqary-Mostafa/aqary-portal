import CreateLicenseContainer from "@/modules/legal/licenses/create";

import { consts } from "@/api/consts";
import { locations } from "@/api/location";

/**
 * Fetch init get requests
 *
 * @Fetcher
 * @param {_token} _token - User token.
 */
const loadData = async () => {
  const [getAllCountries, companyIndustries] = await Promise.all([
    // ? getAllCountries
    locations?.getAllCountries?.(),
    consts.getCompanyIndustries(),
  ]);

  return {
    getAllCountries: getAllCountries?.data,
    companyIndustries: companyIndustries?.data,
  };
};

const CreateLicense = async () => {
  const { getAllCountries, companyIndustries } = await loadData();

  return (
    <CreateLicenseContainer formGet={{ getAllCountries, companyIndustries }} />
  );
};

export default CreateLicense;
