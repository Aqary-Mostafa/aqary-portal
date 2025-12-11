import { Box, styled } from '@mui/material';

export const UserProfileContainer = styled(Box)(() => ({
  '& .cover': {
    position: 'relative',
    height: '230px',
    width: '100%',
    borderRadius: '20px',
    // overflow: 'hidden',

    '& img': {
      objectFit: 'cover',
      borderRadius: '20px',
    },

    '&__input': {
      position: 'absolute',
      bottom: '-16px',
      right: '24px',

      '& .input': {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        height: '100%',
        opacity: '0',

        '& .MuiInputBase-root': {
          height: '100%',
        },

        '& .MuiInputBase-input': {
          width: '100%',
          height: '100%',
          padding: '0',
          minHeight: '32px',
        },
      },

      '& .btn': {
        '&.MuiButtonBase-root': {
          backgroundColor: '#EAF1FA',
          border: '1px solid #A2BEE3',
          minHeight: '32px',
          padding: '5px 12px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        },
      },
    },
  },

  '& .portrait': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px',

    '& .image-container': {
      position: 'relative',
      borderRadius: '20px',
      width: '120px',
      height: '120px',

      '& img': {
        objectFit: 'cover',
        borderRadius: '20px',
      },
    },

    '& .content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },

    '& .name': {
      fontSize: '20px',
      fontWeight: 600,
    },

    '& .helper': {
      color: '#7C8BA1',
      fontSize: '14px',
    },

    '&__input': {
      position: 'relative',

      '& .input': {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        height: '100%',
        opacity: '0',

        '& .MuiInputBase-root': {
          height: '100%',
        },

        '& .MuiInputBase-input': {
          width: '100%',
          height: '100%',
          padding: '0',
          minHeight: '32px',
        },
      },

      '& .btn': {
        '&.MuiButtonBase-root': {
          backgroundColor: '#EAF1FA',
          border: '1px solid #A2BEE3',
          minHeight: '32px',
          padding: '5px 12px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        },
      },
    },
  },
})) as typeof Box;
