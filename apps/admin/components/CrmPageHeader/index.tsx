'use client';

import { Box, Breadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

import Notification from '@/modules/layout/Navbar/navbar-actions/notification';
import ProfileSetting from '@/modules/layout/Navbar/navbar-actions/profile-setting';

import { RootState } from '@/store';

import { V2_DEMO } from '@/constants';

const CrmPageHeader = () => {
  const { pageHeader, breadcrumbs } = useSelector(
    (state: RootState) => state.crmheader,
  );

  if (!V2_DEMO()) return;

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
      <Box className='user'>
        <Notification />
        <ProfileSetting />
      </Box>
    </Box>
  );
};

export default CrmPageHeader;
