import type { JSX } from "react";

import LagelLicensesContainer from "@/modules/legal/licenses";

import { SeacrhParams } from "@/constants/searchParams";
import { getLicenses } from "@/modules/legal/api/legal";

const loadDataFromApi = async (_page: string, _pageSize: string) => {
  const data = await getLicenses({ pageNo: _page, pageSize: _pageSize });

  return {
    getLicenses: data,
  };
};

/**
 * Render Tasks in SSR
 *
 * @Component
 * @param {searchParams} searchParams - Url search params.
 * @returns {Promise<JSX.Element>} The rendered Tasks page in SSR.
 *
 */
const Licenses = async (props: {
  searchParams: Promise<{
    [SeacrhParams.page]: string;
    [SeacrhParams.pageSize]: string;
  }>;
}): Promise<JSX.Element> => {
  const searchParams = await props.searchParams;
  const _page = searchParams[SeacrhParams.page] || "1";
  const _pageSize = searchParams[SeacrhParams.pageSize] || "3";

  const { getLicenses } = await loadDataFromApi(_page, _pageSize);

  const data = getLicenses?.data ?? [];
  const total = getLicenses?.Total ?? 0;

  return (
    <LagelLicensesContainer
      _page={_page}
      _pageSize={_pageSize}
      total={total}
      data={data}
    />
  );
};

export default Licenses;
