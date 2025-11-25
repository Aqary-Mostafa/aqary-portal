import { getApiResponse } from "@/utils/get-api-response";

import { GetNotificationRow } from "@/types/notification";

const getNotifications = (pageNo?: number, pageSize?: number) => {
  const pageination = pageSize
    ? `&page_no=${pageNo}&page_size=${pageSize}`
    : "";

  return getApiResponse<{
    data: GetNotificationRow[];
    Total?: number;
    Message?: string;
    error?: string;
  }>({
    apiEndpoint: `${
      // process.env.NEXT_PUBLIC_API_URL
      process.env.NEXT_PUBLIC_NOTIFIY_API_URL
    }/notifications/list?channel=dashboard${pageination}`,
    revalidate: 0,
  });
};

export { getNotifications };
