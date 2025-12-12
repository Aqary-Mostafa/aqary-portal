import ColumnFilters from '@/components/column-filters';
import { useDefaultMRTOptions } from '@/utils/MRT-configs';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { useMemo } from 'react';
import { PiExport } from 'react-icons/pi';

const UsersTableView = () => {
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
  );
};

export default UsersTableView;
