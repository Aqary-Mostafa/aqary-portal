// export const SITE_CONFIG = {
//   title: 'Aqary International Group Dashboard',
//   description: 'Manage your realestate from here',
//   url: 'https://dashboard.aqaryint.com/',
// };

import { INITIAL_LIST } from '@/constants/crm-drawer';
import { SHOW_CONSOLE_LOG } from '@/constants/env';

export enum DashboardTypeEnums {
  // crm = 'crm',
  portal = 'dashboard',
}

export interface ConfigTypes {
  title: string;
  description: string;
  url: string;
  drawer: (typeof INITIAL_LIST)[0][];
  logo: string;
  logo_ar: string;
  logo_white: string;
  logo_white_ar: string;
  letter_logo: string;
}

export const HIDE_DEBUG_ARY = [
  // 'getApiResponse'
];

export const CONFIGS: { [key in DashboardTypeEnums]: ConfigTypes } = {
  [DashboardTypeEnums.portal]: {
    title: 'Aqary International Group Portal',
    description: 'Manage your realestate from here',
    url: 'https://dashboard.aqaryint.com/',
    drawer: [...INITIAL_LIST],
    // drawer: INITIAL_LIST,
    // drawer: PORTAL_LIST,
    logo: '/logo.svg',
    logo_ar: '/logo-ar.png',
    logo_white: '/logo-ar-white.png',
    logo_white_ar: '/logo-ar-white.png',
    letter_logo: '/letter-logo.svg',
  },
  // [DashboardTypeEnums.crm]: {
  //   title: 'Aqary International Group Crm',
  //   description: 'Manage your realestate from here',
  //   url: 'https://dashboard.aqaryint.com/',
  //   drawer: INITIAL_LIST,
  //   logo: '/logo.svg',
  //   logo_ar: '/logo-ar.png',
  //   logo_white: '/logo-ar-white.png',
  //   logo_white_ar: '/logo-ar-white.png',
  //   letter_logo: '/a-logo.png',
  // },
};

// export const isCRM = process.env.NEXT_PUBLIC_TYPE === DashboardTypeEnums.crm;
export const isPortal =
  process.env.NEXT_PUBLIC_TYPE === DashboardTypeEnums.portal;
export const dashboardType = process.env.NEXT_PUBLIC_TYPE;

export const SITE_CONFIG =
  CONFIGS[
    (process.env.NEXT_PUBLIC_TYPE as DashboardTypeEnums) ||
      DashboardTypeEnums.portal
  ];

export function V2_DEMO() {
  'use client';
  const switchValue =
    (localStorage.getItem('switchToV2') || 'false') === 'true';

  return SHOW_CONSOLE_LOG && switchValue;
}
