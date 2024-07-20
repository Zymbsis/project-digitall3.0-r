import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import { INITIAL_STATE } from '../constants';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE.auth,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
        // state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        // state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.token = null;
        // state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        // state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        // state.isLoggedIn = false;
      })
      .addMatcher(isAnyOf(register.pending, logIn.pending), state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(isAnyOf(register.rejected, logIn.rejected), state => {
        state.isLoading = false;
        state.isError = true;
      }),
});
export const { clearToken } = authSlice.actions;
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const authReducer = authSlice.reducer;
export const { setIsRefreshing } = authSlice.actions;
export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
