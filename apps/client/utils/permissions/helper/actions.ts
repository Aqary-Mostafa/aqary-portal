import { _projectActions } from './actions/project';
import { PagesIdTypes, PermissionsActions, PermissionsForType } from './enums';

const defaultWithoutPermetions = true; //! Show, if not have permition id only

export const permissionsActions = ({
  idList,
}: {
  idList: number[] | boolean;
}): {
  [key in PermissionsForType]: PermissionsActions;
} => {
  const _isAccessed = (pg?: PagesIdTypes) => {
    const isBool = typeof idList === 'boolean';
    const isArr = Array.isArray(idList);

    return (
      (isBool && idList) ||
      (isArr && pg ? idList?.includes(pg) : defaultWithoutPermetions)
    );
  };

  return {
    // ! ======== project ============
    ..._projectActions(_isAccessed),
  };
};

export const actionPermissionsExist = (permissions?: PermissionsActions) => {
  if (!permissions) return false;
  if (
    Object.keys(permissions).length > 0 &&
    Object.values(permissions).some(Boolean)
  ) {
    return true;
  } else {
    return false;
  }
};
