import ColumnFilters from '@/components/column-filters';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { TitleActionsEnums } from '@/components/SectionLayout/TitleActions';
import { useDefaultMRTOptions } from '@/utils/MRT-configs';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { Dispatch, SetStateAction, useMemo } from 'react';
import { PiExport } from 'react-icons/pi';

export interface UsersTableViewProps {
  setCurrent: Dispatch<SetStateAction<string>>;
}

const UsersTableView = ({ setCurrent }: UsersTableViewProps) => {
  const columns = useMemo<MRT_ColumnDef<never>[]>(
    () => [
      {
        accessorKey: 'Profile',
        header: 'Profile',
        Cell: ({ cell }) => cell.getValue<string>() || '_',
      },
      {
        accessorKey: 'Role',
        header: 'Role',
        Cell: ({ cell }) => cell.getValue<string>() || '_',
      },
      {
        accessorKey: 'Status',
        header: 'Status',
        Cell: ({ cell }) => cell.getValue<string>() || '_',
      },
    ],
    [],
  );

  const data = useMemo<never[]>(() => [{}] as never[], []);

  const defaultMRTOptions = useDefaultMRTOptions<never>();
  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    columns: columns,
    data: data,
    muiTableContainerProps: {
      sx: {
        maxHeight: 'clamp(350px, calc(100vh - 404px), 9999px)',
      },
    },
  });

  return (
    <SectionLayout
      header={{
        title: 'Company Users',
        actions: [
          {
            type: TitleActionsEnums.primary,
            action: () => setCurrent('edit'),
            props: {
              children: 'Create User',
            },
          },
        ],
      }}
    >
      <>
        <ColumnFilters
          filters={[
            {
              key: 'search',
              type: 'search',
              placeholder: 'Search',
            },
            {
              key: 'role',
              type: 'select',
              label: 'Roles',
              options: [],
              value: '',
            },
          ]}
          actions={[
            {
              key: 'export',
              label: 'Export',
              icon: <PiExport />,
            },
          ]}
        />

        <MaterialReactTable table={table} />
      </>
    </SectionLayout>
  );
};

export default UsersTableView;
