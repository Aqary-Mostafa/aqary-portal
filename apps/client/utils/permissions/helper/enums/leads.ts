// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdLeads {
  leads = 34,

  addlead = 559,

  editlead = 3135,

  managelead = 560,
  manageleadbulkhandler = 3145,
  manageleadbulkaddtag = 3143,
  manageleadbulkdeletetag = 3144,
  manageleadbulkreminder = 3141,
  manageleadbulkremove = 3140,
  manageleaddelete = 3137,
  manageleadhandler = 3127,
  manageleadtag = 3139,
  manageleadreminder = 3128,
  manageleadconvert = 3132,
  manageleadsimilarity = 3133,
  manageleadattachment = 3131,
  manageleadattachmentdownload = 3153,
  manageleadattachmentdelete = 3154,
  manageleadattachmentadd = 3151,
  manageleadnote = 3155,
  manageleadnoteadd = 3156,
  manageleadnotedelete = 3158,
  manageleadtimeline = 3129,
  manageleadinterestelist = 3126,
  manageleadinterestelistdelete = 3161,
  manageleadqadetails = 3134,

  deletedlead = 561,
  deletedleaddelete = 3147,
  deletedleadrestore = 3148,
  deletedleadbulkrestore = 3149,
  deletedleadbulkdelete = 3150,

  timelinelead = 0,
}

export enum PermissionsForLeads {
  managelead = 'managelead',
  deletedlead = 'deletedlead',
  manageleadnote = 'manageleadnote',
  manageleadinterestelist = 'manageleadinterestelist',
  manageleadattachment = 'manageleadattachment',
}
