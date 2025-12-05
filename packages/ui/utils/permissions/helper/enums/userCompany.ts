// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdUserCompany {
  usercompany = 27,

  usercompanychangepassword = 530,

  usercompanydeleted = 528,
  usercompanydeletedrestore = 2937,

  usercompanydocuments = 526,
  usercompanydocumentsview = 2926,
  usercompanydocumentsedit = 2923,
  usercompanydocumentsdownload = 2928,
  usercompanydocumentsdelete = 2924,

  usercompanyleadership = 525,
  usercompanyleadershipdelete = 2920,
  usercompanyleadershipadd = 2919,
  usercompanyleadershipedit = 0,

  usercompanydepartment = 524,
  usercompanydepartmentedit = 2889,
  usercompanydepartmentroles = 2891,
  usercompanydepartmentrolesview = 0,
  usercompanydepartmentrolesedit = 0,
  usercompanydepartmentrolesdelete = 0,
  usercompanydepartmentrolesadd = 0,
  usercompanydepartmentadd = 2888,
  usercompanydepartmentdelete = 2890,

  usercompanyactivities = 552,

  usercompanysubscription = 527,
  usercompanysubscriptionfree = 2931,
  usercompanysubscriptionfreeviewcontract = 2935,
  usercompanysubscriptionpaid = 2930,
  usercompanysubscriptionpaidviewcontract = 2933,
  usercompanysubscriptionpaidmakepayment = 2934,

  usercompanysubcompanies = 523,
  usercompanysubcompaniesdocuments = 2877,
  usercompanysubcompaniesadd = 2912,
  usercompanysubcompaniesdelete = 2872,
  usercompanysubcompaniesview = 2883,
  usercompanysubcompaniesleadership = 2873,
  usercompanysubcompaniesleadershipadd = 2893,
  usercompanysubcompaniesleadershipdelete = 2894,
  usercompanysubcompaniesdepartment = 2886,
  usercompanysubcompaniesdepartmentroles = 2916,
  usercompanysubcompaniesdepartmentedit = 2914,
  usercompanysubcompaniesdepartmentadd = 2913,
  usercompanysubcompaniesdepartmentdelete = 2915,
  usercompanysubcompaniessubscriptions = 2884,
}

export enum PermissionsForUserCompany {
  usercompanydeleted = 'usercompanydeleted',
  usercompanydocuments = 'usercompanydocuments',
  usercompanyleadership = 'usercompanyleadership',
  usercompanydepartment = 'usercompanydepartment',
  usercompanydepartmentroles = 'usercompanydepartmentroles',
  usercompanysubscriptionfree = 'usercompanysubscriptionfree',
  usercompanysubscriptionpaid = 'usercompanysubscriptionpaid',
  usercompanysubcompanies = 'usercompanysubcompanies',
  usercompanysubcompaniesleadership = 'usercompanysubcompaniesleadership',
  usercompanysubcompaniesdepartment = 'usercompanysubcompaniesdepartment',
}
