import { getApiResponse } from '@/utils/get-api-response';
import { PropertyInsightType } from '../types/insights';

export const insightsApi = {
  getPropertyInsights: ({
    page = '1',
    pageSize = '5',
    search,
  }: {
    page?: string;
    pageSize?: string;
    search?: string;
  }) =>
    getApiResponse<{
      data: PropertyInsightType[];
      Total?: number;
      Message?: string;
      error?: string;
    }>({
      apiEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/getPropertyInsights?search=${search}&page_no=${page}&page_size=${pageSize}`,
      revalidate: 0,
    }),
};
