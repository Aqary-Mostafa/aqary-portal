import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import './styles.scss';

import LogoImage from '../../../LogoImage';

import { AppDispatch, RootState } from '../../../../store';
import { toggleSidebar } from '../../../../store/slices/userSlice';

const CrmLogo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { drawer } = useSelector((state: RootState) => state.user);

  return (
    <>
      <Box
        className='crm-logo'
        sx={{
          flexDirection: drawer?.isOpen ? 'row' : 'column',
        }}
      >
        <Box component={Link} href='/dashboard/account/me' className='logo'>
          <LogoImage shortIcon={!drawer?.isOpen} />
        </Box>
        <Toolbar disableGutters>
          <IconButton
            className='action-btn'
            aria-label='open drawer'
            onClick={() => dispatch(toggleSidebar())}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>
      {drawer?.isOpen && (
        <Typography component='p' className='crm-subtitle'>
          Property Management Platform
        </Typography>
      )}
    </>
  );
};

export default CrmLogo;
