import { createAsyncThunk } from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from '../constants';
import axios from 'axios';

// ------------------------------------------

// #################
AXIOS_INSTANCE.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    console.log('originalRequest', originalRequest);

    if (
      error.response.status === 401 &&
      // error.response.data.data.message === '' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.post(
          'https://aquatracker-node.onrender.com/users/refresh',
          {},
          { withCredentials: true }
        );

        if (data.data.accessToken) {
          setToken(data.data.accessToken);
        }

        return AXIOS_INSTANCE(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        window.location.href = '/project-digitall3.0-r/signin';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

const setToken = token => {
  AXIOS_INSTANCE.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  AXIOS_INSTANCE.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      await AXIOS_INSTANCE.post('/users/register', credentials);
      const { data } = await AXIOS_INSTANCE.post('/users/login', credentials);
      setToken(data.data.accessToken);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await AXIOS_INSTANCE.post('/users/login', credentials);
      setToken(data.data.accessToken);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await AXIOS_INSTANCE.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedAccessToken = state.auth.token;

    if (persistedAccessToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const { data } = await axios.post(
        'https://aquatracker-node.onrender.com/users/refresh',
        {},
        { withCredentials: true }
      );
      setToken(data.data.accessToken);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
