'use client';
import { Button } from '@mui/material';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { type JSX, useMemo, useState } from 'react';

import useConfirmationDialog from '@/hooks/useConfirmDialog';

import { useCrmPageHeader } from '@/components/CrmPageHeader/helper';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';

import TableActions from '@/components/TableActions';
import ViewLicense from './view';

import { deleteLicense } from '../api/legal';
import { getDefaultDeleteDialog } from '@/utils/get-default-dialog';
import { useDefaultMRTOptions } from '@/utils/use-default-MRT-options';

import { TableActionsPrimary } from '@/types/shared';
import { LicensesTypes } from '@/types/legal';
import { AlertBar, AlertBarProps } from '@/components/AlertBar';

interface AmenitiesTypes {
  _page: string;
  _pageSize: string;
  data: LicensesTypes[];
  total: number;
}

/**
 *
 * @component
 * @param {_token} props._token - User token.
 * @param {_page} props._page - Current table page.
 * @param {_pageSize} props._pageSize - Controle row length in table.
 * @param {data} props.data - All Individual Contact data.
 * @returns {JSX.Element} The rendered Individual Contact page.
 *
 */
const LagelLicensesContainer = ({
  _page,
  _pageSize,
  total,
  data,
}: AmenitiesTypes): JSX.Element => {
  const [alertBarProps, setAlertBarProps] = useState<AlertBarProps>({
    message: '',
    severity: 'info',
  });
  const dialog = useConfirmationDialog();
  const router = useRouter();
  // ? utils
  const defaultMRTOptions = useDefaultMRTOptions<LicensesTypes>({
    page: _page,
    pageSize: _pageSize,
  });

  const columns = useMemo<MRT_ColumnDef<LicensesTypes>[]>(
    () => [
      {
        accessorKey: 'license_name',
        header: 'License Name',
        Cell: ({ cell }) => cell.getValue<string>() || '_',
      },
      {
        accessorKey: 'country_id.label',
        header: 'Country',
        Cell: ({ cell }) => cell.getValue<string>() || '_',
      },
      {
        accessorKey: 'state_id.label',
        header: 'State',
        Cell: ({ cell }) => cell.getValue<string>() || '_',
      },
      {
        accessorKey: 'company_industry_id.label',
        header: 'Company Industry',
        Cell: ({ cell }) => cell.getValue<string>() || '_',
      },
      {
        accessorKey: 'company_type_id.label',
        header: 'Company Type',
        Cell: ({ cell }) => cell.getValue<string>() || '_',
      },
      {
        accessorKey: 'is_active',
        header: 'Mandatory License',
        Cell: ({ cell }) => {
          const val = cell.getValue<boolean>();

          return `${val}`;
        },
      },
    ],
    [],
  );

  const handleDelete = (id: number) => {
    deleteLicense({ id: id?.toString() }).then((res) => {
      if (res?.Message === 'success') {
        setAlertBarProps({
          message: `Deleted successfully`,
          severity: 'success',
        });
        router.refresh();
      } else
        setAlertBarProps({
          message: `Failed to Delete`,
          severity: 'error',
        });
    });
  };

  // ? hooks
  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    columns,
    data,
    muiTableContainerProps: {
      sx: {
        maxHeight: 'clamp(350px, calc(100vh - 376px), 9999px)',
      },
    },
    rowCount: total,
    renderRowActions: ({ row }) => {
      return (
        <TableActions
          actions={{
            primary: {
              [TableActionsPrimary.view]: {
                action: () =>
                  dialog.openConfirmDialog({
                    title: 'View information',
                    content: <ViewLicense row={row} />,
                    dialogPaperProps: {
                      className: 'view-information-dialog',
                    },
                    hideCancelButton: true,
                    hideConfirmButton: true,
                  }),
              },
              [TableActionsPrimary.edit]: {
                link: `licenses/${row.original.id}/edit`,
              },
              [TableActionsPrimary.delete]: {
                action: () =>
                  dialog.openConfirmDialog({
                    ...getDefaultDeleteDialog,
                    onConfirm: () => handleDelete(row?.original?.id),
                  }),
              },
            },
          }}
        />
      );
    },
    renderTopToolbarCustomActions: () => (
      <Link href='licenses/create'>
        <Button variant='outlined'>create License</Button>
      </Link>
    ),
  });

  useCrmPageHeader({
    breadcrumbs: [
      {
        label: 'Legal Settings',
        link: '/dashboard/settings/legal/',
      },
      {
        label: 'Company License',
        link: '#',
      },
    ],
    pageHeader: 'Company License',
  });

  return (
    <>
      {/* Table section */}
      <SectionLayout
        header={{
          title: 'List of company License',
          link: '/dashboard/settings/legal/',
        }}
      >
        <MaterialReactTable table={table} />
      </SectionLayout>

      {/* Ready to render dialog */}
      {dialog.renderConfirmationDialog()}

      {/* Ready to render Alertbar */}
      <AlertBar
        onClose={() => setAlertBarProps({ message: '' })}
        {...alertBarProps}
      />
    </>
  );
};

export default LagelLicensesContainer;
