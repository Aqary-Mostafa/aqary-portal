import { Box, BoxProps, styled } from '@mui/material';

export const IntroContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  '& .logo': {
    height: '66px',
    position: 'relative',

    '& img': {
      objectFit: 'contain',
    },
  },

  '& .heading': {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textAlign: 'center',

    '&__main': {
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '38px',
      color: '#1A1A1A',
    },

    '&__sub': {
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '17px',
      color: '#7C8BA1',
    },
  },
})) as typeof Box;
