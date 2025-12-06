'use client';
import { Toolbar } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import CrmLogo from './CrmLogo';
import DrawerList from './List';
import LogoImage from '@/components/LogoImage';

import { AppDispatch, RootState } from '@/store';
import { toggleSidebar } from '@/store/slices/userSlice';

import { V2_DEMO } from '@/constants';

const Drawer = ({ isLessThan900 }: { isLessThan900?: boolean }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { drawer } = useSelector((state: RootState) => state.user);

  const theme = useTheme();

  if (isLessThan900) {
    return (
      <MuiDrawer
        anchor={theme?.direction === 'rtl' ? 'right' : 'left'}
        open={drawer?.isOpen}
        onClose={() => dispatch(toggleSidebar())}
        sx={{
          zIndex: '1302',
        }}
        className='sm-drawer'
      >
        <Link href='/dashboard' className='logo'>
          <LogoImage />
        </Link>
        <DrawerList />
        <Toolbar />
      </MuiDrawer>
    );
  } else {
    return (
      <Container
        anchor={theme?.direction === 'rtl' ? 'right' : 'left'}
        variant='permanent'
        open={drawer?.isOpen}
        sx={{
          '& .MuiPaper-root': {
            zIndex: 1,
          },
        }}
      >
        <CrmLogo />
        {!V2_DEMO() && <Toolbar />}
        <DrawerList />
        <Toolbar />
      </Container>
    );
  }
};

export default Drawer;

const openedMixin = (): CSSObject => ({
  width: '260px',
  transition: 'all 350ms',
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: 'all 350ms',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Container = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: '260px',
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(),
    '& .MuiDrawer-paper': openedMixin(),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),

  '& .MuiPaper-root': {
    padding: open ? '0 16px' : '0',
    border: 'unset',
    marginTop: '20px',
    zIndex: 1199,
  },
}));
