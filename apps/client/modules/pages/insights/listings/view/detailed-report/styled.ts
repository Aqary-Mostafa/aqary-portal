import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ModalRoot = styled(Box)(() => ({})) as typeof Box;

export const Section = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
})) as typeof Box;
