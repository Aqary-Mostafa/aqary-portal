import { Box, Chip, GridLegacy, Skeleton } from '@mui/material';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';
import Image from 'next/image';
import React, { useMemo } from 'react';

import FieldThumbnail from '@/components/FieldThumbnail';

import { isValidUrl } from '@/utils/helpers';
import { htmlSanitize } from '@/utils/html-sanitize';
import { useDefaultMRTOptions } from '@/utils/use-default-MRT-options';

type CustomType =
  | 'chip'
  | 'description'
  | 'image'
  | 'table'
  | 'icon'
  | 'html'
  | 'images';

export interface ViewSection {
  label?: string;
  custom?: CustomType;
  data?: (
    | {
        label: string;
        custom?: CustomType;
        value?: string | string[] | React.ReactNode;
        hideWhenNull?: boolean;
      }
    | string
    | undefined
  )[];
  tableheader?: unknown;
  tablebody?: unknown;
}

export interface ViewSections {
  [key: string]: ViewSection | undefined;
}

const ViewDialog = ({ data }: { data?: ViewSections }) => {
  if (!data)
    return (
      <GridLegacy container spacing={2}>
        <GridLegacy item xs={3}>
          <Skeleton variant='text' width='60%' height={30} />
          <Skeleton variant='text' width='80%' height={30} />
        </GridLegacy>
        <GridLegacy item xs={3}>
          <Skeleton variant='text' width='60%' height={30} />
          <Skeleton variant='text' width='80%' height={30} />
        </GridLegacy>
        <GridLegacy item xs={3}>
          <Skeleton variant='text' width='60%' height={30} />
          <Skeleton variant='text' width='80%' height={30} />
        </GridLegacy>

        <GridLegacy item xs={3}>
          <Skeleton variant='text' width='60%' height={30} />
          <Skeleton variant='text' width='80%' height={30} />
        </GridLegacy>
        <GridLegacy item xs={3}>
          <Skeleton variant='text' width='60%' height={30} />
          <Skeleton variant='text' width='80%' height={30} />
        </GridLegacy>
        <GridLegacy item xs={3}>
          <Skeleton variant='text' width='60%' height={30} />
          <Skeleton variant='text' width='80%' height={30} />
        </GridLegacy>
      </GridLegacy>
    );

  const sections = Object.keys(data);

  if (sections?.length === 0) return <>No data to show</>;

  const Section = ({
    section,
    custom,
  }: {
    section: ViewSection;
    custom?: ViewSection['custom'];
  }) => {
    const ReChip = (data: string[]) => (
      <Box className='chips'>
        {data?.map((x) => {
          return <Chip key={x} label={x} />;
        })}
      </Box>
    );

    const TableCustom = () => {
      const defaultMRTOptions = useDefaultMRTOptions({});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const columns: MRT_ColumnDef<any>[] = useMemo(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        () => (section?.tableheader as MRT_ColumnDef<any>[]) || [],
        [],
      );
      const table = useMaterialReactTable({
        ...defaultMRTOptions,
        columns,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: (section?.tablebody as any[]) || [],
        muiTableContainerProps: {
          sx: {
            maxHeight: 'clamp(350px, calc(100vh - 404px), 9999px)',
          },
        },
        enablePagination: false,
        enableTopToolbar: false,
        enableRowActions: false,
      });

      return <MaterialReactTable table={table} />;
    };

    return (
      <GridLegacy container>
        <GridLegacy item xs={12} className='section-head'>
          {section?.label}
        </GridLegacy>
        {/* If chip ====!!==== */}
        {custom === 'chip' && ReChip(section?.data as string[])}
        {/* If description ====!!==== */}
        {custom === 'html' &&
          section?.data?.map((x) => {
            const item = x as {
              label: string;
              value?: string;
            };

            return (
              <GridLegacy key={item?.label} item xs={12} className='item'>
                <Box className='label'>{item?.label}:</Box>
                <Box className='value'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: htmlSanitize({ userHtml: item?.value || '' }),
                    }}
                  />
                </Box>
              </GridLegacy>
            );
          })}
        {custom === 'description' &&
          section?.data?.map((x) => {
            const item = x as {
              label: string;
              value?: string;
            };

            return (
              <GridLegacy key={item?.label} item xs={12} className='item'>
                <Box className='label'>{item?.label}:</Box>
                <Box className='value'>{item?.value ?? '_'}</Box>
              </GridLegacy>
            );
          })}
        {/* If table ====!!==== */}
        {custom === 'table' && <TableCustom />}
        {/* If normal ====!!==== */}
        {!custom && (
          <>
            {section?.data?.filter(Boolean)?.map((x) => {
              const item = x as {
                label: string;
                value?: string;
                custom?: CustomType;
                hideWhenNull?: string;
              };

              if (item.custom === 'chip')
                return (
                  <GridLegacy key={item?.label} item xs={12} className='item'>
                    <Box className='label'>{item?.label}:</Box>
                    <Box className='value'>
                      {ReChip(item.value as unknown as string[])}
                    </Box>
                  </GridLegacy>
                );

              if (item.custom === 'image')
                return (
                  <GridLegacy
                    key={item.value}
                    className='item'
                    item
                    lg={3.5}
                    md={6}
                    xs={12}
                  >
                    <Box className='label'>{item?.label}:</Box>
                    <Box className='value'>
                      <FieldThumbnail data={item?.value} />
                    </Box>
                  </GridLegacy>
                );

              if (item.custom === 'images')
                return (
                  <>
                    <GridLegacy className='item' item xs={12}>
                      <Box className='label'>{item?.label}:</Box>
                    </GridLegacy>
                    {(item?.value as unknown as string[])?.map((x, idx) => (
                      <GridLegacy
                        key={idx}
                        className='item'
                        item
                        xs={12}
                        sm={3}
                        md={2}
                      >
                        <FieldThumbnail data={x} />
                      </GridLegacy>
                    ))}
                    <GridLegacy className='item' item xs={12} />
                  </>
                );

              if (item.custom === 'icon')
                if (item?.value && isValidUrl(item?.value))
                  return (
                    <GridLegacy
                      key={item.value}
                      className='item icon'
                      item
                      lg={3.5}
                      md={6}
                      xs={12}
                    >
                      <Box className='label'>{item?.label}:</Box>
                      <Box className='value'>
                        <Image src={item?.value} alt={item?.label} fill />
                      </Box>
                    </GridLegacy>
                  );
              // else return '_';

              if (item?.hideWhenNull && !item?.value) return;

              return (
                <GridLegacy
                  key={item?.label}
                  item
                  lg={section?.data?.length === 2 ? 5.5 : 3.5}
                  md={6}
                  xs={12}
                  className='item'
                >
                  <Box className='label'>{item?.label}:</Box>
                  <Box className='value'>{item?.value || '_'}</Box>
                </GridLegacy>
              );
            })}
          </>
        )}
      </GridLegacy>
    );
  };

  return (
    <Box className='sections'>
      {sections?.map((x) => {
        if (data[x])
          return (
            <Section
              key={data[x].label}
              custom={data[x]?.custom}
              section={data[x]}
            />
          );
      })}
    </Box>
  );
};

export default ViewDialog;
