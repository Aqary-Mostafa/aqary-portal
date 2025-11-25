import { AUTH_STYLES } from '@/styles/auth';
import { CALENDER_STYLES } from '@/styles/calender';
import { COMPANY_STYLES } from '@/styles/company';
import { DIALOGS_STYLES } from '@/styles/dialogs';
import { LEAD_CONTANT } from '@/styles/lead-contant';
import { MANAGEMENT_STYLES } from '@/styles/management';
import { NAVBAR_STYLES } from '@/styles/navbar';
import { NUMBER_CARD } from '@/styles/number-card';
import { OPEN_HOUSE_STYLES } from '@/styles/openhouse';
import { PROJECT_STYLES } from '@/styles/project';
import { SLOT_STYLES } from '@/styles/slot';
import { TAGS_STYLES } from '@/styles/tags';

export const GLOBAL_STYLES = {
  '.page-layout': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    overflow: 'scroll',
  },

  '.dialog-form': {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxHeight: '650px',
    '& .url-chips': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      gap: '8px',
      marginBottom: '8px',
    },
  },

  '.form-actions': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: '10px',
  },

  '.page-form': {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },

  '& .sm-drawer': {
    '&.MuiDrawer-root': {
      '& .MuiPaper-root': {
        width: '260px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '16px',
      },
    },
    '& a': {
      position: 'relative',
      width: '100%',
      height: '44px',
      marginBottom: '16px',
      minHeight: '44px',

      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
  },

  '.status-progress': {
    position: 'relative',
    display: 'inline-flex',

    '& .progress-value': {
      '&.MuiCircularProgress-root': {
        zIndex: '1',
      },
    },

    '& .progress-bg': {
      position: 'absolute',
      left: '0',

      '&.MuiCircularProgress-root': {},
    },

    '&__text': {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& .MuiTypography-caption': {
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '0.1px',
      },
    },

    '&.down': {
      '& .progress-value': {
        '&.MuiCircularProgress-root': {
          color: '#F44336',
        },
      },

      '& .progress-bg': {
        '&.MuiCircularProgress-root': {
          color: '#FFAB91',
        },
      },

      '.status-progress__text': {
        '& .MuiTypography-caption': {
          color: '#F44336',
        },
      },
    },

    '&.pass': {
      '& .progress-value': {
        '&.MuiCircularProgress-root': {
          color: '#FFC107',
        },
      },

      '& .progress-bg': {
        '&.MuiCircularProgress-root': {
          color: '#FFF8E1',
        },
      },

      '.status-progress__text': {
        '& .MuiTypography-caption': {
          color: '#FFC107',
        },
      },
    },

    '&.safe': {
      '& .progress-value': {
        '&.MuiCircularProgress-root': {
          color: '#00C853',
        },
      },

      '& .progress-bg': {
        '&.MuiCircularProgress-root': {
          color: '#B9F6CA',
        },
      },

      '.status-progress__text': {
        '& .MuiTypography-caption': {
          color: '#00C853',
        },
      },
    },
  },

  '.quality-score': {
    '&__status': {
      cursor: 'pointer',
      width: 'fit-content',
    },

    '&__content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '390px',
      margin: 'auto',

      '& .label': {
        width: '100%',

        '&__box': {
          height: '48px',
          border: '1px solid #EEEEEE',
          display: 'flex',
          alignItems: 'center',
          padding: '16px',
          borderRadius: '12px',
          position: 'relative',
          overflow: 'hidden',
        },

        '&__text': {
          fontSize: '14px',
          fontWeight: '700',
          zIndex: '2',
          color: '#F8F8F8',
        },

        '&__percentage': {
          position: 'absolute',
          left: '0',
          top: '0',
          height: '100%',
        },

        '&.down': {
          '& .label__box': {
            backgroundColor: '#FFAB91',
          },

          '& .label__percentage': {
            backgroundColor: '#F44336',
          },
        },

        '&.pass': {
          '& .label__box': {
            backgroundColor: '#FFF8E1',
          },

          '& .label__percentage': {
            backgroundColor: '#FFC107',
          },
        },

        '&.safe': {
          '& .label__box': {
            backgroundColor: '#F8F8F8',
          },

          '& .label__percentage': {
            backgroundColor: '#00C853',
          },
        },
      },
    },
  },

  '.add-btn': {
    padding: '16.5px 20px',
    height: '44px',
    borderRadius: '12px',

    '&, &.MuiButtonBase-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      border: '1px solid #364152',
      cursor: 'pointer',
      marginBottom: '16px',
      fontSize: '24px',
    },
  },

  '.table-media-box': {
    position: 'relative',
    width: '80px',
    height: '80px',
    display: 'inline-block',
    marginRight: '4.5px',
    overflow: 'hidden',

    '& img': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      heigh: '100%',
      objectFit: 'cover',
    },

    '& .btn-box': {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      zIndex: '1',
      backgroundColor: '#0000007a',
      transform: 'translateY(0)',
      transition: 'all 350ms',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& .MuiButtonBase-root': {
        '& svg': {
          width: '21px',
          height: '21px',
        },
      },
    },

    '&:hover': {
      '& .btn-box': {
        transform: 'translateY(0)',
      },
    },
  },
  '.radio-group': {
    display: 'flex',
    gap: '20px',
    '& .MuiFormControlLabel-root': {
      display: 'flex',
      gap: '8px',
    },
  },

  '.top-helper-text': {
    textAlign: 'end !important',
    width: '100%',
  },

  '.key': {
    color: '#121926',
    fontSize: '14px',
    fontWeight: '700',
  },

  '.value': {
    color: '#6C6C6C',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
  },

  '.document-card': {
    border: '1px solid #6C6C6C',
    padding: '12px',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    '& .image': {
      position: 'relative',
      maxWidth: '280px',
      width: '100%',
      maxHeight: '195px',
      height: '195px',
      img: {
        objectFit: 'cover',
        borderRadius: '12px',
      },
    },
    '& .action': {
      display: 'flex',
      gap: '12px',
      a: {
        textAlign: 'center',
      },
    },

    '&.small': {
      '& .image': {
        maxHeight: '64px',
        height: '64px',
      },
    },
  },

  '.field-thumbnail': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    height: '100%',

    '& .item': {
      display: 'flex',
      flexDirection: 'row !important',
      alignItems: 'center',
      gap: '8px',
      width: '145px',
      height: '48px',
      borderRadius: '10px',
      border: '1px solid #E0E0E0',
      padding: '8px',
      position: 'relative',

      '& .image-title': {
        color: '#6290CB',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        width: '80px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },

      '& .image-container': {
        position: 'relative',
        width: '36px',
        height: '36px',
        overflow: 'hidden',
        borderRadius: '4px',

        '& .full-view-icon': {
          zIndex: '1',
          position: 'absolute',
          left: '0',
          bottom: '-8px',
          cursor: 'pointer',

          '& svg': {
            fill: '#fff',
          },
        },

        '& img': {
          objectFit: 'cover',
        },
      },
    },

    '& .close-icon': {
      position: 'absolute',
      zIndex: '1',
      top: '-6px',
      right: '-6px',
      cursor: 'pointer',
    },
  },

  '.field-info': {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-40%)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px',

    '& .MuiFormControlLabel-root': {
      gap: '8px',
    },

    '& svg': {
      color: '#6C6C6C',
    },
  },

  'html[dir="rtl"] .field-info': {
    left: 0,
    right: 'unset',
  },

  '.file-manager': {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',

    '& .header': {
      color: '#121926',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '20px',
      marginBottom: '16px',
    },

    '& .image-container': {
      position: 'relative',
      width: '100%',
      height: '80px',
      border: '1px solid #f3f3f3',
      borderRadius: '6px',
      overflow: 'hidden',
    },

    '& .file-size': {
      color: '#6C6C6C',
      fontSize: '10px',
    },

    '& .btn': {
      position: 'relative',

      '& input': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '1',
        opacity: '0',
      },

      '& button.MuiButtonBase-root': {
        fontSize: '12px',
        height: '30px',
        paddingTop: '0',
        paddingBottom: '0',
        marginTop: 'auto',
      },
    },

    '& .caption': {
      color: '#6C6C6C',
      fontSize: '10px',
    },

    '& .download': {
      backgroundColor: '#DAE7F9',
      color: '#6290CB',
      fontSize: '10px',
      display: 'flex',

      '& svg': {
        width: '14px',
        height: '14px',
      },
    },
  },

  '& .tabs_lined': {
    '&.MuiTabs-root': {
      borderRadius: 'unset',
      border: 'unset',
      borderBottom: '1px solid #E0E0E0',
      marginBottom: '24px',

      '& .MuiTab-root.Mui-selected': {
        background: 'unset',
        color: '#6C96CF',
      },
    },
  },

  '& .ranks': {},

  ...DIALOGS_STYLES,
  ...PROJECT_STYLES,
  ...COMPANY_STYLES,
  ...OPEN_HOUSE_STYLES,
  ...MANAGEMENT_STYLES,
  ...SLOT_STYLES,
  ...NAVBAR_STYLES,
  ...CALENDER_STYLES,
  ...NUMBER_CARD,
  ...AUTH_STYLES,
  ...LEAD_CONTANT,
  ...TAGS_STYLES,
};
