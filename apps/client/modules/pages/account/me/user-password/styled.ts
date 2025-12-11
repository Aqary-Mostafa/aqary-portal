import { Box, styled } from '@mui/material';

export const UserInformationContainer = styled(Box)(() => ({
  '& .password-checklist': {
    borderRadius: '16px',
    overflow: 'hidden',

    '& .list': {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',

      '&__item': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        fontSize: '16px',
      },
    },
  },
})) as typeof Box;
