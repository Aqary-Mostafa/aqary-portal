'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetNotificationRow } from '@/types/notification';

export interface NotificationState {
  isNew?: boolean;
  notfications?: GetNotificationRow[];
  notficationsCount: number;
  closeConnection?: boolean;
}

const initialState: NotificationState = {
  isNew: false,
  notfications: undefined,
  notficationsCount: 0,
  closeConnection: undefined,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setIsNew: (state, action: PayloadAction<NotificationState['isNew']>) => {
      state.isNew = action.payload;
    },
    closeConnection: (
      state,
      action: PayloadAction<NotificationState['closeConnection']>,
    ) => {
      state.closeConnection = action.payload;
    },
    setNoticications: (
      state,
      action: PayloadAction<NotificationState['notfications']>,
    ) => {
      state.notfications = action.payload;
    },
    setCount: (
      state,
      action: PayloadAction<NotificationState['notficationsCount']>,
    ) => {
      state.notficationsCount = action.payload;
    },
  },
});

export const { setIsNew, setNoticications, setCount, closeConnection } =
  notificationSlice.actions;
export default notificationSlice.reducer;
