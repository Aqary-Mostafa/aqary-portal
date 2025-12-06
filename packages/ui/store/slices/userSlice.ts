import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { THEME_COLORS } from '@/theme/colors';
import { loadState, saveState } from '@/utils/localStorage';

export interface User {
  drawer: {
    isOpen: boolean;
  };
  placement: 'RTL' | 'LTR';
  lang: string;
  theme: 'light' | 'dark';
  colors: {
    primary: {
      main: string;
      light: string;
    };
    action: {
      disabledBackground: string;
    };
  };
  _permissions?: number[] | boolean;
}

const initialState = loadState<User>('user') || {
  drawer: {
    isOpen: true,
  },
  placement: 'LTR',
  lang: 'en',
  theme: 'light',
  colors: THEME_COLORS[0],
  _permissions: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.drawer.isOpen = !state.drawer.isOpen;
      saveState('user', state);
    },
    setUserPermissions: (
      state,
      action: PayloadAction<User['_permissions']>,
    ) => {
      state._permissions = action.payload;
    },
    setTheme: (state, action: PayloadAction<User['theme']>) => {
      state.theme = action.payload;
      saveState('user', state);
    },
    setColors: (state, action: PayloadAction<User['colors']>) => {
      state.colors = action.payload;
      saveState('user', state);
    },
    setLanguage: (state, action: PayloadAction<User['lang']>) => {
      state.lang = action.payload;
      saveState('user', state);
    },
  },
});

export const {
  toggleSidebar,
  setUserPermissions,
  setTheme,
  setColors,
  setLanguage,
} = userSlice.actions;
export default userSlice.reducer;
