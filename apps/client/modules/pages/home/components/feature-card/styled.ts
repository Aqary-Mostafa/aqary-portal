import { Box, BoxProps, styled } from '@mui/material';

export const FeatureContainer = styled(Box)<BoxProps>(({ theme }) => ({
  border: `1px solid ${theme?.palette.primary.main}`,
  backgroundColor: 'rgba(234, 241, 250, 0.3)',
  padding: '16px 8px',
  borderRadius: '32px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '28px',
  minHeight: '173px',
  flex: '1 0 auto',
  alignSelf: 'stretch',

  [theme.breakpoints.down('sm')]: {
    flex: 'unset',
    width: '100%',
  },

  '& .icon': {
    position: 'relative',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .content': {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: '400',

    '&__main': {
      color: '#1A1A1A',
    },

    '&__sub': {
      color: '#7C8BA1',
    },
  },
})) as typeof Box;
