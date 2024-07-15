import { createSlice } from '@reduxjs/toolkit';
import { getUser, updateUser } from './operations';

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
};

const handlePending = (state, action) => {
  state.error = false;
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = true;
};
const handleFulfilled = (state, action) => {
  state.loading = false;
  state.user = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
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
