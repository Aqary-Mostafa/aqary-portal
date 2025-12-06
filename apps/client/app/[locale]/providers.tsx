'use client';
import MuiProvider from '@/providers/muiProvider';
import store from '@/store';
import { Provider } from 'react-redux';

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <MuiProvider>{children}</MuiProvider>
    </Provider>
  );
}
