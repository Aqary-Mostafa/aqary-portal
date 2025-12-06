import { getApiResponse } from '@/utils/get-api-response';

import { BannerPackageType } from '@/types/global';
import { OathConstants } from '@/types/global';
import {
  ConstantsTypes,
  ConstantsV0Types,
  CriteriaTypeTypes,
  FooterWorkspaceTypes,
  LanguageType,
  PeriodsTypes,
  SectionsTypes,
} from '@/types/shared';

const getLifeStyle = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getLifeStyleConst`,
    revalidate: 0,
  });

const getOwnership = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getOwnershipConst`,
    revalidate: 0,
  });

const getCompletionStatus = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getCompletionStatusConst`,
    revalidate: 0,
  });

const getFurnishing = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getFurnishingConst`,
    revalidate: 0,
  });

const getRanks = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getRanksConst`,
    revalidate: 0,
  });

const getStatus = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getStatusConst`,
    revalidate: 0,
  });

const getRentTypes = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getRentTypesConst`,
    revalidate: 0,
  });

const getAllLanguages = () =>
  getApiResponse<{
    data: LanguageType[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/language/getAllLanguages`,
    revalidate: 0,
  });

const getGender = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getGenderConst`,
    revalidate: 0,
  });

const getAllCategories = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getAllCategory`,
    revalidate: 0,
  });

//? Get All Entity Types
const getAllEntityTypes = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getAllEntityTypes`,
    revalidate: 0,
  });

//? Get All Banner Packages Types Consts
const getBannerPackage = () =>
  getApiResponse<{
    data: BannerPackageType[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getBannerPackage`,
    revalidate: 0,
  });
//? Get All Banner Plan Types Consts
const getBannerPlanType = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getBannerPlanType`,
    revalidate: 0,
  });

//? Get All Banner Platfomrs Types Consts
const getBannerPlatform = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getBannerPlatform`,
    revalidate: 0,
  });

//? Get All BannerDirection
const getBannerDirection = () =>
  getApiResponse<{
    data: ConstantsV0Types[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getBannerDirection`,
    revalidate: 0,
  });

//? Get getBannerPosition
const getBannerPosition = () =>
  getApiResponse<{
    data: ConstantsV0Types[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getBannerPosition`,
    revalidate: 0,
  });

//? Get GalleryMediaTypeConst
const getGalleryMediaTypeConst = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getGalleryMediaTypeConst`,
    revalidate: 0,
  });

//? Get CriteriaType
const getCriteriaType = () =>
  getApiResponse<{
    data: CriteriaTypeTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getCriteriaType`,
    revalidate: 0,
  });

//? Get getAppointmentApps
const getAppointmentApps = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getAppointmentApps`,
    revalidate: 0,
  });

//? Get getAppointmentTypes
const getAppointmentTypes = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getAppointmentTypes`,
    revalidate: 0,
  });

//? Get Oath Constands in Platform
const getOauthConstants = ({ type }: { type: OathConstants }) =>
  getApiResponse<{
    data: string[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getOauthConstants?dropdown_type=${type}`,
    revalidate: 0,
  });

//? Get Plan types for unit variation
const unitVariationPlanTypes = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/plan-types`,
    revalidate: 0,
  });

//? Get Plan types for unit variation
const getCallReminder = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getCallReminder`,
    revalidate: 0,
  });
//? Get Call Type
const getCallType = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getCallType`,
    revalidate: 0,
  });
//? get Listening Status
const getListeningStatus = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getListeningStatus`,
    revalidate: 0,
  });
//? get Listening Status
const getCallPurpose = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getCallPurpose`,
    revalidate: 0,
  });
//? get Call Sentiment
const getCallSentiment = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getCallSentiment`,
    revalidate: 0,
  });
//? get Deal Stage
const getDealStage = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getDealStage`,
    revalidate: 0,
  });

//? get footer Workspace
const getFooterWorkspace = () =>
  getApiResponse<{
    data: FooterWorkspaceTypes;
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/website/footerWorkspace`,
    revalidate: 0,
  });

//? get footer Workspace
const getCompanyIndustries = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/industries/list`,
    revalidate: 0,
  });

const getModulesList = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/sections/list`,
    revalidate: 0,
  });

const getModulesTypesList = () =>
  getApiResponse<{
    data: string[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/settings/sections/list-types`,
    revalidate: 0,
  });

const getCompanyTypesConst = ({ id }: { id: string }) =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getCompanyTypesConst?industry_id=${id}`,
    revalidate: 0,
  });

const getPaymentMethodConst = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getPaymentMethodConst`,
    revalidate: 0,
  });

const getIndividualTypes = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getIndividualTypes`,
    revalidate: 0,
  });

const getAccountTypes = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getAccountTypes`,
    revalidate: 0,
  });

const getAllActivityTypes = ({ id }: { id: number }) =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/listAllActivities/${id}`,
    revalidate: 0,
  });

const getAllSections = () =>
  getApiResponse<{
    data: SectionsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/section/all`,
    revalidate: 0,
  });

const getAllCategoriesV2 = () =>
  getApiResponse<{
    data: string[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/configs/categories`,
    revalidate: 0,
  });

const getAllUsage = () =>
  getApiResponse<{ data: ConstantsTypes[]; Message: string }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getUsage`,
  });

const getPeriods = () =>
  getApiResponse<{ data: PeriodsTypes[]; Message: string }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/periods`,
  });

const socialMediaTypes = () =>
  getApiResponse<{
    data: string[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/v2/dashboard/dashboard-account/social-media-types`,
    revalidate: 0,
  });

const createNewsLetterSubscribers = ({ formData }: { formData: FormData }) =>
  getApiResponse<{
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/website/createNewsLetterSubscribers`,
    method: 'POST',
    requestData: formData,
  });

const noApiHabibii = ({ route }: { route?: string }) =>
  getApiResponse<{
    data: never;
    Total?: number;
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/noApiHabibii/comsesfrom/${route}`,
    revalidate: 0,
  });

export const consts = {
  getLifeStyle, // * test Done
  getOwnership, // * test Done
  getCompletionStatus,
  getFurnishing,
  getRanks,
  getStatus,
  getRentTypes,
  getAllLanguages,
  getGender,
  getAllCategories,
  getAllEntityTypes,
  getBannerPackage,
  getBannerPlanType,
  getBannerPlatform,
  getBannerDirection,
  getBannerPosition,
  getGalleryMediaTypeConst,
  getCriteriaType,
  getAppointmentApps,
  getAppointmentTypes,
  getOauthConstants,
  unitVariationPlanTypes,
  getCallReminder,
  getCallType,
  getListeningStatus,
  getCallPurpose,
  getCallSentiment,
  getDealStage,
  getFooterWorkspace,
  getCompanyIndustries,
  getModulesList,
  getModulesTypesList,
  getCompanyTypesConst,
  getPaymentMethodConst,
  getIndividualTypes,
  getAccountTypes,
  socialMediaTypes,
  getAllActivityTypes,
  getAllSections,
  getAllCategoriesV2,
  getAllUsage,
  getPeriods,

  createNewsLetterSubscribers,
  noApiHabibii,
};
