'use client';

import ColumnFilters from '@/components/column-filters';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { useDefaultMRTOptions } from '@/utils/MRT-configs';
import PageHeader from '@repo/ui/page-header';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import { useMemo } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { PiExport } from 'react-icons/pi';
import ListingDetails from '../components/listing-details';
import StatsSummary from '../components/stats-summary';
import CompletionStatus from '../components/completion-status';
import AuditDates from '../components/audit-dates';
import { useDrawerRoot } from '../components/drawer-root';
import DetailedReport from './view/detailed-report';
import DetailedReportDrawer from './view/detailed-report';

const ListingInsightsContainer = () => {
  const { openDrawer, DrawerRoot, closeDrawer } = useDrawerRoot();

  const columns = useMemo<MRT_ColumnDef<never>[]>(
    () => [
      {
        accessorKey: 'Property Details',
        header: 'Property Details',
        Cell: () => (
          <ListingDetails
            data={{
              imageUrl:
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              title: 'Apartment',
              verified: true,
              price: 900000,
              refNumber: 'AQR-123456',
              location: 'New York, USA',
              beds: 3,
              baths: 2,
              area: 1500,
            }}
          />
        ),
      },
      {
        accessorKey: 'Performance',
        header: 'Performance',
        Cell: () => (
          <StatsSummary
            data={{
              impressions: 6521,
              clicks: 574,
              leads: 283,
            }}
            actions={{
              onReportClick: () =>
                openDrawer({
                  content: <DetailedReportDrawer />,
                }),
            }}
          />
        ),
      },
      {
        accessorKey: 'Qty Score',
        header: 'Qty Score',
        Cell: () => (
          <CompletionStatus
            data={{
              items: [
                { label: '7/8 Image' },
                { label: 'Floor Plan Assigned' },
                { label: '222\\444 Character' },
                { label: 'Agent Profile' },
              ],
              completionPercentage: 60,
            }}
          />
        ),
      },
      {
        accessorKey: 'Date & Time',
        header: 'Date & Time',
        Cell: () => (
          <AuditDates
            data={{
              createdAt: new Date('Sun Mar 10 2024 03:30:00 GMT-0400'),
              updatedAt: new Date('Sun Mar 10 2024 03:30:00 GMT-0400'),
            }}
          />
        ),
      },
    ],
    [openDrawer],
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
      <PageHeader
        pageHeader='Listing Insights'
        breadcrumbs={[
          { label: 'Pages', link: '#' },
          { label: 'Manage Listing', link: '#' },
        ]}
      />

      <SectionLayout>
        <>
          <ColumnFilters
            filters={[
              {
                key: 'search',
                type: 'search',
                placeholder: 'Search',
              },
              {
                key: 'category',
                type: 'select',
                label: 'Category',
                options: [],
                value: '',
              },
              {
                key: 'unit-type',
                type: 'select',
                label: 'Unit Type',
                options: [],
                value: '',
              },
              {
                key: 'users',
                type: 'select',
                label: 'Users',
                options: [],
                value: '',
              },
              {
                key: 'subscription',
                type: 'select',
                label: 'Subscription',
                options: [],
                value: '',
              },
            ]}
            actions={[
              {
                key: 'sort',
                label: 'Sort',
                icon: <BiSortAlt2 />,
              },
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
      {DrawerRoot}
    </>
  );
};

export default ListingInsightsContainer;
