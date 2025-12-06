'use server';

import { cookies } from 'next/headers';
import { cache } from 'react';

import { getUserData } from '../api/user';
import { consoleLog } from '../utils/console-log';

export const verifySession = cache(async () => {
  const session = (await cookies()).get('aqaryUser')?.value;
  const userData = session ? JSON.parse((session as string) || '') : '';

  if (!session) {
    return { isAuth: false, aqaryUser: null };
  }

  return { isAuth: true, aqaryUser: userData };
});

export const getUser = cache(async (): Promise<UserTypes | null> => {
  const session = await getUserData();
  if (!session) return null;

  try {
    const user = session?.data;

    return user;
  } catch (error) {
    consoleLog('Failed to fetch user');
    return null;
  }
});

export interface UserTypes {
  user_id: number;
  first_name: string;
  last_name: string;
  token: string;
  email: string;
  username: string;
  profile_picture: string;
  country_code: number;
  country_id: number; //! not comes in api just imagen
  phone_number: string;
  whatsapp_number: string;
  have_company: boolean;
  is_company_verified: boolean;
  user_types_id: number;
  section_permissions: unknown;
  active_company: {
    logo: string;
    name: string;
    website_url: string;
    id: number;
  };
  status: {
    id: number;
    label: string;
  };
  is_verified: boolean;
  show_hide_details: boolean;
  is_email_verified: boolean;
  is_phone_verified: boolean;
  full_name: string;
  profile_image_url: string;
  secondary_number: string;
  cover_image_url: string;
  about: string;
  gender: string;
  ref_no: string;
  experience_since: string;
  full_address: string;
  associated_companies: {
    company_id: number;
    company_name: string;
    is_verified: boolean;
    role_id: number;
    role_name: string;
    logo: string;
    name: string;
    id: number;
  }[];
  user_type: {
    id: number;
    label: string;
    entity_type_id: number;
  };
  user_role: unknown;
  nationality: unknown;
  language: unknown;
  country: unknown;
  all_permissions: number[];
}
