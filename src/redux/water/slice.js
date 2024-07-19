import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import {
  getInfoByToday,
  getInfoBySelectedDay,
  getInfoByMonth,
  addWaterIntake,
  updateWaterIntake,
  deleteWaterIntake,
} from './operations';
import { INITIAL_STATE } from '../constants';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

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
        if (!setSelectedDay) {
          state.infoByToday = {
            ...state.infoByToday,
            portions: state.infoByToday.portions.push(action.payload),
            completionRate: action.payload.completionRate,
          };
        }
      })
      .addCase(updateWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        if (state.selectedDate) {
          state.infoBySelectedDay = {
            ...state.infoBySelectedDay,
            portions: state.infoBySelectedDay.portions.map(item =>
              item._id === action.payload._id ? action.payload : item
            ),
            completionRate: action.payload.completionRate,
          };
        } else {
          state.infoByToday = {
            ...state.infoByToday,
            portions: state.infoByToday.portions.map(item =>
              item._id === action.payload._id ? action.payload : item
            ),
            completionRate: action.payload.completionRate,
          };
        }
      })
      .addCase(deleteWaterIntake.fulfilled, (state, action) => {
        state.loading = false;
        if (state.selectedDate) {
          state.infoBySelectedDay = action.payload;
        } else {
          state.infoByToday = action.payload;
        }
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
          toast.error(action.payload);
        }
      );
  },
});
export const { setSelectedDay } = waterSlice.actions;
const waterReducer = waterSlice.reducer;
const waterPersistConfig = {
  key: 'water',
  storage,
  whitelist: ['selectedDate'],
};

export const persistedWaterReducer = persistReducer(
  waterPersistConfig,
  waterReducer
);
