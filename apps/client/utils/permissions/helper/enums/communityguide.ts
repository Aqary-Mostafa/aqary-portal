// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdCommunityGuide {
  communityguideadd = 316,

  communityguidemanage = 317,
  communityguidemanageview = 3,
  communityguidemanageedit = 3,
  communityguidemanagedelete = 3,
  communityguidemanagegallery = 316,
  communityguidemanagegalleryadd = 316,
  communityguidemanagegallerydelete = 316,

  communityguidedeleted = 326,
  communityGuideDeletedRestore = 326,
}

export enum PermissionsForCommunityGuide {
  communityguideadd = 'communityguideadd',
  communityguidemanage = 'communityguidemanage',
  communityguidemanagegallery = 'communityguidemanagegallery',
  communityguidedeleted = 'communityguidedeleted',
}
