// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdAqaryAdmin {
  aqaryadmin = 20,

  aqaryadminranking = 419,
  aqaryadminrankingtoggle = 1855,

  aqaryadmincompanypermissions = 418,
  aqaryadmincompanypermissionsedit = 1854,

  aqaryadminsubscriptionorders = 420,
  aqaryadminsubscriptionordersedit = 1858,
  aqaryadminsubscriptionorderspayment = 0,
  aqaryadminsubscriptionorderspaymentedit = 0,
  aqaryadminsubscriptionorderssubscriptionsfree = 0,
  aqaryadminsubscriptionorderssubscriptionspaid = 0,
  aqaryadminsubscriptionordersfreeadd = 1856,
  aqaryadminsubscriptionorderspaidadd = 1856,
  aqaryadminsubscriptionordersview = 1857,

  aqaryadminrejections = 422,

  aqaryadminbannerorder = 563,
  aqaryadminbannerorderview = 0,
  aqaryadminbannerorderedit = 0,
  aqaryadminbannerorderfreeadd = 3180,
  aqaryadminbannerorderpaidadd = 3179,

  aqaryadminbilingmanagements = 421,
  aqaryadminbilingmanagementsdraftcontracts = 1860,
  aqaryadminbilingmanagementscontracts = 1862,
  aqaryadminbilingmanagementscontractsedit = 2457,
  aqaryadminbilingmanagementscontractsadd = 2456,
  aqaryadminbilingmanagementscontractsdownload = 2458,
  aqaryadminbilingmanagementsfinancialapproval = 1859,
  aqaryadminbilingmanagementsfinancialapprovalfreeadd = 0,
  aqaryadminbilingmanagementsfinancialapprovalpaidadd = 0,
  aqaryadminbilingmanagementsfinancialapprovalview = 2452,
  aqaryadminbilingmanagementsfinancialapprovalverify = 2453,
  aqaryadminbilingmanagementsfinancialapprovalreject = 2454,

  aqaryadminbilingmanagementslegalverification = 1861,
  aqaryadminbilingmanagementslegalverificationdocuments = 0,
}

export enum PermissionsForAqaryAdmin {
  aqaryadminranking = 'aqaryadminranking',
  aqaryadmincompanypermissions = 'aqaryadmincompanypermissions',
  aqaryadminsubscriptionorders = 'aqaryadminsubscriptionorders',
  aqaryadminbilingmanagements = 'aqaryadminbilingmanagements',
  aqaryadminbilingmanagementscontracts = 'aqaryadminbilingmanagementscontracts',
  aqaryadminbilingmanagementsfinancialapproval = 'aqaryadminbilingmanagementsfinancialapproval',
  aqaryadminbannarorders = 'aqaryadminbannarorders',
}
