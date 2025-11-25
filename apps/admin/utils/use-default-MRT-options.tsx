import { Box } from '@mui/material';
import {
  type MRT_RowData,
  type MRT_TableOptions,
  MRT_ShowHideColumnsButton,
  MRT_TableInstance,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  MRT_ToggleGlobalFilterButton,
  MRT_TopToolbar,
} from 'material-react-table';
import { MRT_Localization_AR } from 'material-react-table/locales/ar';
import { MRT_Localization_EN } from 'material-react-table/locales/en';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import { SeacrhParams } from '@/constants/searchParams';

export interface MRTOptionsProps<TData extends MRT_RowData> {
  page?: string;
  pageSize?: string;
  bulks?: (table: MRT_TableInstance<TData>) => void;
  filters?: (table: MRT_TableInstance<TData>) => ReactNode;
  inDialog?: boolean;
}

export const useDefaultMRTOptions = <TData extends MRT_RowData>(
  props: MRTOptionsProps<TData>
): Partial<MRT_TableOptions<TData>> => {
  const { theme } = useSelector((state: RootState) => state.user);
  const [pagination, setPagination] = useState({
    pageIndex: parseInt(props?.page || '1') - 1,
    pageSize: parseInt(props?.pageSize || '5'),
  });
  const prevPageIndexRef = useRef(pagination.pageIndex);
  const prevPageSizeRef = useRef(pagination.pageSize);
  const [rowSelection, setRowSelection] = useState({});
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const urlParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const { locale } = useParams();
  const t = useTranslations('table');
  const localization =
    (locale === 'ar' && MRT_Localization_AR) || MRT_Localization_EN;

  useEffect(() => {
    const prevPageIndex = prevPageIndexRef.current;
    const currentPageIndex = pagination.pageIndex;
    const prevPageSize = prevPageSizeRef.current;
    const currentPageSize = pagination.pageSize;

    if (
      prevPageIndex !== currentPageIndex ||
      prevPageSize !== currentPageSize
    ) {
      const params = new URLSearchParams(searchParams);
      const currentPageParam = params.get(SeacrhParams.page);
      const currentPageSizeParam = params.get(SeacrhParams.pageSize);
      const newPageParam = (pagination.pageIndex + 1).toString();
      const newPageSizeParam = pagination.pageSize.toString();

      if (
        currentPageParam !== newPageParam ||
        currentPageSizeParam !== newPageSizeParam
      ) {
        params.set(SeacrhParams.page, newPageParam);
        params.set(SeacrhParams.pageSize, pagination.pageSize.toString());
        router.replace(pathname + '?' + params.toString());
        if (Object.keys(rowSelection).length > 0) {
          setRowSelection({});
        }
      }
    }

    prevPageIndexRef.current = currentPageIndex;
    prevPageSizeRef.current = currentPageSize;
  }, [pagination, pathname, router, searchParams, rowSelection]);

  const isDark = theme === 'dark';

  return {
    muiTablePaperProps: ({ table }) => ({
      className: 'muiTablePaper',
      elevation: 0,
      sx: {
        zIndex: table.getState().isFullScreen ? 1994 : undefined,
      },
    }),
    muiTopToolbarProps: {
      className: `table-top-toolbar ${isDark ? 'table-top-toolbar--dark' : ''}`,
    },
    muiTableHeadRowProps: {
      className: `table-head-row ${isDark ? 'table-head-row--dark' : ''}`,
    },
    muiBottomToolbarProps: {
      className: `table-bottom-toolbar ${
        isDark ? 'table-bottom-toolbar--dark' : ''
      }`,
    },
    muiTableBodyProps: {
      className: `table-body ${isDark ? 'table-body--dark' : ''}`,
    },
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    enableColumnFilterModes: false,
    enableColumnOrdering: true,
    enableColumnPinning: true,
    paginationDisplayMode: 'default',
    enableStickyHeader: true,
    localization,
    muiSearchTextFieldProps: {
      variant: 'outlined',
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 20, 50, 100],
    },
    enableRowActions: true,
    initialState: {
      columnPinning: {
        right: ['mrt-row-actions'],
        left: ['mrt-row-select'],
      },
      density: 'compact',
    },
    state: {
      pagination,
      rowSelection,
    },
    enableRowNumbers: true,
    manualPagination: true,
    displayColumnDefOptions: {
      'mrt-row-numbers': {
        Header: (
          <Box
            sx={{
              pt: 0.5,
            }}
          >
            {t('SN')}
          </Box>
        ),
      },
      'mrt-row-actions': {
        Header: (
          <Box
            sx={{
              pt: 0.5,
            }}
          >
            {t('Actions')}
          </Box>
        ),
      },
    },
    onGlobalFilterChange: (value) => {
      if (value && value.length > 0) urlParams.set(SeacrhParams.search, value);
      else urlParams.delete(SeacrhParams.search);
      router.push(pathname + '?' + urlParams.toString());
    },
    mrtTheme: (theme) => {
      const mode = theme.palette.mode;
      const isDark = mode === 'dark';

      return {
        baseBackgroundColor: isDark ? '#1A223F' : '#fff',
      };
    },
    renderToolbarInternalActions: ({ table }) => (
      <>
        {props?.bulks?.(table)}
        <MRT_ToggleGlobalFilterButton table={table} />
        <MRT_ToggleFiltersButton table={table} />
        <MRT_ShowHideColumnsButton table={table} />
        <MRT_ToggleDensePaddingButton table={table} />
        <MRT_ToggleFullScreenButton table={table} />
      </>
    ),
    renderTopToolbar: ({ table }) =>
      props?.filters ? (
        <>
          <MRT_TopToolbar table={table} />
          {props?.filters?.(table)}
        </>
      ) : undefined,
    ...(props?.inDialog ? tableAsDialog : {}),
  };
};

export const tableAsDialog = {
  onGlobalFilterChange: undefined,
  enablePagination: false,
  enableTopToolbar: false,
};
