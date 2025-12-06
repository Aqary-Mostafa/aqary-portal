export const IS_PROD = process.env.NODE_ENV === 'production';
export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_DEV_ENV = process.env.NEXT_PUBLIC_ENV === 'dev';

export const SHOW_CONSOLE_LOG = IS_DEV
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' || false;

export const IS_CRM = process.env.NEXT_PUBLIC_TYPE === 'crm';
export const IS_DASHBOARD = process.env.NEXT_PUBLIC_TYPE === 'dashboard';
