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
  state.error = action.payload;
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
      .addCase(countUsers.fulfilled, (state, action) => {
        state.countUser = action.payload;
      })
      .addCase(getUser.pending, handlePending)
      .addCase(updateUser.pending, handlePending)
      .addCase(countUsers.pending, handlePending)
      .addCase(getUser.rejected, (state, action) => {
        handleRejected(state, action);
        toast.error(<b>User profile was not loaded!</b>);
      })
      .addCase(updateUser.rejected, (state, action) => {
        handleRejected(state, action);
        //mistake handled over toast.promise, example in UserSettingsFormAvatar
        // toast.error(<b>{action.payload}</b>);
      })
      .addCase(countUsers.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
