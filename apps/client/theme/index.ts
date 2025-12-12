'use client';
import { createTheme } from '@mui/material/styles';

import { colors } from '@/theme/colors';

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['100', '300', '400', '500', '700', '900'],
// });

// export const cairo = Cairo({
//   subsets: ['arabic'],
//   weight: ['400', '700'],
// });

declare module '@mui/material/styles' {
  interface Components {
    MuiPickersPopper?: {
      styleOverrides?: {
        paper?: React.CSSProperties;
      };
    };
  }
}

const errorColors = {
  main: '#F44336',
};

const baseTheme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        sx: {
          backgroundColor: 'background.paper',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          // minWidth: '200px',
          borderRadius: '12px',
          backgroundColor: '#F8F9FA',
          border: '1px solid #E0E6ED',
          color: '#7C8BA1',

          '& input[type="file"]': {
            color: '#6C6C6C',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            '::-webkit-file-upload-button': {
              display: 'none',
            },
          },

          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px #F8F9FA inset',
            WebkitTextFillColor: 'inherit',
          },
        },
        notchedOutline: {
          border: '1px solid #F8F9FA',
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        fullWidth: true,
      },

      styleOverrides: {
        paper: {
          boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.06)',
          borderRadius: '12px',

          '& ul': {
            maxHeight: '300px',
            overflowY: 'auto',
          },
        },
        tag: {
          backgroundColor: '#E3F2FD ',
          borderRadius: '8px',
          '& .MuiSvgIcon-root': {
            fill: '#6C6C6C',
          },
        },
        option: {
          height: '42px ',
          color: '#697586 ',
          fontSize: '14px ',
          fontWeight: '400 ',
          lineHeight: '20px ',
          textTransform: 'capitalize',
        },
        groupLabel: {
          backgroundColor: 'red',
          padding: '4px 10px',
          color: colors.light.primary.main,
          fontWeight: '700',
          fontSize: '18px',
          marginBottom: '14px',
          marginTop: '12px',
          textTransform: 'uppercase',
        },
        input: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: '0',
          width: '44px',
          height: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'none',
        },
        switchBase: {
          padding: 0,

          '&.Mui-checked': {
            '& + .MuiSwitch-track': {
              backgroundColor: '#DAE7F9',
              opacity: 1,
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: '#6290CB',
              boxShadow: 'unset',
              '&:hover': {
                boxShadow: 'unset',
              },
            },
          },
        },
        thumb: {
          width: '23.85px',
          height: '24px',
          borderRadius: '24px',
          backgroundColor: '#364152',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'unset',
          },
        },
        track: {
          width: '43.643px',
          height: '17.143px',
          left: '10px',
          borderRadius: '79px',
          backgroundColor: '#E0E0E0',
          opacity: 1,
          transition: 'all 350ms',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '1px solid #DAE7F9 ',
          backgroundColor: '#F4F7FE ',

          '& .MuiSvgIcon-root': {
            display: 'none',
          },

          '&:hover': {
            backgroundColor: '#F4F7FE',
          },

          '&:before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            transition: 'background-color 0.1s',
          },

          '&.Mui-checked': {
            '&:before': {
              backgroundColor: '#6290CB',
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '2px solid #FFFFFF',
            },
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.06)',
          borderRadius: '12px',
        },
        list: {
          maxHeight: '300px',
        },
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.06)',
          borderRadius: '12px',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: '1px solid #eeeeee',
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            '&:nth-child(odd)': {
              backgroundColor: 'rgb(224, 224, 224, 0.2) !important',
            },

            '&:hover': {
              backgroundColor: 'rgb(224, 224, 224, 0.1); !important',
            },
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            border: 'unset',
          },

          '& .mui-lapokc, & .mui-bbxzxe': {
            color: '#121926',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '20px',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: '1px solid #F5F5F5',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          display: 'inline-block',
          padding: '8px 19px',
          borderRadius: '12px',
          minHeight: '44px',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: '2px 8px',
          borderRadius: '12px',
          border: '1px solid  #EEE',
          background: '#F8FAFC',
          boxShadow: 'unset',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiFormLabel: {
      defaultProps: {
        sx: {
          color: 'text.primary',
        },
      },
      styleOverrides: {
        root: {
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '20px',
          marginBottom: '10px',
          '&::first-letter': {
            textTransform: 'uppercase',
          },
        },
        asterisk: {
          color: errorColors.main,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#364152',
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '20px',
          marginTop: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

          '&::first-letter': {
            textTransform: 'uppercase',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#F4F7FE',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          border: '1px solid #6290CB',
          borderRadius: '4px',
          minHeight: 'unset',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#6290CB',
          textTransform: 'capitalize',
          minHeight: '38px',
          height: '38px',

          '&.Mui-selected': {
            background: '#6290CB',
            color: '#fff',
          },
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        row: {
          gap: '16px',
          marginLeft: '8px',

          '& .MuiFormControlLabel-root': {
            gap: '12px',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'unset',
          border: '1px solid #E0E0E0',
          borderRadius: '12px',

          '&:before': {
            backgroundColor: 'red',
            borderRadius: '12px',
            display: 'none',
          },
          '&.Mui-expanded': {
            marginTop: '0px',
            marginBottom: '0px',
          },
          '&:first-of-type': {
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
          },
          '&:last-of-type': {
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
          },
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          elevation: 0,
        },
      },
      styleOverrides: {
        root: {
          '--Paper-overlay': 'none',
        },
      },
    },
  },
});

export const lightTheme = createTheme(baseTheme, {
  cssVariables: true,
  palette: {
    ...colors.light,
    mode: 'light',
    primary: {
      main: '#4880FF',
      light: '#DAE7F9',
      dark: '#3A71ED',
    },
    info: {
      main: '#3565A3',
    },
    success: {
      main: '#00C853',
    },
    warning: {
      main: '#FFC107',
    },
    error: {
      main: errorColors.main,
    },
    text: {
      primary: colors.light.text.primary,
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        groupLabel: {
          backgroundColor: 'rgb(250, 251, 252)',
        },
      },
    },
  },
});

export const darkTheme = createTheme(baseTheme, {
  cssVariables: true,
  palette: {
    ...colors.dark,
    mode: 'dark',
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        groupLabel: {
          backgroundColor: '#212946',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#212946',

          '& .MuiSvgIcon-root': {
            color: '#8492C4',
          },
        },
        notchedOutline: {
          border: '1px solid #212946',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#9092C633',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: '#212946 !important',
          borderColor: '#212946',
        },
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          backgroundColor: '#212946',

          '& .MuiDateCalendar-root, & .MuiSvgIcon-root, & .MuiTypography-root':
            {
              color: '#8492C4',
            },
        },
      },
    },
    MuiIconButton: {
      root: {
        '--IconButton-hoverBg': 'rgba(25, 118, 210, 0.08)',
        '&:hover': {
          backgroundColor: 'rgb(6 115 124)',
        },
      },
    },
  },
});
