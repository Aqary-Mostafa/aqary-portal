import {
  type MRT_RowData,
  type MRT_TableOptions,
  MRT_TableInstance,
} from 'material-react-table';
import { MRT_Localization_AR } from 'material-react-table/locales/ar';
import { MRT_Localization_EN } from 'material-react-table/locales/en';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';

import './styles.scss';

export interface MRTOptionsProps<TData extends MRT_RowData> {
  page?: string;
  pageSize?: string;
  bulks?: (table: MRT_TableInstance<TData>) => void;
  filters?: (table: MRT_TableInstance<TData>) => ReactNode;
  inDialog?: boolean;
}

export const useDefaultMRTOptions = <TData extends MRT_RowData>(): Partial<
  MRT_TableOptions<TData>
> => {
  const { locale } = useParams();
  const localization =
    (locale === 'ar' && MRT_Localization_AR) || MRT_Localization_EN;

  return {
    muiTablePaperProps: () => ({
      className: 'mrt-paper',
    }),
    enableSorting: false,
    muiTableHeadRowProps: {
      className: 'mrt-header',
    },
    muiBottomToolbarProps: {
      className: 'mrt-footer',
    },
    enableStickyHeader: true,
    localization,
    enableTopToolbar: false,
  };
};

export const tableAsDialog = {
  onGlobalFilterChange: undefined,
  enablePagination: false,
  enableTopToolbar: false,
};
