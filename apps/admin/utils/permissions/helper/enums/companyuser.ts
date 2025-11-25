// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdCompanyUser {
  companyusers = 6,

  companyusersadd = 482,

  companyusershistory = 346,

  companyusersmanageusers = 343,
  companyusersmanageusersdelete = 1467,
  companyusersmanageusersedit = 1465,
  companyusersmanageuserssubscriptionsfreeadd = 0,
  companyusersmanageuserssubscriptionspaidadd = 0,
  companyusersmanageuserslive = 1468,
  companyusersmanageusersselectlead = 1473,
  companyusersmanageuserssetpermission = 1472,
  companyusersmanageusersadduser = 1464,
  companyusersmanageusersreset = 1469,
  companyusersmanageusersblock = 1474,
  companyusersmanageuserspackagesssignments = 1471,
  companyusersmanageusersdocuments = 1470,
  companyusersmanageusersdocumentsapprove = 2101,
  companyusersmanageusersdocumentsreject = 2102,

  companyusersdeleted = 344,
  companyusersdeletedrestore = 1475,

  companyusersblocked = 347,
  companyusersblockedunblock = 1476,
}

export enum PermissionsForCompanyUser {
  companyusersdeleted = 'companyusersdeleted',
  companyusersblocked = 'companyusersblocked',
  companyusersmanageusers = 'companyusersmanageusers',
  companyusersmanageusersdocuments = 'companyusersmanageusersdocuments',
}
