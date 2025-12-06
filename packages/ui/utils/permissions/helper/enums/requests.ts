/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdRequests {
  requests = 34,
  requeststab = 564,
  requestsapprovalrequests = 565,

  requestspending = 3183,
  requestspendingview = 0,
  requestspendingreject = 0,
  requestsapproved = 3184,
  requestsapprovedview = 0,
  requestsrejected = 3185,
  requestsrejectedview = 0,

  requestsapprovalrequestspending = 3186,
  requestsapprovalrequestspendingview = 0,
  requestsapprovalrequestspendingapprove = 0,
  requestsapprovalrequestspendingreject = 0,
  requestsapprovalrequestsapproved = 3187,
  requestsapprovalrequestsapprovedview = 0,
  requestsapprovalrequestsrejected = 3188,
  requestsapprovalrequestsrejectedview = 0,
}

export enum PermissionsForRequests {
  requestsapprovalrequestspending = 'requestsapprovalrequestspending',
  requestsapprovalrequestsapproved = 'requestsapprovalrequestsapproved',
  requestsapprovalrequestsrejected = 'requestsapprovalrequestsrejected',
  requestspending = 'requestspending',
  requestsapproved = 'requestsapproved',
  requestsrejected = 'requestsrejected',
}
