export enum URLPagesTypes {
  // ! Project
  project = 'project',
  phases = 'phases',
  properties = 'properties',
  units = 'units',
  unittype = 'unittype',
  sharedwithmeproject = 'sharedwithmeproject',
  sharedwithmephases = 'sharedwithmephases',
  sharedwithmephasesasparent = 'sharedwithmephasesasparent',
  sharedwithmepropertiesasparent = 'sharedwithmepropertiesasparent',
  sharedwithmeprojectasparent = 'sharedwithmeprojectasparent',
  sharedwithmepropertiesforproject = 'sharedwithmepropertiesforproject',
  sharedwithmepropertiesforphases = 'sharedwithmepropertiesforphases',
  sharedwithmepropertiesforproperties = 'sharedwithmepropertiesforproperties',
  sharedwithmeunits = 'sharedwithmeunits',
  sharedwithmeunittype = 'sharedwithmeunittype',
  projectPropertiesPaymentPlans = 'projectPropertiesPaymentPlans',
  // ! Company
  company = 'company',
  subcompany = 'subcompany',
  companyDepartments = 'companyDepartments',
  companyRoles = 'companyRoles',
  companyActivities = 'companyActivities',
  // ! Company (Normal User Only)
  mysubcompany = 'mysubcompany',
  myCompanyDepartments = 'myCompanyDepartments',
  mySubCompanyDepartments = 'mySubCompanyDepartments',
  mySubCompanyActivities = 'mySubCompanyActivities',
  myCompanyRoles = 'myCompanyRoles',
  mySubCompanyRoles = 'mySubCompanyRoles',
  // ! Aqary admin
  orders = 'orders',
  payments = 'payments',
  manageBannerOrders = 'manageBannerOrders',
  // ! Propertyhub
  propertyhub = 'propertyhub',
  propertyHubUnitTypes = 'propertyHubUnitTypes',
  propertyHubUnits = 'propertyHubUnits',
  propertyPaymentPlans = 'propertyPaymentPlans',
  // ! swap
  swap = 'swap',
  swapLegalVerificationDocuments = 'swapLegalVerificationDocuments',
  // ! Unit section
  unitsection = 'unitsection',
  // ! Agriculture
  agriculture = 'agriculture',
  agricultureUnitTypes = 'agricultureUnitTypes',
  // ! Agriculture
  industrial = 'industrial',
  industrialUnitTypes = 'industrialUnitTypes',
  agriculturePaymentPlans = 'agriculturePaymentPlans',
  //! Lead Contact
  manageAccounts = 'manageAccounts',
  manageSubAccounts = 'manageSubAccounts',

  // ! Exhibitions
  exhibitions = 'exhibitions',

  // ! auction
  auction = 'auction',

  // ! auction
  hotel_booking = 'hotel_booking',
  // ! Services
  manageServices = 'manageServices',
  // ! Management
  managementDepartment = 'managementDepartment',
  managementRoles = 'managementRoles',
  // ! Company Profile
  manageCompanyProfile = 'manageCompanyProfile',
  companyProfileProjects = 'companyProfileProjects',
  companyProfilePhases = 'companyProfilePhases',
  companyProfilePhasespaymentplans = 'companyProfilePhasespaymentplans',
  companyProfileprojectspaymentplans = 'companyProfileprojectspaymentplans',
  companyProfileProperties = 'companyProfileProperties',
  companyProfilePropertiesUnitTypes = 'companyProfilePropertiesUnitTypes',
  // ! Profile projects
  profileProject = 'profileProject',
  // ! Community Guide
  manageCommunityGuide = 'manageCommunityGuide',
  // ! Insights
  manageInsights = 'manageInsights',
  manageSubInsights = 'manageSubInsights',
  // ! Banner Cost
  manageBannerCost = 'manageBannerCost',
  // ! Company Users
  manageCompanyUsers = 'manageCompanyUsers',
  // ! Settings -> Plaform
  managePlatform = 'managePlatform',
  // ! Contact
  contact = 'contact',
  // ! lead
  lead = 'lead',
  leadnotes = 'leadnotes',
  // ! calls
  calls = 'calls',
  callsnotes = 'callsnotes',
  // ! Settings -> Unit Variations
  unitVariations = 'unitVariations',
  // ! Cases
  manageCases = 'manageCases',
  casesNotes = 'casesNotes',
  // ! Deals
  managedeals = 'managedeals',
  dealsnotes = 'dealsnotes',
  // ! Accounts
  accounts = 'accounts',
  accountssubscription = 'accountssubscription',
  accountspayments = 'accountspayments',
  accountstopup = 'accountstopup',
  subcompanies = 'subcompanies',
}

export enum EntityTypes {
  project = 'project',
  phase = 'phase',
  property = 'property',
  unit = 'unit',
}

export enum TableActionsPrimary {
  view = 'view',
  edit = 'edit',
  share = 'share',
  publish = 'publish',
  unshare = 'unshare',
  unpublish = 'unpublish',
  delete = 'delete',
  download = 'download',
  active = 'active',
}

export enum TableActionsSecondary {
  properties = 'listingproperties',
  plan = 'manageplan',
  rating = 'rating',
  promotion = 'addtopromotion',
  documents = 'documents',
  financial = 'financialprovider',
  gallery = 'gallery',
  phases = 'phases',
  paymentPlans = 'paymentplans',
  unblock = 'unblock',
  internalShare = 'internalShare',
  localShare = 'localShare',
  internationalShare = 'internationalShare',
  manageplan = 'manageplan',
  manageUnitType = 'manageUnitType',
  manageUnit = 'manageUnit',
  restore = 'restore',
  socialMedia = 'socialMedia',
  webPortal = 'webPortal',
  approve = 'approve',
  reject = 'reject',
  manage = 'manage',
  restoreDocuments = 'restoreDocuments',
  liveView = 'liveView',
  packageAssignment = 'packageAssignment',
  setPermissions = 'setPermissions',
  selectTeamLead = 'selectTeamLead',
  block = 'block',
  subscriptions = 'subscriptions',
  leadership = 'leadership',
  subCompanies = 'subCompanies',
  viewDocuments = 'viewDocuments',
  subscription = 'subscription',
  viewLive = 'viewLive',
  report = 'report',
  resetPassword = 'resetPassword',
  draft = 'draft',
  approveQuota = 'approveQuota',
  makePayment = 'makePayment',
  viewContract = 'viewContract',
  viewCompanyProfile = 'viewCompanyProfile',
  department = 'department',
  manageRoles = 'manageRoles',
  viewInvoice = 'viewInvoice',
  updatePayment = 'updatePayment',
  paymentDetails = 'paymentDetails',
  overduePayments = 'overduePayments',
  downloadContract = 'downloadContract',
  verifyFinance = 'verifyFinance',
  rejectRequest = 'rejectRequest',
  reVerify = 'reVerify',
  inactive = 'inactive',
  exclusive = 'exclusive',
  duplicate = 'duplicate',
  accept = 'accept',
  reassignlead = 'reassignlead',
  convertToContact = 'convertToContact',
  attachements = 'attachements',
  email = 'email',
  setAsJunk = 'setAsJunk',
  notes = 'notes',
  activities = 'activities',
  composeEmail = 'composeEmail',
  markAsCompleted = 'markAsCompleted',
  verifyLegal = 'verifyLegal',
  rejectLegal = 'rejectLegal',
  subcategory = 'subcategory',
  xmlMapper = 'xmlMapper',
  cancel = 'cancel',
  reschedule = 'reschedule',
  subAccount = 'subAccount',
  viewDeals = 'viewDeals',
  representative = 'representative',
  viewContact = 'viewContact',
  openActivities = 'openActivities',
  closeActivities = 'closeActivities',
  exportPdf = 'exportPdf',
  sendEmail = 'sendEmail',
  updateRejection = 'updateRejection',
  call = 'call',
  addOffer = 'addOffer',
  subSocialAccount = 'subSocialAccount',
  deletedSubAccounts = 'deletedSubAccounts',
  verifyExclusive = 'verifyExclusive',
  partener = 'partener',
  sponsers = 'sponsers',
  exhibitors = 'exhibitors',
  booth = 'booth',
  queries = 'queries',
  bids = 'bids',
  rooms = 'rooms',
  portals = 'portals',
  listingProject = 'listingProject',
  manageActivities = 'manageActivities',
  manageContent = 'manageContent',
  subInsights = 'subInsights',
  viewOrderDetails = 'viewOrderDetails',
  viewConsumedPlanPackage = 'viewConsumedPlanPackage',
  serviceExpertise = 'serviceExpertise',
  serviceLocation = 'serviceLocation',
  autorefresh = 'autorefresh',
  detailedReport = 'detailedReport',
  handler = 'handler',
  addTag = 'addTag',
  removeTag = 'removeTag',
  setReminder = 'setReminder',
  showSimilarity = 'showSimilarity',
  viewtimeline = 'viewtimeline',
  tag = 'tag',
  interestedListing = 'interestedListing',
  removeListing = 'removeListing',
  qadetails = 'qadetails',
  listing = 'listing',
  regenerateApiKey = 'regenerateApiKey',
  revokeApiKey = 'revokeApiKey',
  applyRateLimits = 'applyRateLimits',
  resetRateLimits = 'resetRateLimits',
  editApiKeyPermissions = 'editApiKeyPermissions',
  eventTypes = 'eventTypes',
  customHandler = 'customHandler',
  unitVariations = 'unitVariations',
  reassign = 'reassign',
  manageLicense = 'manageLicense',
  mobileconfigs = 'mobileconfigs',
  manageCertificate = 'manageCertificate',
  manageSubscriptions = 'manageSubscriptions',
  uploadcontract = 'uploadcontract',
  cancelcontract = 'cancelcontract',
  holdsubscription = 'holdsubscription',
  extendsubscription = 'extendsubscription',
  createsubcontract = 'createsubcontract',
  managepayment = 'managepayment',
  managetopup = 'managetopup',
  manageroles = 'manageroles',
  workhours = 'workhours',
  facilities = 'facilities',
  amenities = 'amenities',
}

export type ConstantsTypes = {
  id: number;
  label: string;
  label_ar?: string;
  icon?: string;
};

export type ConstantsV0Types = {
  id: number;
  title: string;
};

export type ConstantsV1Types = {
  id: number;
  name: string;
};

export type CurrencyTypes = {
  ID: number;
  Currency: string;
  Code: string;
  Flag: string;
};

export type SectionsTypes = {
  id: number;
  section: string;
  is_public: boolean;
};

export type PeriodsTypes = {
  period: string;
  quantity: number;
};

export type FactsTypes = {
  id: number;
  title: string;
  icon_url: string;
  title_ar: string;
};

export type CategoryListTypeFA = {
  category: string;
  facilities_amenities: {
    id: number;
    icon_url: string;
    title: string;
    created_at: string;
  }[];
};

export type CriteriaTypeTypes = {
  type: ConstantsTypes;
  names: ConstantsTypes[];
};

export enum FacilitiesAmenitiesTypes {
  facilities = 1,
  amenities = 2,
}

export interface LanguageType {
  id: number;
  language: string;
  code: string;
  flag: string;
}

export enum ListingTypes {
  local = 'local',
  international = 'international',
}

export enum PropertyFactsType {
  Bedroom = 3,
  Bathroom = 33,
  PlotArea = 18,
  TotalPlotArea = 61,
  BuiltUpArea = 4,
  TotalBuiltUpArea = 62,
  PropertyName = 5,
  NoOfElevators = 9,
  Furnished = 10,
  LifeStyle = 11,
  NoOfUnits = 14,
  NoOfFloors = 15,
  Ownership = 16,
  Parking = 17,
  Price = 19,
  RentType = 20,
  ServiceCharge = 22,
  NoOfPools = 24,
  Views = 29,
  UnitNo = 66,
  StartDate = 48,
  HandoverDate = 50,
  CompletionDate = 6,
  CompletionStatus = 43,
  NoOfRetails = 44,
  NoOfPayments = 38,
  MunicipalityTax = 45,
  CommercialTax = 46,
  IsLeased = 54,
  MinArea = 41,
  MaxArea = 42,
  PropertyNo = 58,
  SectorNo = 57,
  PlotNo = 78,
  WaterIrrigation = 51,
  Trees = 52,
  WorkerHouse = 53,
  NoOfRooms = 55,
}

export interface ProductTypes {
  id: number;
  product: string;
}

export enum ListingGeneralEntities {
  manage = 'manage',
  deleted = 'deleted',
}

export interface GlobalCustoms {
  content: {
    header: {
      title: string;
      backlinks: URLPagesTypes[];
    };
    section?: {
      title: string;
      backlink?: URLPagesTypes;
    };
  };
}

export interface FooterWorkspaceTypes {
  apps: {
    link: string;
    logo: string;
    text: string;
  }[];
  services: {
    is_coming_soon: boolean;
    link: string;
    logo: string;
    secondary_logo: string;
    secondary_logo_ar: string;
    text: string;
  }[];
}
