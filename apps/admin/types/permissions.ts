export interface PermissionObj {
  id: number;
  button_id?: number | undefined;
  permission_id?: number | undefined;
  secondary_id?: number | undefined;
  tertiary_id?: number | undefined;
  quaternary_id?: number | undefined;
}
export interface PermissionType {
  id: number;
  label: string;
  sub_label: string;
  indicator: number;
  permission_id?: number;
  sub_section_button_id?: number;
  secondary_id?: number | undefined;
  tertiary_id?: number | undefined;
  quaternary_id?: number | undefined;
  permissions?: PermissionType[] | null;
  secondary_permission?: PermissionType[] | null;
  tertiary_permission?: PermissionType[] | null;
  quaternary_permission?: PermissionType[] | null;
  quinary_permission?: PermissionType[] | null;
}
