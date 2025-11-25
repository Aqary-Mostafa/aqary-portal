export const AUTH_STYLES = {
  '.login': {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    '& .bg-image': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',

      '& img': {
        objectFit: 'cover',
      },

      '&::after': {
        content: `''`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: '0',
        top: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
    },

    '& .form-container': {
      backgroundColor: '#ffffff',
      maxWidth: '550px',
      width: '100%',
      padding: '32px',
      borderRadius: '4px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',

      '& .header': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        textAlign: 'center',

        '& h4': {
          fontSize: '2.125rem',
          fontWeight: '700',
          lineHeight: '1.167',
          color: 'primary.main',
        },

        '& p': {
          fontSize: '1.25rem',
          fontWeight: '600',
          lineHeight: '1.167',
          color: 'rgb(54, 65, 82)',
        },
      },
    },

    '& .form': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      gap: '16px',
    },

    '& .offers': {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',

      '&__list': {
        display: 'flex',
        flexDirection: 'column',

        '& h6': {
          margin: '0px',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'rgb(18, 25, 38)',
          lineHeight: '1.75',
          textDecoration: 'none',
        },

        '& ul': {
          margin: '0',
          paddingLeft: '18px',

          '& li': {
            fontSize: '0.875rem',
            lineHeight: '1.334em',
            margin: '8px 0px',
            fontWeight: '500',
          },
        },
      },
    },
  },
};
