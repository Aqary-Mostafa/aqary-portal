import { ReactNode } from 'react';

export type FilterOption = {
  label: string;
  value: string | number;
};

export type FilterConfig = {
  key: string;
  type?: 'select' | 'search';
  label?: string;
  placeholder?: string;
  options?: FilterOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
};

export type ActionConfig = {
  key: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon: ReactNode;
};
