export const MANAGEMENT_STYLES = {
  '.permission-layout': {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginTop: '24px',

    '& p': {
      fontSize: '16px',
      fontWeight: '500',
    },
  },
  '.view-user-detail-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '859px',
      width: '100%',
    },
  },

  '.actions': {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },

  '.sub-menu-action': {
    display: 'flex',
    width: 'max-content',
    height: '40px',
    padding: '8px 12px',
    alignItems: 'center',
    gap: '12px',
    border: '1px solid  #E0E0E0',
    background: '#6290CB',
    fontSize: ' 12px',
    fontWeight: '500',
    color: '#F8F8F8',
    borderRadius: '100px',

    '& .MuiIconButton-root': {
      padding: '0',
    },
  },

  '.no-permission': {
    display: 'flex',
    width: 'max-content',
    height: '40px',
    padding: '8px 12px',
    alignItems: 'center',
    gap: '12px',
    background: 'rgb(255, 229, 127)',
    fontSize: ' 12px',
    fontWeight: '400',
    borderRadius: '100px',
  },

  '.add-permission': {
    '&.MuiPaper-root': {
      maxWidth: '537px',
      width: '100%',
    },
  },
};
