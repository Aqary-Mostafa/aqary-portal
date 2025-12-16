import { Avatar, Box, Button, Popover, Typography } from '@mui/material';
import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { MdOutlineVerified } from 'react-icons/md';
import useSWR from 'swr';

import './profile-setting.styles.scss';

import { getGreeting } from '@/utils/helpers';
import { handleLogout } from '@/modules/layout/Navbar/helpers';
import { changeUserCompany, getUserData } from '@/api/user';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const ProfileSetting = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { drawer } = useSelector((state: RootState) => state.user);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const { data: user } = useSWR('getUserData', async () => await getUserData());

  return (
    <>
      <Button
        variant='outlined'
        className={`action-btn action-btn--setting ${drawer?.isOpen ? '' : 'drawer-open'}`}
        onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}
        fullWidth
      >
        <Avatar src={user?.data?.profile_image_url} />
        {drawer?.isOpen && (
          <Box className='content'>
            <span className='name'>
              {[user?.data?.first_name, user?.data?.last_name].join(' ')}
            </span>
            <span className='email'>{user?.data?.email}</span>
          </Box>
        )}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        className='navbar-popper'
      >
        <Box className='user-setting'>
          <Box className='user-setting__header'>
            <Box className='name'>
              <span> {getGreeting()},</span>
              {[user?.data?.first_name, user?.data?.last_name].join(' ')}
              <MdOutlineVerified color='#6290cb' />
            </Box>
            <Typography>
              {[user?.data?.first_name, user?.data?.last_name].join(' ')}
            </Typography>
          </Box>
          {user?.data?.associated_companies && (
            <Box className='companies'>
              <Box className='companies__title'>Companies</Box>
              {[
                user?.data?.active_company,
                ...(user?.data?.associated_companies || []),
              ]?.map((company) => (
                <Box
                  className={`companies__company ${
                    company?.id === user?.data?.active_company?.id
                      ? 'companies__company--active'
                      : ''
                  }`}
                  key={company?.id}
                  onClick={async () => {
                    const formData = new FormData();
                    formData.append('active_company', company?.id.toString());
                    await changeUserCompany({ formData }).then((res) => {
                      if (res?.Message === 'success')
                        window?.location?.replace('/dashboard');
                    });
                  }}
                >
                  <Avatar
                    src={company?.logo}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '4px',
                      '& img': {
                        objectFit: 'contain',
                      },
                    }}
                  />
                  {company?.name}
                </Box>
              ))}
            </Box>
          )}
          <Button className='action' onClick={() => handleLogout()}>
            <IoLogOutOutline />
            Logout
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default ProfileSetting;
