import { getLocale } from "next-intl/server";

import { verifySession } from "./dal";

import { clearCookies } from "./auth";
import { IS_PROD } from "@/constants";
import { consoleLog } from "./console-log";

import { LocalizationType } from "@/types/global";

export const getApiResponse = async <T>({
  apiEndpoint,
  requestData,
  method = "GET",
  revalidate = IS_PROD ? 3600 : 120, // cache data in seconds
  headers,
}: {
  apiEndpoint: string;
  requestData?: BodyInit;
  method?: "POST" | "GET" | "PUT" | "DELETE";
  revalidate?: number;
  headers?: HeadersInit;
}) => {
  const session = await verifySession?.();
  let locale;

  //? For Client Localization
  if (typeof window !== "undefined") {
    locale = window.location.href.split("/").includes(LocalizationType.ar)
      ? LocalizationType.ar
      : LocalizationType.en;
  }
  //? For Server Localization
  else {
    locale = await getLocale();
  }

  headers = session?.aqaryUser?.token
    ? {
        Authorization: `Bearer ${session?.aqaryUser?.token}`,
        "Accept-Language": locale || LocalizationType.en,
        ...headers,
      }
    : headers;

  try {
    const startTime = Date.now();
    const response = await fetch(apiEndpoint, {
      method,
      body: requestData,
      headers,
      next: {
        revalidate,
      },
    });

    if (!response.ok) {
      consoleLog("🚀 Debug getApiResponse requestData:", requestData);
      if (response?.status === 401) {
        try {
          await clearCookies();
        } catch (error) {
          consoleLog("Failed to clear cookies");
        }
        return null;
      }
      // throw new Error(
      //   `😢 getApiResponse failed: ${response.status}/${response.statusText} - ${apiEndpoint}`
      // );
    }
    const duration = Date.now() - startTime;

    consoleLog(
      `getApiResponse: ${(duration / 1000).toFixed(2)}s ${
        duration > 2000 ? "💔" : "-"
      } ${apiEndpoint}`
    );

    return (await response.json()) as T;
  } catch (error) {
    consoleLog("getApiResponse error:", error);
  }

  return null;
};
