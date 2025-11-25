export const COMPANY_STYLES = {
  '.form': {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'stretch',
  },
  '.extra-field': {
    border: '1px solid #EEE',
    padding: '20px',
    display: 'flex',
    borderRadius: '12px',
    gap: '16px',
    marginBottom: '24px',
  },

  '.remove-btn': {
    display: 'flex',
    height: '35px',
    width: '35px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid #F44336',
    borderRadius: '12px',
    cursor: 'pointer',
  },

  '.country-select': {
    '&.MuiFormControl-root': {
      width: 'fit-content',
    },

    '& .MuiSelect-select': {
      padding: '0',
      display: 'flex',
      flexDirection: 'row',
      gap: '6px',

      '&:focus': {
        backgroundColor: 'unset',
      },
    },
  },

  '.leader-image': {
    position: 'relative',
    width: '35px',
    height: '35px',
    overflow: 'hidden',
    borderRadius: '50%',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },

  '.add-leadership-dialogs': {
    '&.MuiPaper-root': {
      maxWidth: '859px',
      width: '100%',
    },
  },

  '.view-company-detail-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '859px',
      width: '100%',
    },
  },

  '.company-detail': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxHeight: '70vh',
    overflowY: 'auto',
  },

  '.reset-password-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '537px',
      width: '100%',
      padding: '33px',
    },
  },
  '.add-department-dialogs': {
    '&.MuiPaper-root': {
      maxWidth: '859px',
      width: '100%',
    },
  },
};
