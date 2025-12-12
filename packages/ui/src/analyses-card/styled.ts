import { Box, styled } from '@mui/material';

export const AnalysesCardContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
  padding: '24px 16px',
  borderRadius: '28px',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',

  '& .icon': {
    fontSize: '24px',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .content': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',

    '&__value': {
      fontWeight: '600',
    },
  },
})) as typeof Box;
