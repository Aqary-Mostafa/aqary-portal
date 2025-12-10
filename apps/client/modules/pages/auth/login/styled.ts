import { styled, StackProps, Stack } from '@mui/material';

export const LoginContainer = styled(Stack)<StackProps>(({ theme }) => ({
  minHeight: '100dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F8F9FA',

  '& .container': {
    padding: '0',
    borderRadius: '32px',
    overflow: 'hidden',
    boxShadow:
      'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    minHeight: '1112px',

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
})) as typeof Stack;
