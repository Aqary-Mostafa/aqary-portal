export const OPEN_HOUSE_STYLES = {
  '.open-house-form': {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    '& .date-header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '12px',
      '& .MuiFormLabel-root': {
        margin: 0,
      },
      '& .btn-container': {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',

        '& .MuiButtonBase-root': {
          borderRadius: '80px',
          border: '1px solid #eee',
          width: '32px',
          height: '32px',
          padding: '4px',
        },
      },
    },
    '& .swiper': {
      width: '100%',
    },

    '& .swiper-slide': {
      width: 'fit-content !important',
    },

    '& .day-card': {
      '&.MuiButtonBase-root': {
        border: '1px solid #F4F7FE',
        width: '94px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '8px 0',
        gap: '16px',
        borderRadius: '8px',
      },

      '& .day': {
        color: '#6C6C6C',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
        textTransform: 'capitalize',
      },

      '& .date': {
        color: '#202020',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '32px',
      },
      '&--active': {
        p: {
          color: '#6290CB !important',
        },
        border: '1px solid #6290CB !important',
      },

      '&--select': {
        background: '#6290CB',
        border: '1px solid #6290CB !important',
        '&:hover': {
          p: {
            color: '#6290CB !important',
          },
        },
        p: {
          color: '#fff !important',
        },
      },
    },

    '& .day-chip': {
      '&.MuiButtonBase-root': {
        height: '32px',
        display: 'flex',
        borderRadius: '100px',
        border: '1px solid #6C6C6C',
        color: '#6C6C6C',
        textTransform: 'Capitalize',
      },

      '&--select': {
        '&.MuiButtonBase-root': {
          border: '1px solid #6290CB !important',
          background: '#6290CB !important',
          color: '#fff !important',
        },
      },

      '&--active': {
        '&.MuiButtonBase-root': {
          border: '1px solid #6290CB ',
          background: '#fff',
          color: '#6290CB ',
        },
      },

      '&--disabled': {
        '&.MuiButtonBase-root': {
          border: '1px solid #cbcbcb !important',
          background: '#fff !important',
          color: '#cbcbcb !important',
        },
      },
    },

    '& .MuiRadioGroup-root ': {
      marginInlineStart: '8px',
      '.MuiFormControlLabel-root': {
        gap: '8px',
      },
    },

    '& .session-card': {
      padding: '12px',
      borderRadius: '12px',
      border: '1px solid #eeeeee',

      '& .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid #f5f5f5',
        marginBottom: '8px',
        '& p': {
          color: '#121926',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '20px',
        },
      },
    },

    '& .add-button': {
      '&.MuiButtonBase-root': {
        display: 'flex',
        borderRadius: '40px',
        width: 'fit-content',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        textTransform: ' capitalize',
        height: '32px',
        marginBottom: '16px',
      },
    },
  },
};
