export enum SeacrhParams {
  page = 'page',
  pageSize = 'size',
  projectType = 'projectType',
  search = 'search',
  is_multiphase = 'is_multiphase',
  projectId = 'projectId',
  category = 'category',
  projectPropertyId = 'projectPropertyId', // TODO: Remove this comes from Haseeb code
  optionNo = 'optionNo',
  status = 'status',
  version = 'version',
  isMain = 'main',
}

export type SearchParamsType = Promise<{
  [SeacrhParams.page]: string;
  [SeacrhParams.pageSize]: string;
  [SeacrhParams.search]: string;
}>;
