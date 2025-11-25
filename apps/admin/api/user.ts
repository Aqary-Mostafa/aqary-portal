"use server";
import { UserTypes } from "@/utils/dal";

import { getApiResponse } from "@/utils/get-api-response";

import { ConstantsTypes } from "@/types/shared";

const getUserData = async () => {
  return await getApiResponse<{
    data: UserTypes;
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/user/me`,
    revalidate: 0,
  });
};

const changeUserCompany = ({ formData }: { formData: FormData }) =>
  getApiResponse<{
    data: string;
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/user/updateActiveCompany`,
    requestData: formData,
    method: "PUT",
  });

const getallDashBoardUsertype = () =>
  getApiResponse<{
    data: ConstantsTypes[];
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/user/getallDashBoardUsertype`,
    revalidate: 0,
  });

export { changeUserCompany, getallDashBoardUsertype, getUserData };
