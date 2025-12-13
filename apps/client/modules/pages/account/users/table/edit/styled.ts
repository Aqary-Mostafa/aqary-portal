import { Box, styled } from '@mui/material';

export const UsersTableEditContainer = styled('form')(() => ({
  '& .MuiTabs-root': {
    borderBottom: '1px solid #E0E6ED',
    width: '100%',
  },
})) as typeof Box;
