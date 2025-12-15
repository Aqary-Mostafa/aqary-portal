import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
})) as typeof Box;

export const Row = styled(Box)({
  display: 'flex',
  gap: 4,
}) as typeof Box;

export const Label = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.text.secondary,
})) as typeof Typography;

export const Value = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  color: theme.palette.text.primary,
})) as typeof Typography;
