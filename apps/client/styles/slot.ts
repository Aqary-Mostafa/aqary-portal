export const SLOT_STYLES = {
  '.rbc-calendar': {
    '& .rbc-day-bg, .rbc-day-slot': {
      background: '#eee !important',
    },

    '& .rbc-month-view': {
      minHeight: '50vh',
    },

    '& .rbc-time-view, .rbc-month-view': {
      overflow: 'auto !important',
      '& > *': {
        minWidth: '900px',
      },
    },

    '& .rbc-month-view, .rbc-header, .rbc-month-row, .rbc-time-view, .rbc-overflowing, .rbc-time-content, .rbc-time-header-content, .rbc-time-slot':
      {
        border: '1px solid transparent !important',
      },

    '& .rbc-day-bg,  .rbc-timeslot-group': {
      border: '1px solid #fff !important',
    },

    '& .rbc-month-row': {
      display: 'inline-table !important',
      flex: '0 0 0 !important',
      minHeight: '74px !important',
    },

    '& .rbc-time-content': {
      overflowX: 'hidden !important',
    },

    '& .rbc-current ': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBlock: '8px',
      '.rbc-button-link': {
        background: '#6C96CF !important',
        color: '#FFF !important',
        width: '24px',
        height: '24px',
        borderRadius: '24px !important',
      },
    },

    '& .rbc-timeslot-group': {
      minHeight: '250px !important',
    },

    '& .rbc-time-content > * + * > *': {
      borderLeft: '1px solid #fff !important',
    },

    '& .rbc-header': {
      display: 'flex',
      span: {
        color: '#121926',
      },
    },

    '& .rbc-button-link': {
      color: '#121926',
      fontSize: '12px !important',
      fontWeight: 700,
      lineHeight: '24px',
      width: '100%',
    },

    '& .rbc-header > .rbc-button-link > span, .rbc-time-slot > span': {
      display: 'flex',
      color: '#121926 !important',
      fontSize: '12px',
      fontWeight: 700,
    },

    '& .rbc-allday-cell': {
      display: 'none !important',
    },

    '& .calendar-header': {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
      gap: '12px',
      flexWrap: 'wrap',
      '& .header-btns': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        '& .MuiTypography-root': {
          color: '#121926',
          weight: 700,
        },
        '& .MuiIconButton-root': {
          hegiht: '24px',
          wigth: '24px',
        },
      },
    },

    '& .rbc-events-container ': {
      margin: '0 !important',
    },

    '& .rbc-event': {
      backgroundColor: 'transparent !important',
      padding: '0 !important',
      border: 'none !important',
      overflow: 'unset !important',
      width: '100% !important',
      left: '0 !important',
      '& .rbc-event-content': {
        overflow: 'unset !important',
      },
    },

    '& .rbc-event-label': {
      display: 'none !important',
    },

    '& .event-card': {
      background: '#6C96CF',
      borderRadius: '8px',
      padding: '4px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      position: 'relative',
      height: '100%',
      border: '2px solid #eee',
      transform: 'scale(0.95)',
      '& .event-name': {
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '21px',
      },

      '& .event-time': {
        fontSize: '14px',
        fontWeight: ' 500',
        lineHeight: '21px',
      },

      img: {
        borderRadius: '100%',
        border: '2px solid #fff',
        position: 'absolute',
        bottom: 0,
        insetInlineEnd: 0,
        margin: '-4px',
      },
      '& .event-actions': {
        position: 'absolute',
        top: 0,
        insetInlineEnd: 0,
        transform: 'translate(0, -50%)',
        display: 'flex',
        gap: '4px',
        '& .MuiButtonBase-root': {
          backgroundColor: '#fff',
          width: '24px',
          height: '24px',
          padding: '4px',
          border: '1px solid #00C853',
          '&:last-child': {
            borderColor: '#F44336',
          },
        },
      },
      '&--disabled': {
        background: '#757575 !important',
        textDecoration: 'line-through',
      },
    },
    '& .add-btn': {
      width: '100%',
      height: '100%',
      background: 'transparent',
      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='3' ry='3' stroke='%236C6C6CFF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='26' stroke-linecap='square'/%3e%3c/svg%3e")`,
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'scale(0.95)',

      svg: {
        background: '#E0E0E0',
        width: '24px',
        height: '24px',
        borderRadius: '2px',
      },
    },
  },
  '.oppointment-information': {
    '& .content': {
      display: 'flex',
      marginBottom: '24px',
      img: {
        objectFit: 'cover',
        borderRadius: '4px',
      },

      gap: '24px',
    },
    '& .key': {
      color: '#121926',
      fontSize: '14px',
      fontWeight: '700',
    },
    '& .value': {
      color: '#6C6C6C',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      wordBreak: 'break-all',
    },
    '& .date': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingInline: '16px',
      borderRadius: '6px',
      background: '#0D99FF',
      boxShadow: ' 0px 4px 10px 0px #gray',
      color: '#FFF',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      height: '44px',
      marginBottom: '24px',
    },
    '& .actions': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px',
    },
  },
  '.reschedule': {
    '& .title': {
      color: '#121926',
      fontWeight: 500,
    },
    '& .date-time': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
      border: '1px solid #EEE',
      borderRadius: '6px',
      marginTop: '16px',
      p: {
        color: '#202020',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
      },
    },
    '& .current': {
      padding: '16px',
      borderRadius: '12px',
      background: '#F8FAFC',
    },
    '& .slots': {
      gap: '16px',
      display: 'flex',
      flexWrap: 'wrap',
      '& .slot': {
        borderRadius: '12px',
        border: '1px solid  #EEE',
        background: '#F8FAFC',
        padding: '12px 16px',
        color: '#6C6C6C',
        fontSize: '14px',
        fontWeight: 500,

        '&--active': {
          backgroundColor: '#DAE7F9',
          color: '#6C96CF',
          border: '1px solid  #6C96CF ',
        },
      },
    },
  },
  '.slot-appointment': {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    backgroundColor: '#F8FAFC',
    padding: '16px',
    borderRadius: '4px',

    '& h6': {
      fontWeight: 500,
    },

    '& .date': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '4px',
      padding: '8px 16px',
      border: '1px solid #EEEEEE',
      borderRadius: '2px',
      fontWeight: 400,
    },
  },

  '& .appointment-type': {
    marginLeft: '16px',

    '& .types': {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
    },

    '& .appointment-type-chips': {
      display: ' flex',
      alignItems: 'center',
      gap: '16px',
    },

    '& .MuiChip-root ': {
      display: 'flex',
      flexDirection: 'column',
      height: '77px',
      width: '81px',

      '& .MuiChip-icon': {
        position: 'relative',
        width: '65px',
        height: '46px',
        marginLeft: '0',

        '& img': {
          objectFit: 'contain',
        },
      },
    },
  },
};
