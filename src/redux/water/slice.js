import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getInfoByMonth,
  addWaterIntake,
  updateWaterIntake,
  deleteWaterIntake,
  getInfoByDay,
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
      .addCase(getInfoByDay.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.selectedDate === action.payload.date) {
          state.infoBySelectedDay = action.payload.portions;
        } else {
          state.infoByToday = action.payload;
        }
      })
      .addCase(getInfoByMonth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.infoByMonth = action.payload;
      })
      .addCase(addWaterIntake.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.selectedDate === action.payload.data.date) {
          state.infoBySelectedDay.push(action.payload.data);
        } else {
          state.infoByToday = action.payload.infoByToday;
        }
        state.infoByMonth = action.payload.infoByMonth;
      })
      .addCase(updateWaterIntake.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.selectedDate) {
          state.infoBySelectedDay = state.infoBySelectedDay.map(item =>
            item._id === action.payload.data._id ? action.payload.data : item
          );
        } else {
          state.infoByToday = action.payload.infoByToday;
        }
        state.infoByMonth = action.payload.infoByMonth;
      })
      .addCase(deleteWaterIntake.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.selectedDate) {
          state.infoBySelectedDay = action.payload.infoByDay.portions;
        } else {
          state.infoByToday = action.payload.infoByDay;
        }
        state.infoByMonth = action.payload.infoByMonth;
      })
      .addMatcher(
        isAnyOf(
          getInfoByDay.pending,
          getInfoByMonth.pending,
          addWaterIntake.pending,
          updateWaterIntake.pending,
          deleteWaterIntake.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getInfoByDay.rejected,
          getInfoByMonth.rejected,
          addWaterIntake.rejected,
          updateWaterIntake.rejected,
          deleteWaterIntake.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});
export const { setSelectedDay } = waterSlice.actions;
export const waterReducer = waterSlice.reducer;
