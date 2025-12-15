import { styled } from '@mui/material/styles';
import { Box, Button, Chip, Typography } from '@mui/material';

export const CardRoot = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})) as typeof Box;

export const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '4px',

  '& .info': {
    display: 'flex',
    flexDirection: 'row',
    gap: '4px',
    fontSize: 12,

    '& .MuiTypography-root': {
      fontSize: 'inherit',
    },

    '& .value': {
      fontWeight: 600,
      color: theme.palette.text.primary,
    },
  },
})) as typeof Box;

export const IconWrapper = styled(Chip)(() => ({
  width: 20,
  minWidth: 20,
  height: 20,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& .MuiChip-label': {
    padding: 0,
    fontSize: 12,
    lineHeight: 0,
  },
})) as typeof Chip;

export const ActionButton = styled(Button)(({ theme }) => ({
  padding: '0',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  textTransform: 'none',
  fontSize: 12,
  color: theme.palette.primary.main,
  minHeight: '32px',
  borderRadius: '8px',
  backgroundColor: '#EAF1FA',
})) as typeof Button;
