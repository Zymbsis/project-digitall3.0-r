import { createSlice } from '@reduxjs/toolkit';
import { getUser, updateUser } from './operations';
import { INITIAL_STATE } from '../constants';

const handlePending = (state, action) => {
  state.error = false;
  state.loading = true;
};
const handleRejected = (state, action) => {
  console.log('action: ', action);

  state.loading = false;
  state.error = true;
};
const handleFulfilled = (state, action) => {
  state.loading = false;
  state.user = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE.user,
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, handleFulfilled)
      .addCase(updateUser.fulfilled, handleFulfilled)
      .addCase(getUser.pending, handlePending)
      .addCase(updateUser.pending, handlePending)
      .addCase(getUser.rejected, handleRejected)
      .addCase(updateUser.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
