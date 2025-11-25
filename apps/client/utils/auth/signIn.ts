"use server";

import { cookies } from "next/headers";

import { consoleLog } from "../console-log";
import { getApiResponse } from "../get-api-response";

export const signIn = async (formData: FormData) => {
  const aqryCookies = await cookies();
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/user/dashboardLogin`;

  try {
    const result = await getApiResponse<{
      data: object;
      Message: string;
      error: string;
    }>({
      apiEndpoint,
      method: "POST",
      requestData: formData,
      revalidate: 0,
    });

    if (result?.Message === "success") {
      const isRemmemberMe = formData.get("remmemberme");
      const oneDay = 24 * 60 * 60 * 1000;

      if (isRemmemberMe === "true")
        aqryCookies.set("aqaryUser", JSON.stringify(result?.data));
      else
        aqryCookies.set("aqaryUser", JSON.stringify(result?.data), {
          expires: Date.now() + oneDay,
        });

      return "success";
    } else {
      return result?.error || "Something Went wrong!";
    }
  } catch (error) {
    consoleLog(error);
    return "Something Went wrong!";
  }
};
