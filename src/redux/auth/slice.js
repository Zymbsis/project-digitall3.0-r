import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { INITIAL_STATE } from '../constants';

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE.auth,
  reducers: {
    clearToken: state => {
      state.token = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
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
export const { setToken, clearToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
