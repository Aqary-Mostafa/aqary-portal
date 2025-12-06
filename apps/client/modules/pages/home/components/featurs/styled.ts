import { Box, BoxProps, styled } from '@mui/material';

export const FeatursContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  textAlign: 'center',

  '& .header': {
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '26px',
    color: '#111827',
  },

  '& .list': {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '32px',
  },
})) as typeof Box;
