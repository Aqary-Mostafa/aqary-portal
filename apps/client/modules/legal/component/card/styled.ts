import { Stack, styled } from '@mui/material';

export const LicenceCardContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '28px',
  backgroundColor: 'var(--mui-palette-common-background)',
  overflow: 'hidden',

  '& .details': {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',

    '& .header': {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',

      '&__title': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',

        '& .name': {
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '20px',
          textTransform: 'capitalize',
        },
      },

      '&__chip': {
        '&.MuiChip-colorSuccess': {
          backgroundColor: '#D2FADD',
          color: theme.palette.success.main,
        },
      },

      '& .Cell-With-Copy': {
        color: '#1A1A1A',
        fontSize: '14px',
      },
    },

    '& .date': {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '21px',

      '&__label': {
        color: '#7C8BA1',
      },

      '&__value': {
        color: '#1A1A1A',
      },
    },

    '& .progress': {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',

      '&__label': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '21px',
        color: '#7C8BA1',
      },

      '& .MuiLinearProgress-root': {
        height: '16px',
        borderRadius: '4px',
      },
    },
  },

  '& .MuiAlert-root': {
    padding: '16px 24px',
    fontSize: '14px',
  },
})) as typeof Stack;
