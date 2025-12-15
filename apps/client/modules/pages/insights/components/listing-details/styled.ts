import { styled } from '@mui/material/styles';
import { Box, Chip } from '@mui/material';

export const CardRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  alignItems: 'flex-start',
})) as typeof Box;

export const ImageWrapper = styled(Box)({
  position: 'relative',
  minWidth: 80,
  height: 108,
  borderRadius: 16,
  flexShrink: 0,

  '& img': {
    borderRadius: 16,
    objectFit: 'cover',
  },
}) as typeof Box;

export const Badge = styled(Box)(({ theme }) => ({
  height: 22,
  width: 50,
  position: 'absolute',
  top: '-8px',
  left: '-8px',
  backgroundColor: theme.palette.success.main,
  zIndex: 1,
  color: '#fff',
  fontSize: 12,
  padding: '2px 8px',
  borderRadius: 8,
  fontWeight: 400,
  rotate: 'calc(360deg - 15deg)',
  textAlign: 'center',
})) as typeof Box;

export const Content = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
}) as typeof Box;

export const TitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  fontSize: 12,

  '& .verified-badge': {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    color: theme.palette.primary.main,
  },
})) as typeof Box;

export const Price = styled(Chip)(({ theme }) => ({
  fontWeight: 400,
  color: theme.palette.primary.main,
  fontSize: 12,
  backgroundColor: '#EAF1FA',
  padding: '2px 8px',
  borderRadius: '8px',
  height: '28px',
  width: 'fit-content',

  '& .MuiChip-label': {
    padding: 0,
  },
})) as typeof Chip;

export const MetaRow = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: 10,

  '&.facts': {
    gap: 12,
    display: 'flex',
    alignItems: 'center',
  },

  '& .MuiDivider-root': {
    borderColor: '#E3E3E3',
  },

  '& .MuiTypography-root': {
    fontSize: 'inherit',
  },
})) as typeof Box;

export const IconText = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
}) as typeof Box;
