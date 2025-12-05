import { configureStore } from "@reduxjs/toolkit";

import crmHeaderSliceReducer from "./slices/crmHeaderSlice";
import userReducer from "./slices/userSlice";
import notificationSlice from "./slices/notification";

export const store = configureStore({
  reducer: {
    user: userReducer,
    crmheader: crmHeaderSliceReducer,
    notification: notificationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
