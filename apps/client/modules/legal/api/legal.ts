import { getApiResponse } from '@/utils/get-api-response';

import {
  CertificatesTypes,
  LgalConditionsTypes,
  LicensesTypes,
} from '@/types/legal';

const getCertificate = ({ id }: { id: string }) =>
  getApiResponse<{
    data: CertificatesTypes;
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/certificates/${id}`,
    revalidate: 0,
  });

const getLicense = ({ id }: { id: string }) =>
  getApiResponse<{
    data: LicensesTypes;
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/licenses/${id}`,
    revalidate: 0,
  });

const getLgalCondition = ({ id }: { id: string }) =>
  getApiResponse<{
    data: LgalConditionsTypes;
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/legal-conditions/${id}`,
    revalidate: 0,
  });

const getLicenses = ({ pageNo = '1', pageSize = '5' }) =>
  getApiResponse<{
    Total?: number;
    data: LicensesTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/licenses?page_no=${pageNo}&page_size=${pageSize}`,
    revalidate: 0,
  });

const getCertificates = ({ pageNo = '1', pageSize = '5' }) =>
  getApiResponse<{
    Total?: number;
    data: CertificatesTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/certificates?page_no=${pageNo}&page_size=${pageSize}`,
    revalidate: 0,
    headers: {
      cache: 'no-store',
    },
  });

const getLgalConditions = ({ pageNo = '1', pageSize = '5' }) =>
  getApiResponse<{
    Total?: number;
    data: LgalConditionsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/legal-conditions?page_no=${pageNo}&page_size=${pageSize}`,
    revalidate: 0,
    headers: {
      cache: 'no-store',
    },
  });

const createLicense = (formData: FormData) => {
  return getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/licenses/`,
    requestData: formData,
    method: 'POST',
  });
};

const createLegelCondition = (formData: FormData) => {
  return getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/legal-conditions/`,
    requestData: formData,
    method: 'POST',
  });
};

const updateLegelCondition = (formData: FormData) => {
  return getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/legal-conditions/`,
    requestData: formData,
    method: 'PUT',
  });
};

const createCertificate = (formData: FormData) => {
  return getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/certificates/`,
    requestData: formData,
    method: 'POST',
  });
};

const updateLicense = (formData: FormData) => {
  return getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/licenses/`,
    requestData: formData,
    method: 'PUT',
  });
};

const updateCertificate = (formData: FormData) => {
  return getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/certificates`,
    requestData: formData,
    method: 'PUT',
  });
};

const deleteLicense = ({ id }: { id: string }) => {
  return getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/licenses/${id}`,
    method: 'DELETE',
  });
};

const deleteCertificate = ({ id }: { id: string }) => {
  return getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/certificates/${id}`,
    method: 'DELETE',
  });
};

const deleteLegalConditions = ({ id }: { id: string }) => {
  return getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/legal-conditions/${id}`,
    method: 'DELETE',
  });
};

export {
  createCertificate,
  createLegelCondition,
  createLicense,
  deleteCertificate,
  deleteLegalConditions,
  deleteLicense,
  getCertificate,
  getCertificates,
  getLgalCondition,
  getLgalConditions,
  getLicense,
  getLicenses,
  updateCertificate,
  updateLegelCondition,
  updateLicense,
};
