import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterStatus } from '../interface';
import type { RootState } from './store';

export type FilterStatusSlice = {
  status: FilterStatus;
};

const initialState: FilterStatusSlice = {
  status: 'ALL',
};

export const filterStatusSlice = createSlice({
  name: 'filterStatus',
  initialState,
  reducers: {
    setFilterStatus: (state, action: PayloadAction<FilterStatus>) => {
      state.status = action.payload;
    },
  },
});
export const { setFilterStatus } = filterStatusSlice.actions;

export const selectFilterStatus = (state: RootState) =>
  state.filterStatus.status;

export default filterStatusSlice.reducer;
