import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
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
        state.loading = false;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        toast.success('Registration was successful!');
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
        toast.success('Login was successful!');
      })
      .addCase(logOut.fulfilled, state => {
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
        toast.success('Logout was successful!');
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        toast.success('Refresh was successful!');
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        toast.error('Refresh failed!');
      })
      .addMatcher(isAnyOf(register.pending, logIn.pending), state => {
        state.loading = true;
        state.error = false;
      })
      .addMatcher(isAnyOf(register.rejected, logIn.rejected), state => {
        state.loading = false;
        state.error = true;
        toast.error('Registration and/or login failed!');
      }),
});
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const authReducer = authSlice.reducer;
export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
