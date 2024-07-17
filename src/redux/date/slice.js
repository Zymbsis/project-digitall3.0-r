import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../constants.js';
import { getInfoByDay } from './operations';

const dateSlice = createSlice({
  name: 'date',
  initialState: INITIAL_STATE.date,
  extraReducers: builder => {
    builder
      .addCase(getInfoByDay.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedDate = action.payload.date;
        state.selectedDateInfo = action.payload.portions;
        state.completionRate = action.payload.completionRate;
      })

      .addCase(getInfoByDay.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getInfoByDay.rejected, (state, action) => {
        state.selectedDate = null;
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const dateReducer = dateSlice.reducer;
