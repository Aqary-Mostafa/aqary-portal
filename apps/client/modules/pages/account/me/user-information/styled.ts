import { Box, styled } from '@mui/material';

export const UserInformationContainer = styled(Box)(() => ({
  '& .user-item': {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',

    '& .MuiChip-root': {
      backgroundColor: '#EAF1FA',
      width: '20px',
      height: '20px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& .MuiChip-label': {
        padding: 0,
        lineHeight: '0',
      },
    },

    '&__label': {
      fontWeight: '500',
    },
  },
})) as typeof Box;
