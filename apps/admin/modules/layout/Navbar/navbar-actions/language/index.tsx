import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Popover,
} from '@mui/material';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

import { setLanguage } from '@/store/slices/userSlice';

const LanguagePopper = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const { locale } = useParams() as { locale: string };
  const pathname = usePathname();
  const dispatch = useDispatch();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <>
      <IconButton
        className='action-btn'
        onClick={(e) => setAnchorEl(anchorEl ? null : e.currentTarget)}
      >
        {locale?.toUpperCase()}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        className='navbar-popper'
        sx={{
          '& .MuiPaper-root': {
            padding: '0 !important',
          },
        }}
      >
        <List className='country-list'>
          {languageData.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton
                className='language'
                sx={{
                  backgroundColor:
                    item?.code === locale
                      ? 'primary.light'
                      : 'Background.paper',
                  pointerEvents: item?.code === locale ? 'none' : 'unset',
                }}
                href={redirectedPathname(item?.code)}
                onClick={() => dispatch(setLanguage(item?.code))}
              >
                {item?.language}
                <Box component='span' className='country'>
                  ({item?.country})
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};

export default LanguagePopper;

const languageData = [
  {
    id: 1,
    language: 'English',
    country: 'Global',
    code: 'en',
  },
  {
    id: 2,
    language: 'عربي',
    country: 'UAE',
    code: 'ar',
  },
];
