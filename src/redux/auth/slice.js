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
      })
      .addCase(register.rejected, (state, action) => {
        let errorMessage = action.payload;
        if (errorMessage.includes('409')) {
          errorMessage = 'User with this email already exists';
        }
        state.loading = false;
        state.error = action.payload;

        toast.error(<b>{errorMessage}</b>);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logIn.rejected, state => {
        state.loading = false;
        state.error = true;
        toast.error(<b>User login is failed!'</b>);
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
        state.user = action.payload;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        const payloadError = action.payload;
        const stateError = state.error;
        const toastId = toast.error();
        toast.dismiss(toastId);
        if (stateError !== payloadError) {
          if (action.payload.includes('401')) {
            toast.error(
              <b>Refresh authorization expired!, please log in again</b>
            );
          } else {
            toast.error(<b>{action.payload}</b>);
          }
        }
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(register.pending, logIn.pending), state => {
        state.loading = true;
        state.error = false;
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
