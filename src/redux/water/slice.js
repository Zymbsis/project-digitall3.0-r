import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addWaterIntake,
  deleteWaterIntake,
  getInfoByDay,
  getInfoByMonth,
  updateWaterIntake,
} from './operations';

const INITIAL_STATE = {
  dailyIntake: [],
  monthlyStats: [],
  selectedDate: null,
  loading: false,
  error: null,
};

const waterSlice = createSlice({
  name: 'water',
  initialState: INITIAL_STATE,
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
        const index = state.dailyIntake.findIndex(
          item => item.id === action.payload._id
        );
        if (index !== -1) {
          state.dailyIntake[index] = {
            ...state.dailyIntake[index],
            ...action.payload,
          };
        }
      })

      .addCase(deleteWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        state.dailyIntake = state.dailyIntake.filter(
          item => item.id !== action.payload._id
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
