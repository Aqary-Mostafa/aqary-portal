'use client';
import { Box, useMediaQuery } from '@mui/material';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';

import './layout.styles.scss';

import Drawer from './Drawer';
import Loading from '@/components/Loading';
import Navbar from './Navbar';
import CrmPageHeader from '@/components/CrmPageHeader';

import { AppDispatch, RootState } from '@/store';
import { setUserPermissions } from '@/store/slices/userSlice';

import { V2_DEMO } from '@/constants';
import { permissions } from '@/utils/permissions';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { locale } = useParams();
  const { drawer, theme } = useSelector((state: RootState) => state.user);
  const max900 = useMediaQuery('(max-width:900px)');

  const { data, isLoading } = useSWR(
    'permissions.tabs',
    () => permissions.pageAllowed({}),
    {
      refreshInterval: 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  useEffect(() => {
    dispatch(setUserPermissions(data));
  }, [data, dispatch]);

  if (isLoading) return <Loading />;

  const isDarkClass = theme === 'dark' ? 'dashboard-layout--dark' : '';
  const isActiveDrawerClass = drawer?.isOpen
    ? 'dashboard-layout--drawer-active'
    : '';
  const dirClass = locale === 'ar' ? 'dashboard-layout--rtl' : '';

  return (
    <>
      {!V2_DEMO() && <Navbar />}
      <Box
        className={`dashboard-layout ${isDarkClass} ${isActiveDrawerClass} ${dirClass} ${
          V2_DEMO() ? 'v2' : ''
        }`}
      >
        <Drawer isLessThan900={max900} />
        <Box
          component='main'
          className='dashboard-layout__main'
          sx={{
            minHeight: !V2_DEMO()
              ? (theme) =>
                  `calc(100vh - (${theme.mixins.toolbar.minHeight}px + 8px + 20px ))`
              : '100vh',
          }}
        >
          <CrmPageHeader />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
