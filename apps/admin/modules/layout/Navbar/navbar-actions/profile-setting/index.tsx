import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  Popover,
  Switch,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineVerified } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useSWR from 'swr';

import './profile-setting.styles.scss';

import { handleLogout } from '../../helpers';

import { RootState } from '@/store';
import { setColors, setTheme } from '@/store/slices/userSlice';

import { isPortal, SHOW_CONSOLE_LOG, V2_DEMO } from '@/constants';
import { THEME_COLORS } from '@/theme/colors';
import { changeUserCompany, getUserData } from '@/api/user';
import { getGreeting } from '@/utils/helpers';

const ProfileSetting = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const dispatch = useDispatch();
  const router = useRouter();
  const { theme, colors } = useSelector((state: RootState) => state.user);
  const isDark = theme === 'dark';
  const switchValue =
    (localStorage.getItem('switchToV2') || 'false') === 'true';

  const { data: user } = useSWR('getUserData', async () => await getUserData());

  return (
    <>
      <Button
        variant='outlined'
        className={`action-btn action-btn--setting ${V2_DEMO() ? 'v2' : ''}`}
        onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}
      >
        <Avatar src={user?.data?.profile_image_url} />
        {isPortal && <IoSettingsOutline />}
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
          {SHOW_CONSOLE_LOG && (
            <Box
              sx={{
                my: 2,
                ml: 2,
                '& .MuiTypography-root': { ml: 2 },
              }}
            >
              <FormControlLabel
                control={<Switch defaultChecked={switchValue} />}
                onChange={(_, checked) => {
                  if (checked) {
                    localStorage.setItem('switchToV2', 'true');
                  } else {
                    localStorage.removeItem('switchToV2');
                  }
                  window.location.reload();
                }}
                label='Switch to v2'
              />
            </Box>
          )}
          <Box className='colors'>
            {THEME_COLORS?.map((color) => (
              <Box
                key={color?.id}
                component='li'
                className={`colors__color ${
                  colors?.primary?.main?.toLocaleLowerCase() ===
                  color?.primary.main?.toLocaleLowerCase()
                    ? 'colors__color--active'
                    : ''
                }`}
                onClick={() => dispatch(setColors(color))}
                sx={{
                  backgroundColor: color?.primary.main,
                }}
              />
            ))}
          </Box>
          <MaterialUISwitch
            sx={{ m: 1 }}
            checked={!isDark}
            onChange={(e) => {
              if (e.target.checked) dispatch(setTheme('light'));
              else dispatch(setTheme('dark'));
            }}
          />

          <Button
            className='action'
            onClick={() => router.push('/dashboard/profile/view')}
          >
            <AiOutlineUser />
            Profile
          </Button>
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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));
