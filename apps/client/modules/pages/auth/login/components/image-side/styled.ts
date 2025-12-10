import { styled, StackProps, Stack } from '@mui/material';

export const ImageSideContainer = styled(Stack)<StackProps>(({ theme }) => ({
  backgroundColor: '#000',
  color: '#fff',
  position: 'relative',

  '& img': {
    objectFit: 'contain',
    objectPosition: 'bottom center',
  },

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
})) as typeof Stack;
