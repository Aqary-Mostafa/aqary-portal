// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdContacts {
  contact = 35,

  contactadd = 563,

  contactmanage = 564,
  contactmanagebulkhandler = 0,
  contactmanagebulkaddtag = 0,
  contactmanagebulkdeletetag = 0,
  contactmanagebulkreminder = 0,
  contactmanagebulkdelete = 0,
  contactmanagebulktag = 0,
  contactmanagebulkexport = 0,
  contactmanageedit = 0,
  contactmanagedelete = 0,
  contactmanagehandler = 0,
  contactmanagetag = 0,
  contactmanagereminder = 0,
  contactmanagetimeline = 0,
  contactmanagesimilarity = 0,
  contactmanagelisting = 0,
  contactmanageinterestelist = 0,

  contactdeleted = 566,
  contactdeletedrestore = 0,
  contactdeletedbulkrestore = 0,
  contactdeletedbulkdelete = 0,

  contacttimeline = 0,
}

export enum PermissionsForContacts {
  contactdeleted = 'contactdeleted',
  contactmanage = 'contactmanage',
}
