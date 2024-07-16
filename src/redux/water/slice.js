import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addWaterIntake,
  deleteWaterIntake,
  getInfoByDay,
  getInfoByMonth,
  updateWaterIntake,
} from './operations';
import { INITIAL_STATE } from '../constants';

const waterSlice = createSlice({
  name: 'water',
  initialState: INITIAL_STATE.water,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.dailyIntake.push(action.payload);
      })
      .addCase(updateWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.dailyIntake = state.dailyIntake.map(item =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(deleteWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.dailyIntake = state.dailyIntake.filter(
          item => item._id !== action.payload
        );
      })
      .addCase(getInfoByDay.fulfilled, (state, action) => {
        state.loading = false;
        state.dailyIntake = action.payload;
      })
      .addCase(getInfoByMonth.fulfilled, (state, action) => {
        state.loading = false;
        state.monthlyStats = action.payload;
      })
      .addMatcher(
        isAnyOf(
          addWaterIntake.pending,
          updateWaterIntake.pending,
          deleteWaterIntake.pending,
          getInfoByDay.pending,
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
          getInfoByDay.rejected,
          getInfoByMonth.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});
export const { setSelectedDate } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
