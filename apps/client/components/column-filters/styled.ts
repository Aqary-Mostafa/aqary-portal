import { Box, styled } from '@mui/material';

export const ColumnFiltersContainer = styled(Box)(({ theme }) => ({
  minHeight: '32px',
  borderBottom: '1px solid #E0E6ED',
  padding: '16px 0',
  margin: '12px 0',
  marginTop: '0',
  paddingTop: '0',
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(3),

  '& .filters': {
    display: 'flex',
    gap: 8,

    '& .search': {
      minWidth: '180px',
    },
  },

  '& .actions': {
    '& .MuiButtonBase-root': {
      display: 'flex',
      backgroundColor: '#F8F9FA',
      color: '#7C8BA1',
      border: '1px solid #E0E6ED',
    },
  },
})) as typeof Box;
