import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getInfoByToday,
  getInfoBySelectedDay,
  getInfoByMonth,
  addWaterIntake,
  updateWaterIntake,
  deleteWaterIntake,
} from './operations';
import { INITIAL_STATE } from '../constants';

const waterSlice = createSlice({
  name: 'water',
  initialState: INITIAL_STATE.water,
  reducers: {
    setSelectedDay: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getInfoByToday.fulfilled, (state, action) => {
        state.loading = false;
        state.infoByToday = action.payload;
      })
      .addCase(getInfoBySelectedDay.fulfilled, (state, action) => {
        state.loading = false;
        state.infoBySelectedDay = action.payload;
      })
      .addCase(getInfoByMonth.fulfilled, (state, action) => {
        state.loading = false;
        state.infoByMonth = action.payload;
      })
      .addCase(addWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.infoByToday.push(action.payload);
      })
      .addCase(updateWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.infoByToday = state.infoByToday.map(item =>
          item._id === action.payload._id ? action.payload : item
        );
        state.infoBySelectedDay = state.infoBySelectedDay.map(item =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(deleteWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.infoByToday = state.infoByToday.filter(
          item => item._id !== action.payload
        );
        state.infoBySelectedDay = state.infoBySelectedDay.filter(
          item => item._id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          getInfoByToday.pending,
          getInfoBySelectedDay.pending,
          getInfoByMonth.pending,
          addWaterIntake.pending,
          updateWaterIntake.pending,
          deleteWaterIntake.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getInfoByToday.rejected,
          getInfoBySelectedDay.rejected,
          getInfoByMonth.rejected,
          addWaterIntake.rejected,
          updateWaterIntake.rejected,
          deleteWaterIntake.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});
export const { setSelectedDay } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
