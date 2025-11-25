export const PROJECT_STYLES = {
  '.general-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '800px',
      width: '100%',

      '& form': {
        display: 'flex',
        flexDirection: 'column',

        '& > div': {
          maxHeight: '800px',
          overflow: 'auto',
          padding: '12px',
        },
      },
    },
  },

  '.edit-promotion-list-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '638px',
      width: '100%',
    },
    '& .form': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },

    '& .actions': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
    },
  },

  '.description-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '738px',
      width: '100%',
    },

    '& .MuiDialogContent-root': {
      overflow: 'hidden',
      wordBreak: 'break-word',
    },
  },

  '.readMoreText': {
    color: 'rgb(98, 144, 203)',
    fontWeight: '600',
    cursor: 'pointer',
    paddingLeft: '6px',
  },

  '.media-cell': {
    gap: '4px',
    display: 'flex',
    alignItems: 'center',
  },

  '.add-document-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '638px',
      width: '100%',
    },

    '& .form': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },

    '& .actions': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
    },
  },

  '.import-document-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '638px',
      width: '100%',
    },

    '& .form': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },

    '& .actions': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
    },
  },

  '.edit-document-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '638px',
      width: '100%',
    },

    '& .form': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },

    '& .actions': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
    },
  },

  '.media-list': {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },

  '.add-gallery-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '638px',
      width: '100%',
    },

    '& .form': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },

    '& .actions': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
    },
  },

  '.import-gallery-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '638px',
      width: '100%',
    },

    '& .actions': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
      marginTop: '24px',
    },
  },

  '.open-house-actions': {
    display: 'flex',
    gap: '16px',
    whiteSpace: 'nowrap',
    justifyContent: 'center',
  },

  '.view-property-detail-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '1440px',
      maxHeight: '80vh',
      width: '100%',
    },
    '& .property-view': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginBottom: '24px',
    },
    '& .property-detail-title': {
      fontSize: '18px',
      fontWeight: '700',
      padding: '24px 24px 24px 16px',
    },
    '& .MuiGrid-item': {
      padding: '16px',
    },
  },

  '.unit-type-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '740px',
      maxHeight: '80vh',
      width: '100%',
    },

    '& .black-dot': {
      background: 'rgb(54, 65, 82)',
      width: '14px',
      height: '14px',
      borderRadius: '50%',
    },
  },

  '.published-secondary-actions-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '740px',
      paddingInline: '40px',
      '@media (max-width: 600px)': {
        paddingInline: '0px',
      },
    },
  },

  '.published-info-dialog': {
    '&.MuiPaper-root': {
      maxWidth: '860px',
      paddingInline: '40px',
      '@media (max-width: 600px)': {
        paddingInline: '0px',
      },
    },
  },

  '.remove-btn': {
    display: 'flex',
    height: '44px',
    padding: '16.5px 20px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid #F44336',
    borderRadius: '12px',
    cursor: 'pointer',
    marginBottom: '16px',
  },

  '.publish-media': {
    border: '1px solid #6C6C6C',
    borderRadius: '8px',
    maxHeight: '400px',
    overflow: 'auto',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
    },

    '& .category-container': {
      padding: '16px',
      gap: '16px',

      '& .header': {
        position: 'sticky',
        top: '0',
        backgroundColor: '#fff',
        zIndex: 1,
        color: '#6C6C6C',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
        gap: '4px',

        '& .value': {
          color: '#121926',
        },
      },
    },

    '& .imgBox': {
      gap: '16px',

      '& .image': {
        position: 'relative',
        height: '97px',
        width: '100%',
        borderRadius: '12px',
        border: '1px solid  #6C6C6C',
        overflow: 'hidden',

        '& .MuiCheckbox-root': {
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: 1,
        },

        '& img': {
          objectFit: 'cover',
        },
      },
    },
  },
};
