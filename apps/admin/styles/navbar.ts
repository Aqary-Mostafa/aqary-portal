export const NAVBAR_STYLES = {
  '.navbar': {
    '&.MuiPaper-root': {
      boxShadow: 'unset',
      padding: '8px 20px',
      zIndex: '1200',
      flexDirection: 'row',
      gap: '24px',

      '@media screen and (max-width: 700px)': {
        gap: '16px',
      },

      '@media screen and (max-width: 400px)': {
        gap: '8px',
      },
    },

    '& .sidebar-controler': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '260px',
      gap: '8px',

      '@media screen and (max-width: 900px)': {
        width: 'unset',
      },

      '& .logo-container': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '146px',
        height: '100%',

        '& img': {
          objectFit: 'contain',
          width: '100%',
          height: '100%',
        },

        '@media screen and (max-width:900px)': {
          display: 'none',
        },
      },
    },

    '& .main-nav': {
      zIndex: '1301',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      width: '100%',
    },
  },

  '.search': {
    maxWidth: '484px',
    width: '100%',

    '@media screen and (max-width:700px)': {
      maxWidth: '100%',
    },

    '&.MuiAutocomplete-root': {},
  },

  '.papper': {
    top: '0',

    '& .MuiAutocomplete-listbox': {
      msOverflowStyle: 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },

    '& .MuiAutocomplete-groupUl': {
      maxHeight: 'unset',
    },

    '& .option': {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      margin: '5px',
      height: '60px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: '0.5px dashed transparent',
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      padding: '6px 16px',

      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        color: 'rgb(67, 100, 150)',
        border: '0.5px dashed rgb(209, 209, 209)',
      },

      '& .icon': {
        '&.MuiButtonBase-root': {
          fontWeight: '400',
          lineHeight: '1.5em',
          fontSize: '0.875rem',
          color: 'rgb(106, 110, 118)',
          height: '36px',
          width: '36px',
          backgroundColor: 'rgb(248, 250, 254)',
          border: '1px solid rgb(209, 209, 209)',
          borderRadius: '50%',
          padding: '6px',

          '& svg': {
            width: '24px',
            height: '24px',
          },
        },
      },

      '& .label': {
        margin: '0px',
        fontSize: '0.875rem',
        fontWeight: '500',
        textTransform: 'uppercase',
      },
    },
  },

  '.search-popover': {
    '& .MuiPaper-root': {
      padding: '4px 0',
      width: '100%',
      border: 'unset',
      backgroundColor: '#fff',
      paddingTop: '6px',
      top: '6px !important',
    },
  },

  '.nav-actions': {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',

    '@media screen and (max-width: 700px)': {
      gap: '12px',
    },

    '@media screen and (max-width: 400px)': {
      gap: '8px',
    },

    '& .actions': {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',

      '@media screen and (max-width: 700px)': {
        gap: '8px',
      },
    },
  },

  '.notifications-container': {
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',

    '& .heading': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px',

      '& .title': {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',

        '& p': {
          fontSize: '1rem',
          fontWeight: 600,
        },
      },
    },

    '& .filter': {
      padding: '16px',
    },

    '& .container': {
      display: 'flex',
      flexDirection: 'column',
      width: '350px',
      overflow: 'auto',

      '& .notification': {
        borderTop: '1px solid rgba(224, 224, 224, 0.596)',
        borderBottom: '1px solid rgba(224, 224, 224, 0.596)',
        padding: '16px',
        width: ' 100%',
        textDecoration: 'none',
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '4px',
        justifyContent: 'space-between',

        '&:hover': {
          backgroundColor: 'rgb(227, 242, 253)',
        },

        '&__content': {
          display: 'flex',
          gap: '8px',
          width: '100%',

          '& .user-image': {
            width: '40px',
            height: '40px',
          },

          '& .user-data': {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100%',

            '&__header': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',

              '& p': {
                fontSize: '0.875rem',
                fontWeight: '400',
                color: 'rgb(18, 25, 38)',
              },
            },

            '& p': {
              fontSize: '0.75rem',
              fontWeight: '400',
              color: ' rgb(105, 117, 134)',
            },
          },
        },
      },
    },
  },

  '.navbar-popper': {
    '&.MuiPopover-root': {
      '& .MuiPaper-root': {
        padding: '16px',
        boxShadow:
          'rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px',
        borderRadius: '4px',
        border: 'unset',
        marginTop: '16px',
        maxWidth: '800px',
      },
    },

    '& .product-image': {
      position: 'relative',
      width: '100%',
      height: '100%',

      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },

    '& .container': {
      justifyContent: 'space-between',

      '& .link-group': {
        '& .header': {
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'rgb(18, 25, 38)',
        },

        '& .link': {
          padding: '10px 16px',
          paddingLeft: '0',
          fontSize: '0.875rem',
          fontWeight: '400',
          color: 'rgb(18, 25, 38)',
          display: 'flex',
          alignItems: 'center',

          '& svg': {
            width: '10px',
            height: '10px',
            marginRight: '8px',
          },

          '& a': {
            color: 'inherit',
            textDecoration: 'inherit',
          },
        },
      },
    },

    '& .country-list': {
      '& .language': {
        margin: '0px',
        fontSize: '0.875rem',
        fontWeight: '400',
        color: 'rgb(54, 65, 82)',

        '& .country': {
          margin: '0px 0px 0px 8px',
          fontSize: '0.75rem',
          fontWeight: 400,
          lineHeight: 1.66,
          color: 'rgb(105, 117, 134)',
        },
      },
    },

    '&.notifications': {
      '&.MuiPopover-root': {
        '& .MuiPaper-root': {
          padding: '0',
        },
      },
    },
  },

  '.notifications-fullview': {
    '&.MuiDrawer-root': {
      zIndex: '1301',
    },
  },

  '.user-setting': {
    width: '307px',
    display: 'flex',
    flexDirection: 'column',

    '&__header': {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      marginBottom: '16px',

      '& .name': {
        display: 'flex',
        alignItems: 'center',
        gap: '4px',

        '& span': {
          fontWeight: 600,
        },
      },
    },

    '& .action': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '24px',
      color: 'rgb(54, 65, 82)',
      textTransform: 'capitalize',

      '&:hover': {
        background: '#dae7f9',
      },
    },

    '& .theme-change': {
      width: 'fit-content',
      backgroundColor: 'red',
      borderRadius: '50px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '10px 12px',
      position: 'relative',

      '& .circle': {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        position: 'absolute',
        right: '12px',
      },

      '& svg': {
        width: '18px',
        height: '18px',
      },
    },
  },

  '.companies': {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(244, 247, 254)',
    padding: '16px',
    borderRadius: '4px',
    gap: '8px',

    '&__title': {
      fontSize: '1rem',
      fontWeight: '600',
    },

    '&__company': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '8px',
      fontSize: '0.875rem',
      border: '1px solid #dae7f9',
      borderRadius: '4px',
      padding: '4px 8px',
      cursor: 'pointer',

      '&--active': {
        backgroundColor: '#dae7f9',
        pointerEvents: 'none',
      },

      '&:hover': {
        backgroundColor: '#dae7f9',
      },
    },
  },
};
