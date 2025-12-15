import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Root = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',

  '& .progress-section': {
    fontSize: 12,

    '& .MuiLinearProgress-root': {
      height: '16px',
      borderRadius: '4px',
    },

    '& .MuiLinearProgress-bar': {
      borderRadius: '4px',
    },

    '&.passed': {
      color: '#22C55E',

      '& .MuiLinearProgress-root': {
        backgroundColor: '#B9F6CA',
      },

      '& .MuiLinearProgress-bar': {
        backgroundColor: '#22C55E',
      },
    },
  },
})) as typeof Box;

export const Item = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: 12,
  minHeight: 25,
})) as typeof Box;
