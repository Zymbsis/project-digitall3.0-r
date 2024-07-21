import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { register, logIn, logOut, refreshUser } from './operations';
import { INITIAL_STATE } from '../constants';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE.auth,
  reducers: {
    showOnboarding: (state, action) => {
      state.showOnboardingTour = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
        state.showOnboardingTour = true;
        // state.isLoggedIn = true;
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
        // state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, state => {
        state.loading = false;
        state.error = true;
        toast.error(<b>User login is failed!'</b>);
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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'showOnboardingTour'],
};

const authReducer = authSlice.reducer;
export const { showOnboarding } = authSlice.actions;
export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
