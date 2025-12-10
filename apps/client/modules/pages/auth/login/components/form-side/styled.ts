import { styled, StackProps, Stack, Box } from '@mui/material';

export const SideFormConatiner = styled(Stack)<StackProps>(() => ({
  padding: '44px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '80px',
})) as typeof Stack;

export const FormHeader = styled(Box)<StackProps>(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '25px',

  '& p': {
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },

  '& img': {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
})) as typeof Box;

export const FormContent = styled('form')<StackProps>(() => ({
  backgroundColor: '#fff',
  padding: '28px',
  borderRadius: '32px',
  maxWidth: '510px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  '& .head': {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',

    '&__main': {
      fontSize: '20px',
      fontWeight: '600',
    },

    '&__sub': {
      color: '#7C8BA1',
    },
  },

  '& .actions': {
    '& .MuiTypography-root': {
      color: '#7C8BA1',
      fontSize: '14px',
    },
  },
})) as typeof Box;
