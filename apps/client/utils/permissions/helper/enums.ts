//? pages actions

import {
  PagesIdAgriculture,
  PermissionsForAgriculture,
} from "./enums/agriculture";
import {
  PagesIdAqaryAdmin,
  PermissionsForAqaryAdmin,
} from "./enums/aqaryadmin";
import { PagesIdCalls, PermissionsForCalls } from "./enums/call";
import { PagesIdCommunityGuide } from "./enums/communityguide";
import { PagesIdCompanies, PermissionsForCompanies } from "./enums/companies";
import {
  PagesIdCompanyUser,
  PermissionsForCompanyUser,
} from "./enums/companyuser";
import { PagesIdContacts, PermissionsForContacts } from "./enums/contact";
import { PagesIdLeads, PermissionsForLeads } from "./enums/leads";
import {
  PagesIdManagement,
  PermissionsForManagement,
} from "./enums/management";
import { PagesIdNetworks, PermissionsForNetworks } from "./enums/network";
import { PagesIdProject, PermissionsForProject } from "./enums/project";
import {
  PagesIdPropertyHub,
  PermissionsForPropertyHub,
} from "./enums/propertyhub";
import { PagesIdRequests, PermissionsForRequests } from "./enums/requests";
import { PagesIdSettings, PermissionsForSettings } from "./enums/settings";
import { PagesIdUnits, PermissionsForUnits } from "./enums/units";
import {
  PagesIdUserCompany,
  PermissionsForUserCompany,
} from "./enums/userCompany";

export type PermissionsActions = {
  add?: boolean;
  addfree?: boolean;
  addpaid?: boolean;
  view?: boolean;
  share?: boolean;
  delete?: boolean;
  publish?: boolean;
  edit?: boolean;
  financialProviders?: boolean;
  gallery?: boolean;
  promotions?: boolean;
  plans?: boolean;
  properties?: boolean;
  documents?: boolean;
  phases?: boolean;
  block?: boolean;
  unblock?: boolean;
  restore?: boolean;
  approve?: boolean;
  reject?: boolean;
  manage?: boolean;
  viewdocs?: boolean;
  localshare?: boolean;
  unpublish?: boolean;
  unshare?: boolean;
  internationalshare?: boolean;
  internalshare?: boolean;
  webportals?: boolean;
  socialmedia?: boolean;
  roles?: boolean;
  reset?: boolean;
  live?: boolean;
  setpermission?: boolean;
  selectlead?: boolean;
  packagesssignments?: boolean;
  accept?: boolean;
  duplicate?: boolean;
  import?: boolean;
  exclusive?: boolean;
  download?: boolean;
  payment?: boolean;
  xml?: boolean;
  reverify?: boolean;
  verify?: boolean;
  toggle?: boolean;
  copy?: boolean;
  restoredocuments?: boolean;
  unittype?: boolean;
  units?: boolean;
  subscriptions?: boolean;
  leadership?: boolean;
  department?: boolean;
  subcompanies?: boolean;
  makepayment?: boolean;
  preview?: boolean;
  report?: boolean;
  viewprofile?: boolean;
  viewcontract?: boolean;
  handler?: boolean;
  addtag?: boolean;
  deletetag?: boolean;
  reminder?: boolean;
  tag?: boolean;
  convert?: boolean;
  similarity?: boolean;
  attachment?: boolean;
  note?: boolean;
  timeline?: boolean;
  interestelist?: boolean;
  qadetails?: boolean;
  listing?: boolean;
  export?: boolean;
  log?: boolean;
  schedule?: boolean;
  subcategory?: boolean;
  cancel?: boolean;
  request?: boolean;
  morePermissions?: {
    promotions?: PermissionsActions;
    documents?: PermissionsActions;
    internationalshare?: PermissionsActions;
    bulk?: PermissionsActions;
  };
  tabs?: {
    [keyof: string]: boolean;
  };
};

export type PermissionsForType = PermissionsForProject;

export type PagesIdTypes = PagesIdProject;
