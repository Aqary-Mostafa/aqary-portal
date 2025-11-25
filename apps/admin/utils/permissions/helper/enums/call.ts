// ! Backend say it will be same forever, but i know it will change in the future.
// ! order is very important for debugging

export enum PagesIdCalls {
  calls = 33,

  callsdeleted = 556,
  callsdeletedbulkrestore = 3131,
  callsdeletedbulkdelete = 3132,
  callsdeletedrestore = 3130,
  callsdeleteddelete = 3129,

  callsmanage = 555,
  callsmanageview = 3121,
  callsmanageedit = 3122,
  callsmanagedelete = 3123,
  callsmanagetimeline = 3126,
  callsmanagenote = 3124,
  callsmanagelog = 3119,
  callsmanageschedule = 3120,
  callsmanagetag = 3127,
  callsmanagebulkaddtag = 0,
  callsmanagebulkdeletetag = 0,
  callsmanagebulkdelete = 0,
}

export enum PermissionsForCalls {
  callsdeleted = 'callsdeleted',
  callsmanage = 'callsmanage',
}
