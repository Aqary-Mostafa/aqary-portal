import { UserTypeID } from "@/constants";
import { getUserData } from "@/api/user";
import { permissionsActions } from "./helper/actions";
import { PermissionsForType } from "./helper/enums";
import { UserDataTypes } from "./types";

//! xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//! xxxxxxxxx====> to see all sections only <====xxxxxxxxxxxxxxxxxxxxxxxxx
//! xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const _superAdmin = process?.env?.NEXT_PUBLIC_SUPER_ADMIN === "true"; //!x
//! xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//! xxxxxxxxxxxxxx====> Dangrous area <====xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//! xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//? is page allowed or list of allowed pages
const pageAllowed = async ({ page }: { page?: number }) => {
  // * super admin our side
  if (_superAdmin) return true;

  const authTabs = await getUserData();
  if (!authTabs?.data && authTabs?.Message !== "success") return [];

  // const idList = testPermetionsAsIds;
  const idList = authTabs?.data?.all_permissions;

  // * super admin backend side
  if (idList?.[0] === 0) return true;

  if (page !== undefined && page !== null)
    return idList?.includes(page) ?? false;
  else {
    if (!idList) return [];
    else return idList;
  }
};

//? pages actions
const actionsPermissions = async ({ pg }: { pg: PermissionsForType }) => {
  const idList = await pageAllowed({});

  return permissionsActions?.({ idList })?.[pg];
};

//? is super admin
const userData = async () => {
  const user = await getUserData();

  const isSuperAdmin = user?.data?.user_type?.id === UserTypeID.superAdmin;

  return {
    isSuperAdmin: isSuperAdmin,
    ...user,
  } as UserDataTypes;
};

export const permissions = { pageAllowed, actionsPermissions, userData };
