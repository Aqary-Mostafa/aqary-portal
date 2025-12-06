import { Box, BoxProps, styled } from '@mui/material';

export const CtaCardContainer = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  borderRadius: '32px',
  backgroundColor: '#000000',
  overflow: 'hidden',
  minHeight: '415px',
  padding: '28px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '& *': {
    zIndex: 1,
  },

  '& .background': {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: 0,
    objectFit: 'cover',

    '& img': {
      objectFit: 'cover',
    },
  },

  '& .action': {
    '&.MuiButtonBase-root': {
      backgroundColor: '#EAF1FA',
      width: '64px',
      height: '64px',
      color: theme?.palette?.primary?.main,
    },
  },

  '& .content': {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',

    '& .MuiButtonBase-root': {
      marginTop: '8px',
    },

    '&__head': {
      fontWeight: 600,
      fontSize: '24px',
    },

    '&__deacription': {
      fontWeight: 400,
      fontSize: '16px',
    },
  },
})) as typeof Box;
