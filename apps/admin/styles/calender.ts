export const CALENDER_STYLES = {
  '.calender.rbc-calendar, ': {
    position: 'relative',

    '& .rbc-month-row': {
      border: 'unset !important',
      flexBasis: '120px !important',
    },

    '& .rbc-timeslot-group': {
      border: '1px solid #fff !important',
      // minHeight: 'unset !important',
    },

    '& .rbc-day-slot': {
      '& .rbc-event-content': {
        padding: '8px !important',
      },
    },

    '& .event-wrapper': {
      backgroundColor: '#6C96CF',
      color: '#fff ',
      borderRadius: '3px ',
      fontSize: '14px ',
      fontWeight: '600 ',
      cursor: 'pointer',
      height: '100%',
      width: '100%',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '4px',

      '& .time': {
        fontWeight: '400',
      },
    },

    '& .add-slot': {
      width: '100%',
      height: '100%',
      border: '2px dashed #6c6c6c5c',

      svg: {
        background: '#E0E0E0',
        width: '24px',
        height: '24px',
        borderRadius: '2px',
      },
    },

    '& .avatar': {
      position: 'absolute',
      right: '0',
      bottom: '0',
      zIndex: '1',
      border: '1px solid #FFF',
      transform: 'translate(8%, 8%)',
      width: '28px',
      height: '28px',
    },

    '& .event-actions': {
      position: 'absolute',
      top: 0,
      right: '12px',
      transform: 'translate(0, -15%)',
      display: 'flex',
      gap: '4px',
      zIndex: '2',

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
  },
};
