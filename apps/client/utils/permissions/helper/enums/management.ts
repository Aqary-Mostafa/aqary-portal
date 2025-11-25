// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdManagement {
  management = 7,

  managementadduser = 349,

  managementmanagepermissions = 350,
  managementmanagepermissionstertieary = 1487,
  managementmanagepermissionssecondary = 1486,
  managementmanagepermissionssubmenu = 1485,
  managementmanagepermissionsquinary = 1489,
  managementmanagepermissionsquaternary = 1488,
  managementmanagepermissionsmainmenu = 1484,

  managementdeletedusers = 351,
  managementdeletedusersrestore = 1490,

  managementdepartments = 348,
  managementdepartmentsroles = 1480,
  managementdepartmentsedit = 1478,
  managementdepartmentsdelete = 1479,
  managementdepartmentsadd = 0,

  managementusers = 475,
  managementusersreset = 1483,
  managementusersedit = 1482,
  managementusersview = 1481,
}

export enum PermissionsForManagement {
  managementmanagepermissions = 'managementmanagepermissions',
  managementdeletedusers = 'managementdeletedusers',
  managementdepartments = 'managementdepartments',
  managementusers = 'managementusers',
}
