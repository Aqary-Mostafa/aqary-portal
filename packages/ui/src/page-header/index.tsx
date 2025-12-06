'use client';

import { Box, Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';

import './styles.scss';

export interface PageHeaderProps {
  breadcrumbs?: ({ label: string; link: string } | undefined)[];
  pageHeader?: string;
}

const PageHeader = ({ pageHeader, breadcrumbs }: PageHeaderProps) => {
  return (
    <Box className='crm-page-header'>
      <Box className='page'>
        <Breadcrumbs aria-label='breadcrumb' className='breadcrumb'>
          {breadcrumbs &&
            breadcrumbs.map((x, idx) => {
              const isLast = breadcrumbs?.length - 1 === idx;

              if (!x) return;

              if (isLast) return <Typography key={idx}>{x?.label}</Typography>;

              return (
                x && (
                  <Link color='inherit' href={x?.link} key={idx}>
                    {x?.label}
                  </Link>
                )
              );
            })}
        </Breadcrumbs>
        {pageHeader && (
          <Typography component='h3' className='header'>
            {pageHeader}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default PageHeader;
