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
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
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
        state.monthlyStats = action.payload;
      })
      .addCase(addWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.infoByToday.push(action.payload);
      })
      .addCase(updateWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.infoByToday = state.dailyIntake.map(item =>
          item._id === action.payload._id ? action.payload : item
        );
        state.infoBySelectedDay = state.dailyIntake.map(item =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(deleteWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.infoByToday = state.dailyIntake.filter(
          item => item._id !== action.payload
        );
        state.infoBySelectedDay = state.dailyIntake.filter(
          item => item._id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          addWaterIntake.pending,
          updateWaterIntake.pending,
          deleteWaterIntake.pending,
          getInfoByMonth.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addWaterIntake.rejected,
          updateWaterIntake.rejected,
          deleteWaterIntake.rejected,
          getInfoByMonth.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});
export const { setcurrentDate } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
