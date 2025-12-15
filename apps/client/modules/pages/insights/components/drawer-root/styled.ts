import { Drawer, styled } from '@mui/material';

export const Root = styled(Drawer)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '16px 0 0 16px',
    minWidth: 480,
    padding: '16px',
  },

  '& .drawer-header': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18,
    fontWeight: 500,
    paddingBottom: 12,
    borderBottom: '1px solid #E0E6ED',
    marginBottom: 16,

    '& .MuiTypography-root': {
      fontSize: 'inherit',
      fontWeight: 'inherit',
    },
  },
})) as typeof Drawer;
