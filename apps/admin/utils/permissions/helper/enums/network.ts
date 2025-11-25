// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdNetworks {
  network = 36,

  networkfindconnections = 569,
  networkfindconnectionsrequest = 3227,
  networkfindconnectionscancel = 3228,

  networkconnectionsrequestoutgoing = 570,
  networkconnectionsrequestoutgoingrequest = 3229,

  networkconnectionsrequestincoming = 570,
  networkconnectionsrequestincomingrequest = 3229,

  networkconnectionsmyconnections = 571,

  networkconnectionsnetworktimeline = 572,
}

export enum PermissionsForNetworks {
  networkfindconnections = 'networkfindconnections',
  networkconnectionsrequestoutgoing = 'networkconnectionsrequestoutgoing',
  networkconnectionsrequestincoming = 'networkconnectionsrequestincoming',
}
