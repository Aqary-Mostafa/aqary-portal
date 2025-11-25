import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CrmHeaderSlice {
  breadcrumbs?: ({ label: string; link: string } | undefined)[];
  pageHeader?: string;
}

const initialState: CrmHeaderSlice = {
  breadcrumbs: [],
  pageHeader: undefined,
};

const crmHeaderSlice = createSlice({
  name: 'crmheader',
  initialState,
  reducers: {
    setBreadCrumbs: (
      state,
      action: PayloadAction<CrmHeaderSlice['breadcrumbs']>
    ) => {
      state.breadcrumbs = action.payload;
    },
    setPageHeader: (
      state,
      action: PayloadAction<CrmHeaderSlice['pageHeader']>
    ) => {
      state.pageHeader = action.payload;
    },
  },
});

export const { setBreadCrumbs, setPageHeader } = crmHeaderSlice.actions;
export default crmHeaderSlice.reducer;
