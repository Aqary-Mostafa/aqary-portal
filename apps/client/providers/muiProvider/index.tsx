import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Roboto } from 'next/font/google';
import { Cairo } from 'next/font/google';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import Notifications from '@/components/notification';

import { RootState } from '@/store';

import { GLOBAL_STYLES } from '@/styles';
import { darkTheme, lightTheme } from '@/theme';
import '@/theme/global.scss';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '700'],
});

const MuiProvider = ({ children }: { children: ReactNode }) => {
  const { theme: mode } = useSelector((state: RootState) => state.user);
  const { locale } = useParams();

  const defaultTheme = mode === 'dark' ? darkTheme : lightTheme;
  const theme = createTheme({
    ...defaultTheme,
    palette: {
      ...defaultTheme.palette,
      primary: {
        ...defaultTheme.palette.primary,
        // ...colors?.primary,
      },
      action: {
        ...defaultTheme.palette.action,
        // ...colors?.action,
      },
    },
    direction: locale === 'ar' ? 'rtl' : 'ltr',
    typography: {
      ...(locale === 'ar' ? cairo.style : roboto.style),
    },
  });

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={GLOBAL_STYLES} />
        <Notifications />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default MuiProvider;
