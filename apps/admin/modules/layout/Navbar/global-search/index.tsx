import {
  Autocomplete,
  IconButton,
  InputAdornment,
  Popover,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React from 'react';
import { AiFillAccountBook } from 'react-icons/ai';
import { GoDotFill } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';
import { LuSearch } from 'react-icons/lu';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';

import { IS_CRM } from '@/constants';

const Search = ({ onClose }: { onClose?: () => void }) => {
  return (
    <Autocomplete
      className='search'
      options={data}
      groupBy={(option) => option.category}
      getOptionLabel={(option) => option.title}
      slotProps={{
        paper: {
          className: 'papper',
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='search'
          InputProps={{
            ...params.InputProps,
            endAdornment: onClose && (
              <InputAdornment position='start'>
                <IconButton onClick={onClose}>
                  <IoMdClose />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} className='option'>
          <IconButton disableRipple className='icon'>
            <GoDotFill />
          </IconButton>
          <Typography component='h6' className='label'>
            {option.title}
          </Typography>
        </li>
      )}
    />
  );
};

const GlobalSearch = () => {
  const mobileSize = useMediaQuery('(max-width:700px)');
  const [open, setOpen] = React.useState(false);

  const { theme: mode } = useSelector((state: RootState) => state.user);
  const isDark = mode === 'dark';

  const onClose = () => {
    setOpen(false);
  };

  if (mobileSize) {
    return (
      <>
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
          className='toggle-button'
          color='primary'
          sx={{
            color: 'primary.main',
            background: isDark ? '#212946' : IS_CRM ? '#F5F5F5' : '#dae7f9',
          }}
        >
          <LuSearch />
        </IconButton>
        <Popover className='search-popover' open={open} onClose={onClose}>
          <Search onClose={onClose} />
        </Popover>
      </>
    );
  } else {
    return <Search />;
  }
};

export default GlobalSearch;

const data = [
  {
    title: 'Project 1',
    year: 1994,
    icon: <AiFillAccountBook />,
    category: 'Project',
  },
  {
    title: 'Project 2',
    year: 1994,
    icon: <AiFillAccountBook />,
    category: 'Project',
  },
  {
    title: 'Project 3',
    year: 1994,
    icon: <AiFillAccountBook />,
    category: 'Project',
  },
  {
    title: 'Project 4',
    year: 1994,
    icon: <AiFillAccountBook />,
    category: 'Project',
  },
  {
    title: 'Project 5',
    year: 1994,
    icon: <AiFillAccountBook />,
    category: 'Project',
  },
  {
    title: 'Project 6',
    year: 1994,
    icon: <AiFillAccountBook />,
    category: 'Project',
  },
  {
    title: 'Company 11',
    year: 1995,
    icon: <AiFillAccountBook />,
    category: 'Company',
  },
  {
    title: 'Company 12',
    year: 1995,
    icon: <AiFillAccountBook />,
    category: 'Company',
  },
  {
    title: 'Company 13',
    year: 1995,
    icon: <AiFillAccountBook />,
    category: 'Company',
  },
  {
    title: 'Company User 11',
    year: 1995,
    icon: <AiFillAccountBook />,
    category: 'Company User',
  },
  {
    title: 'Company User 12',
    year: 1995,
    icon: <AiFillAccountBook />,
    category: 'Company User',
  },
  {
    title: 'Company User 13',
    year: 1995,
    icon: <AiFillAccountBook />,
    category: 'Company User',
  },
];
