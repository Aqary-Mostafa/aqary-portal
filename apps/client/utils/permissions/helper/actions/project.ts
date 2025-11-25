import { PagesIdTypes } from "../enums";
import { PagesIdProject, PermissionsForProject } from "../enums/project";

export const _projectActions = (
  _isAccessed: (pg?: PagesIdTypes) => boolean
) => {
  return {
    [PermissionsForProject.projectloc]: {
      add: _isAccessed(PagesIdProject.localprojectsaddaroject),
      view: _isAccessed(PagesIdProject.localprojectsview),
      share: _isAccessed(PagesIdProject.localprojectsshare),
      delete: _isAccessed(PagesIdProject.localprojectsdelete),
      publish: _isAccessed(PagesIdProject.localprojectspublish),
      edit: _isAccessed(PagesIdProject.localprojectsedit),
      financialProviders: _isAccessed(
        PagesIdProject.localprojectsfinancialproviders
      ),
      gallery: _isAccessed(PagesIdProject.localprojectsgallery),
      promotions: _isAccessed(PagesIdProject.localprojectspromotions),
      plans: _isAccessed(PagesIdProject.localprojectsplans),
      properties: _isAccessed(PagesIdProject.localprojectsproperties),
      documents: _isAccessed(PagesIdProject.localprojectsdocuments),
      phases: _isAccessed(), // TODO: permission miss (both local, int)
      morePermissions: {
        promotions: {
          delete: _isAccessed(PagesIdProject.localprojectspromotionsdelete),
        },
      },
    },
    [PermissionsForProject.projectint]: {
      add: _isAccessed(), // TODO: permission miss (international id)
      view: _isAccessed(PagesIdProject.internationalprojectsview),
      share: _isAccessed(PagesIdProject.internationalprojectsshare),
      delete: _isAccessed(PagesIdProject.internationalprojectsdelete),
      publish: _isAccessed(PagesIdProject.internationalprojectspublish),
      edit: _isAccessed(PagesIdProject.internationalprojectsedit),
      financialProviders: _isAccessed(
        PagesIdProject.internationalprojectsfinancialproviders
      ),
      gallery: _isAccessed(PagesIdProject.internationalprojectsgallery),
      promotions: _isAccessed(PagesIdProject.internationalprojectspromotions),
      plans: _isAccessed(PagesIdProject.internationalprojectsplans),
      properties: _isAccessed(PagesIdProject.internationalprojectsproperties),
      documents: _isAccessed(PagesIdProject.internationalprojectsdocuments),
      phases: _isAccessed(), // TODO: permission miss (both local, int)
      morePermissions: {
        promotions: {
          delete: _isAccessed(
            PagesIdProject.internationalprojectspromotionsdelete
          ),
        },
      },
    },
    [PermissionsForProject.projectblocked]: {
      unblock: _isAccessed(PagesIdProject.blockedprojectsunblock),
    },
    [PermissionsForProject.projectfinancialprovider]: {
      add: _isAccessed(PagesIdProject.projectfinancialprovideradd),
      delete: _isAccessed(PagesIdProject.projectfinancialproviderdelete),
    },
    [PermissionsForProject.projectpromotions]: {
      add: _isAccessed(PagesIdProject.projectpromotionsadd),
      delete: _isAccessed(PagesIdProject.projectpromotionsdelete),
    },
    [PermissionsForProject.projectdeleted]: {
      restore: _isAccessed(PagesIdProject.deletedprojectsrestore),
    },
    [PermissionsForProject.projectmanagerequests]: {
      approve: _isAccessed(PagesIdProject.projectmanagerequestsapprove),
      reject: _isAccessed(PagesIdProject.projectmanagerequestsreject),
      manage: _isAccessed(PagesIdProject.projectmanagerequestsmanage),
    },
    [PermissionsForProject.projectsharedwithme]: {
      viewdocs: _isAccessed(PagesIdProject.projectsharedwithmeviewdocs),
      publish: _isAccessed(PagesIdProject.projectsharedwithmepublish),
      view: _isAccessed(PagesIdProject.projectsharedwithmeview),
    },
    [PermissionsForProject.sharedprojects]: {
      localshare: _isAccessed(PagesIdProject.sharedprojectslocalshare),
      unpublish: _isAccessed(PagesIdProject.sharedprojectsunpublish),
      unshare: _isAccessed(PagesIdProject.sharedprojectsunshare),
      view: _isAccessed(PagesIdProject.sharedprojectsview),
      internationalshare: _isAccessed(
        PagesIdProject.sharedprojectsinternationalshare
      ),
      internalshare: _isAccessed(PagesIdProject.sharedprojectsinternalshare),
    },
    [PermissionsForProject.publishedprojects]: {
      view: _isAccessed(PagesIdProject.publishedprojectsview),
      unpublish: _isAccessed(PagesIdProject.publishedprojectsunpublish),
      webportals: _isAccessed(PagesIdProject.publishedprojectswebportals),
      socialmedia: _isAccessed(PagesIdProject.publishedprojectssocialmedia),
    },
    [PermissionsForProject.promotionallist]: {
      edit: _isAccessed(PagesIdProject.promotionallistedit),
      delete: _isAccessed(PagesIdProject.promotionallistdelete),
    },
    [PermissionsForProject.localprojectsfinancialproviders]: {
      add: _isAccessed(PagesIdProject.localprojectsfinancialprovidersadd),
      delete: _isAccessed(PagesIdProject.localprojectsfinancialprovidersdelete),
    },
    [PermissionsForProject.internationalprojectsfinancialproviders]: {
      add: _isAccessed(
        PagesIdProject.internationalprojectsfinancialprovidersadd
      ),
      delete: _isAccessed(
        PagesIdProject.internationalprojectsfinancialprovidersdelete
      ),
    },
    [PermissionsForProject.localprojectsgallery]: {
      add: _isAccessed(PagesIdProject.localprojectsgalleryadd),
      delete: _isAccessed(PagesIdProject.localprojectsgallerydelete),
      import: _isAccessed(PagesIdProject.localprojectsgalleryimport),
      view: _isAccessed(PagesIdProject.localprojectsgalleryview),
    },
    [PermissionsForProject.internationalprojectsgallery]: {
      add: _isAccessed(PagesIdProject.internationalprojectsgalleryadd),
      delete: _isAccessed(PagesIdProject.internationalprojectsgallerydelete),
      import: _isAccessed(PagesIdProject.internationalprojectsgalleryimport),
      view: _isAccessed(PagesIdProject.internationalprojectsgalleryview),
    },
    [PermissionsForProject.localprojectsplans]: {
      add: _isAccessed(PagesIdProject.localprojectsplansadd),
      edit: _isAccessed(PagesIdProject.localprojectsplansedit),
      delete: _isAccessed(PagesIdProject.localprojectsplansdelete),
    },
    [PermissionsForProject.internationalprojectsplans]: {
      add: _isAccessed(PagesIdProject.internationalprojectsplansadd),
      edit: _isAccessed(PagesIdProject.internationalprojectsplansedit),
      delete: _isAccessed(PagesIdProject.internationalprojectsplansdelete),
    },
    [PermissionsForProject.localprojectsdocuments]: {
      add: _isAccessed(PagesIdProject.localprojectsdocumentsadd),
      edit: _isAccessed(PagesIdProject.localprojectsdocumentsedit),
      delete: _isAccessed(PagesIdProject.localprojectsdocumentsdelete),
      view: _isAccessed(PagesIdProject.localprojectsdocumentsview),
    },
    [PermissionsForProject.internationalprojectsdocuments]: {
      add: _isAccessed(PagesIdProject.internationalprojectsdocumentsadd),
      edit: _isAccessed(PagesIdProject.internationalprojectsdocumentsedit),
      delete: _isAccessed(PagesIdProject.internationalprojectsdocumentsdelete),
      view: _isAccessed(PagesIdProject.internationalprojectsdocumentsview),
    },
    [PermissionsForProject.localprojectsproperties]: {
      payment: _isAccessed(PagesIdProject.localprojectspropertiespayment),
      exclusive: _isAccessed(PagesIdProject.localprojectspropertiesexclusive),
      add: _isAccessed(PagesIdProject.localprojectspropertiesadd),
      plans: _isAccessed(PagesIdProject.localprojectspropertiesplans),
      documents: _isAccessed(PagesIdProject.localprojectspropertiesdocuments),
      unittype: _isAccessed(PagesIdProject.localprojectspropertiesunittype),
      gallery: _isAccessed(PagesIdProject.localprojectspropertiesgallery),
      units: _isAccessed(PagesIdProject.localprojectspropertiesunits),
    },
    [PermissionsForProject.localprojectspropertiespayment]: {
      edit: _isAccessed(PagesIdProject.localprojectspropertiespaymentedit),
      delete: _isAccessed(PagesIdProject.localprojectspropertiespaymentdelete),
      add: _isAccessed(PagesIdProject.localprojectspropertiespaymentadd),
    },
    [PermissionsForProject.localprojectspropertiesplans]: {
      view: _isAccessed(PagesIdProject.localprojectspropertiesplansview),
      add: _isAccessed(PagesIdProject.localprojectspropertiesplansadd),
      delete: _isAccessed(PagesIdProject.localprojectspropertiesplansdelete),
      edit: _isAccessed(PagesIdProject.localprojectspropertiesplansedit),
    },
    [PermissionsForProject.localprojectspropertiesdocuments]: {
      add: _isAccessed(PagesIdProject.localprojectspropertiesdocumentsadd),
      view: _isAccessed(PagesIdProject.localprojectspropertiesdocumentsview),
      edit: _isAccessed(PagesIdProject.localprojectspropertiesdocumentsedit),
      delete: _isAccessed(
        PagesIdProject.localprojectspropertiesdocumentsdelete
      ),
    },
    [PermissionsForProject.localprojectspropertiesunittype]: {
      add: _isAccessed(PagesIdProject.localprojectspropertiesunittypeadd),
      edit: _isAccessed(PagesIdProject.localprojectspropertiesunittypeedit),
      delete: _isAccessed(PagesIdProject.localprojectspropertiesunittypedelete),
    },
    [PermissionsForProject.localprojectspropertiesgallery]: {
      add: _isAccessed(PagesIdProject.localprojectspropertiesgalleryadd),
      edit: _isAccessed(PagesIdProject.localprojectspropertiesgalleryedit),
      delete: _isAccessed(PagesIdProject.localprojectspropertiesgallerydelete),
      import: _isAccessed(PagesIdProject.localprojectspropertiesgalleryimport),
    },
    [PermissionsForProject.localprojectspropertiesunits]: {
      add: _isAccessed(PagesIdProject.localprojectspropertiesunitsadd),
      documents: _isAccessed(
        PagesIdProject.localprojectspropertiesunitsdocuments
      ),
      gallery: _isAccessed(PagesIdProject.localprojectspropertiesunitsgallery),
      payment: _isAccessed(PagesIdProject.localprojectspropertiesunitspayment),
      plans: _isAccessed(PagesIdProject.localprojectspropertiesunitsplans),
    },
    [PermissionsForProject.localprojectspropertiesunitsdocuments]: {
      add: _isAccessed(PagesIdProject.localprojectspropertiesunitsdocumentsadd),
      view: _isAccessed(
        PagesIdProject.localprojectspropertiesunitsdocumentsview
      ),
      edit: _isAccessed(
        PagesIdProject.localprojectspropertiesunitsdocumentsedit
      ),
      delete: _isAccessed(
        PagesIdProject.localprojectspropertiesunitsdocumentsdelete
      ),
    },
    [PermissionsForProject.localprojectspropertiesunitsgallery]: {
      add: _isAccessed(PagesIdProject.localprojectspropertiesunitsgalleryadd),
      edit: _isAccessed(PagesIdProject.localprojectspropertiesunitsgalleryedit),
      delete: _isAccessed(
        PagesIdProject.localprojectspropertiesunitsgallerydelete
      ),
      import: _isAccessed(
        PagesIdProject.localprojectspropertiesunitsgalleryimport
      ),
    },
    [PermissionsForProject.localprojectspropertiesunitspayment]: {
      add: _isAccessed(PagesIdProject.localprojectspropertiesunitspaymentadd),
      edit: _isAccessed(PagesIdProject.localprojectspropertiesunitspaymentedit),
      delete: _isAccessed(
        PagesIdProject.localprojectspropertiesunitspaymentdelete
      ),
    },
    [PermissionsForProject.localprojectspropertiesunitsplans]: {
      add: _isAccessed(PagesIdProject.localprojectspropertiesunitsplansadd),
      edit: _isAccessed(PagesIdProject.localprojectspropertiesunitsplansedit),
      delete: _isAccessed(
        PagesIdProject.localprojectspropertiesunitsplansdelete
      ),
    },
    [PermissionsForProject.internationalprojectsproperties]: {
      payment: _isAccessed(
        PagesIdProject.internationalprojectspropertiespayment
      ),
      exclusive: _isAccessed(
        PagesIdProject.internationalprojectspropertiesexclusive
      ),
      add: _isAccessed(PagesIdProject.internationalprojectspropertiesadd),
      plans: _isAccessed(PagesIdProject.internationalprojectspropertiesplans),
      documents: _isAccessed(
        PagesIdProject.internationalprojectspropertiesdocuments
      ),
      unittype: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunittype
      ),
      gallery: _isAccessed(
        PagesIdProject.internationalprojectspropertiesgallery
      ),
      units: _isAccessed(PagesIdProject.internationalprojectspropertiesunits),
    },
    [PermissionsForProject.internationalprojectspropertiespayment]: {
      edit: _isAccessed(
        PagesIdProject.internationalprojectspropertiespaymentedit
      ),
      delete: _isAccessed(
        PagesIdProject.internationalprojectspropertiespaymentdelete
      ),
      add: _isAccessed(
        PagesIdProject.internationalprojectspropertiespaymentadd
      ),
    },
    [PermissionsForProject.internationalprojectspropertiesplans]: {
      view: _isAccessed(
        PagesIdProject.internationalprojectspropertiesplansview
      ),
      add: _isAccessed(PagesIdProject.internationalprojectspropertiesplansadd),
      delete: _isAccessed(
        PagesIdProject.internationalprojectspropertiesplansdelete
      ),
      edit: _isAccessed(
        PagesIdProject.internationalprojectspropertiesplansedit
      ),
    },
    [PermissionsForProject.internationalprojectspropertiesdocuments]: {
      add: _isAccessed(
        PagesIdProject.internationalprojectspropertiesdocumentsadd
      ),
      view: _isAccessed(
        PagesIdProject.internationalprojectspropertiesdocumentsview
      ),
      edit: _isAccessed(
        PagesIdProject.internationalprojectspropertiesdocumentsedit
      ),
      delete: _isAccessed(
        PagesIdProject.internationalprojectspropertiesdocumentsdelete
      ),
    },
    [PermissionsForProject.internationalprojectspropertiesunittype]: {
      add: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunittypeadd
      ),
      edit: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunittypeedit
      ),
      delete: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunittypedelete
      ),
    },
    [PermissionsForProject.internationalprojectspropertiesgallery]: {
      add: _isAccessed(
        PagesIdProject.internationalprojectspropertiesgalleryadd
      ),
      edit: _isAccessed(
        PagesIdProject.internationalprojectspropertiesgalleryedit
      ),
      delete: _isAccessed(
        PagesIdProject.internationalprojectspropertiesgallerydelete
      ),
      import: _isAccessed(
        PagesIdProject.internationalprojectspropertiesgalleryimport
      ),
    },
    [PermissionsForProject.internationalprojectspropertiesunits]: {
      add: _isAccessed(PagesIdProject.internationalprojectspropertiesunitsadd),
      documents: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsdocuments
      ),
      gallery: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsgallery
      ),
      payment: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitspayment
      ),
      plans: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsplans
      ),
    },
    [PermissionsForProject.internationalprojectspropertiesunitsdocuments]: {
      add: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsdocumentsadd
      ),
      view: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsdocumentsview
      ),
      edit: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsdocumentsedit
      ),
      delete: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsdocumentsdelete
      ),
    },
    [PermissionsForProject.internationalprojectspropertiesunitsgallery]: {
      add: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsgalleryadd
      ),
      edit: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsgalleryedit
      ),
      delete: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsgallerydelete
      ),
      import: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsgalleryimport
      ),
    },
    [PermissionsForProject.internationalprojectspropertiesunitspayment]: {
      add: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitspaymentadd
      ),
      edit: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitspaymentedit
      ),
      delete: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitspaymentdelete
      ),
    },
    [PermissionsForProject.internationalprojectspropertiesunitsplans]: {
      add: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsplansadd
      ),
      edit: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsplansedit
      ),
      delete: _isAccessed(
        PagesIdProject.internationalprojectspropertiesunitsplansdelete
      ),
    },
  };
};
