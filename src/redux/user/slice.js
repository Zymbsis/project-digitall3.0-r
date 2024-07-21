import { createSlice } from '@reduxjs/toolkit';
import { countUsers, getUser, updateUser } from './operations';
import { INITIAL_STATE } from '../constants';

const handlePending = state => {
  state.isError = false;
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
  state.isError = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.user = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE.user,
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, handleFulfilled)
      .addCase(updateUser.fulfilled, handleFulfilled)
      .addCase(countUsers.fulfilled, (state, action) => {
        state.countUser = action.payload;
      })
      .addCase(getUser.pending, handlePending)
      .addCase(updateUser.pending, handlePending)
      .addCase(countUsers.pending, handlePending)
      .addCase(getUser.rejected, handleRejected)
      .addCase(updateUser.rejected, handleRejected)
      .addCase(countUsers.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
