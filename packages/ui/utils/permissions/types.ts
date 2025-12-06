import { UserTypes } from '../dal';

export type UserDataTypes = {
  isSuperAdmin: boolean;
  data: UserTypes | undefined;
  Message?: string;
  error?: string;
};
