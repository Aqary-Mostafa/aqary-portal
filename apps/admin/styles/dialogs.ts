export const DIALOGS_STYLES = {
  '.add-edit-dialogs': {
    '&.MuiPaper-root': {
      maxWidth: '538px',
      width: '100%',
    },

    '& .actions': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
      marginTop: '24px',
    },
    '& .form-actions': {
      backgroundColor: 'var(--mui-palette-background-paper)',
      position: 'sticky',
      bottom: '-16px',
      padding: '12px 0px',
    },
  },

  '.delete-dialog': {
    '&.MuiPaper-root ': {
      maxWidth: '500px',
      width: '100%',
    },

    '& .MuiDialogContent-root': {
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      paddingTop: '42px !important',
      paddingBottom: '12px !important',
    },

    '& .MuiDialogActions-root': {
      justifyContent: 'center',
      paddingBottom: '42px',
      gap: '8px',

      '& .MuiButtonBase-root': {
        maxWidth: '124px',
        width: '100%',
        height: '30px',
        padding: '0',
      },
    },
  },

  '.add-financialProvider-dialog': {
    '&.MuiPaper-root ': {
      maxWidth: '535px',
      width: '100%',
      padding: '50px 32px 44px 32px',
    },
  },

  '.cell-media-dialog': {
    position: 'relative',
    height: '500px',

    '& img': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  },

  '.view-media-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '709px',
      width: '100%',
    },

    '& .documents-view': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '30px',
      maxHeight: '392px',
      overflow: 'auto',

      '& .document': {
        borderRadius: '12px',
        border: '1px solid  #6C6C6C',
        width: '280px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',

        '& .image': {
          position: 'relative',
          height: '197px',
          borderRadius: '12px',
          overflow: 'hidden',

          '& img': {
            objectFit: 'contain',
          },
        },

        '& .action': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        },
      },
    },
  },

  // Add Plan Dialog
  '.add-plan-dialog': {
    '&.MuiPaper-root ': {
      maxWidth: '540px',
      width: '100%',
      padding: '34px 34px 30px 30px',
    },
  },

  '.view-docs-dialog': {
    '&.MuiPaper-root ': {
      maxWidth: '613px',
      width: '100%',
      padding: '30px 25px',
    },
  },
  // View Promotions Dialog
  '.view-promotion-dialog': {
    '&.MuiPaper-root ': {
      maxWidth: '725px',
      width: '100%',
      padding: '35px',
    },
  },
  // Share Dialog
  '.share-dialog': {
    '&.MuiPaper-root ': {
      maxWidth: '860px',
      width: '100%',
      padding: '40px',
    },
  },
  // over due payments Dialog
  '.overdue-payments-dialog': {
    '&.MuiPaper-root ': {
      maxWidth: '643px',
      width: '100%',
      padding: '35px',
    },
  },
  // file details Dialog
  '.file-details-dialog': {
    '&.MuiPaper-root ': {
      maxWidth: '709px',
      width: '100%',
      padding: '32px',
    },
  },

  // View Contact Dialog
  '.contact-view': {
    '&.MuiPaper-root ': {
      maxWidth: '693px',
      width: '100%',
      padding: '40px',
    },
  },

  //  Add  Bank/Branch Dialog
  '.add-bank-dialog': {
    '&.MuiPaper-root ': {
      maxWidth: '770px',
      width: '100%',
      padding: '32px',
    },
  },
};
