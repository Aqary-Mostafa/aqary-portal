'use client';

import ColumnFilters from '@/components/column-filters';
import { SectionLayout } from '@/components/SectionLayout/SectionLayout';
import { useDefaultMRTOptions } from '@/utils/MRT-configs';
import PageHeader from '@repo/ui/page-header';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_PaginationState,
  useMaterialReactTable,
} from 'material-react-table';
import { useMemo, useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { PiExport } from 'react-icons/pi';
import ListingDetails from '../components/listing-details';
import StatsSummary from '../components/stats-summary';
import CompletionStatus from '../components/completion-status';
import AuditDates from '../components/audit-dates';
import { useDrawerRoot } from '../components/drawer-root';
import useSWR from 'swr';
import { insightsApi } from '../api/insights.api';
import { PropertyInsightType } from '../types/insights';

const ListingInsightsContainer = () => {
  const { DrawerRoot } = useDrawerRoot();
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = useMemo<MRT_ColumnDef<PropertyInsightType>[]>(
    () => [
      {
        accessorKey: 'Property Details',
        header: 'Property Details',
        Cell: ({ row }: { row: { original: PropertyInsightType } }) => {
          const {
            property_type: title,
            price,
            ref_no: ref,
            bedrooms,
            bathroom,
            plot_area: plotArea,
            state,
            subcommunity,
          } = row.original;

          return (
            <ListingDetails
              data={{
                imageUrl: undefined,
                title: title,
                verified: false,
                price: price,
                refNumber: ref,
                location: [subcommunity?.label, state?.label].join(', '),
                beds: bedrooms,
                baths: bathroom,
                area: plotArea,
              }}
            />
          );
        },
      },
      {
        accessorKey: 'Performance',
        header: 'Performance',
        Cell: ({ row }: { row: { original: PropertyInsightType } }) => {
          const {
            performance: { impressions, views, leads },
          } = row.original;

          return (
            <StatsSummary
              data={{
                impressions: impressions,
                clicks: views,
                leads: leads,
              }}
              // actions={{
              //   onReportClick: () =>
              //     openDrawer({
              //       content: <DetailedReportDrawer />,
              //     }),
              // }}
            />
          );
        },
      },
      {
        accessorKey: 'Qty Score',
        header: 'Qty Score',
        Cell: ({ row }: { row: { original: PropertyInsightType } }) => {
          if (!row?.original?.percentage) return '_';

          return (
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
          );
        },
      },
      {
        accessorKey: 'Date & Time',
        header: 'Date & Time',
        Cell: ({ row }: { row: { original: PropertyInsightType } }) => (
          <AuditDates
            data={{
              createdAt: row?.original?.created_at,
              updatedAt: row?.original?.updated_at,
            }}
          />
        ),
      },
    ],
    [],
  );

  const { data, error, isLoading } = useSWR(
    [
      'property-insights',
      {
        pagination,
      },
    ],
    async () =>
      insightsApi.getPropertyInsights({
        page: '1',
        pageSize: '10',
      }),
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
    },
  );

  const defaultMRTOptions = useDefaultMRTOptions<PropertyInsightType>();
  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    onPaginationChange: setPagination,
    columns: columns,
    data: data?.data || [],
    rowCount: data?.Total ?? 0,
    state: {
      pagination,
      isLoading,
      showAlertBanner: error,
    },
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
