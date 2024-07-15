import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },

  extraReducers: builder =>
    builder
      // .addCase(register.pending, state => {
      //   state.loading = true;
      //   state.error = false;
      // })
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.user = action.payload.data;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      // .addCase(register.rejected, state => {
      //   state.loading = false;
      //   state.error = true;
      // })
      // .addCase(logIn.pending, state => {
      //   state.loading = true;
      //   state.error = false;
      // })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.token = action.payload.data.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
      })
      // .addCase(logIn.rejected, state => {
      //   state.loading = false;
      //   state.error = true;
      // })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(isAnyOf(register.pending, logIn.pending), state => {
        state.loading = true;
        state.error = false;
      })
      .addMatcher(isAnyOf(register.rejected, logIn.rejected), state => {
        state.loading = false;
        state.error = true;
      }),
});

export const authReducer = authSlice.reducer;
