export const NUMBER_CARD = {
  '.number-card': {
    backgroundColor: '#6290CB',
    color: '#F8F8F8',
    padding: '20px 16px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    position: 'relative',
    overflow: 'hidden',

    '& .icon': {
      backgroundColor: '#DAE7F9',
      borderRadius: '8px',
      // width: 'fit-content',

      '&:hover': {
        backgroundColor: '#DAE7F9',
      },
    },

    '& .head': {
      '& h6': {
        color: '#F8F8F8',
        fontSize: '34px',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      },

      '& p': {
        color: '#F8F8F8',
        fontSize: '16px',
        fontWeight: '500',
      },

      '& .head-arrow': {
        backgroundColor: '#DAE7F9',
        width: '22px',
        height: '22px',
        cursor: 'auto',

        '& svg': {
          minWidth: '16px',
        },

        '&:hover': {
          backgroundColor: '#DAE7F9',
        },
      },
    },

    '& .circle': {
      width: '210px',
      height: '210px',
      backgroundColor: '#DAE7F9',
      borderRadius: '50%',
      position: 'absolute',

      '&.top': {
        zIndex: '1',
        top: '-60%',
        right: '-30%',
      },

      '&.bottom': {
        top: '-80%',
        right: '-8%',
        opacity: '0.5',
      },
    },

    '&.secondary': {
      backgroundColor: '#F4F7FE',

      '& .head': {
        '& h6': {
          color: '#364152',
        },

        '& p': {
          color: '#364152',
        },
      },
    },
  },
};
