export const LEAD_CONTANT = {
  '.campaigncard': {
    position: 'relative',

    '&.MuiPaper-outlined': {
      borderRadius: '12px',
    },

    '& .MuiDivider-root': {
      margin: '24px 0',
    },

    '& .actions': {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItem: 'center',

      '& h6': {
        color: '#121926',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '28px',
        marginBottom: '8px',
      },
    },

    '& .more-info': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',

      '& .date': {
        color: '#364152',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
      },
    },

    '& .owner': {
      color: '#6C6C6C',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
      marginBottom: '8px',
    },

    '& .title': {
      fontSize: '0.875rem',
      padding: '0',
      marginBottom: '16px',
    },

    '& .social': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '14px',

      '&__item': {
        color: '#6C6C6C',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      },
    },

    '& .n-clicks': {
      height: '25px',
      maxWidth: '106px',
    },

    '& .click-numbers': {
      color: '#69F0AE',
      fontSize: '14px',
    },

    '& .tags': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '8px',
    },
  },

  '.conversation_card': {
    backgroundColor: '#fff',
    minWidth: '300px',
    minHeight: '125px',
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    overflow: 'hidden',

    '& .reach:first-child': {
      height: '50%',
      position: 'relative',

      '& .perecntage': {
        color: '#00C853',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px',
        borderRadius: '6px',
        backgroundColor: '#B9F6CA4D',
        padding: '4px 8px',
        position: 'absolute',
        top: '15px',
        right: '20px',
      },
    },

    '& .reach': {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',

      '& .chart': {
        maxWidth: '102px',
        width: '100%',
        minHeight: '26px',
        height: '26px',
      },

      '& .number': {
        color: '#121926',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '28px',
      },

      '& .header': {
        color: '#697586',
        fontSize: '14px',
        fontWeight: '400',
      },
    },

    '& .analyses': {
      backgroundColor: '#F8FAFB',
      padding: '10px',
      height: '50%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderTop: '1px solid #F8FAFB',

      '& .reach': {
        gap: '0',
      },

      '& .number': {
        fontSize: '14px',
        lineHeight: '20px',
      },

      '& .header': {
        fontSize: '12px',
        lineHeight: '20px',
      },
    },
  },

  '.log-card': {
    borderRadius: '12px',
    border: '1px solid  #E3E3E3',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',

    '&__post-ref': {
      borderRadius: '6px',
      border: '1px solid  #FAFAFA',
      padding: '16px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '10px',

      '& .platform-logo': {
        '&.MuiAvatar-root': {
          width: '32px',
          height: '32px',
          borderRadius: 'unset',
        },
      },

      '& .content': {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        position: 'relative',
        width: '100%',

        '&__name': {
          color: '#6290CB',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '24px',
          textDecorationLine: 'underline',
        },

        '&__post': {
          color: '#7A8080',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '20px',
        },

        '&__timestamp': {
          position: 'absolute',
          bottom: '0',
          right: '0',
          color: '#919B9B',
          fontSize: '12px',
          fontWeight: '600',
        },
      },
    },

    '&__action': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '20px',
      position: 'relative',

      '& .redirect': {
        color: '#6290CB',
      },

      '& .reaction': {
        position: 'absolute',
        right: '0',
        width: '40px',
        height: '40px',
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.1rem',

        '&.heart': {
          backgroundColor: '#FE251B',
          color: '#FFFFFF',
        },
      },
    },
  },
};
