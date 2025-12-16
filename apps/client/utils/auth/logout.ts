'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const signOut = async () => {
  const aqryCookies = await cookies();
  aqryCookies.delete('aqaryUser');
  redirect('/');
};

export const clearCookies = async () => {
  const aqryCookies = await cookies();
  try {
    aqryCookies.delete('aqaryUser');
    return true;
  } catch (error) {
    return false;
  }
};

export const handleLogout = async () => {
  await signOut();
};
