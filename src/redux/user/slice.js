import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { countUsers, getUser, updateUser } from './operations';
import { INITIAL_STATE } from '../constants';

const handlePending = (state, action) => {
  state.error = false;
  state.loading = true;
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = true;
  toast.error(action.payload);
  console.log('action: ', action);
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
      // .addCase(getUser.fulfilled, handleFulfilled)
      // .addCase(updateUser.fulfilled, handleFulfilled)
      .addCase(getUser.fulfilled, (state, action) => {
        handleFulfilled(state, action);
        const messageId = toast.success('User profile was loaded!');
        console.log('messageId: ', messageId);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        handleFulfilled(state, action);
        toast.success('User profile was successfully updated!');
      })
      .addCase(countUsers.fulfilled, (state, action) => {
        state.countUser = action.payload;
        toast.success('Users count was loaded!');
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
