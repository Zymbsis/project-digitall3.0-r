import { createAsyncThunk } from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from '../constants';
import { store } from '../store';

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
    const accessToken = state.auth.token;
    if (accessToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setToken(accessToken);
    try {
      const { data } = await AXIOS_INSTANCE.post('/users/refresh');
      setToken(data.data.accessToken);
      return data.data;
    } catch (error) {
      logOut();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

AXIOS_INSTANCE.interceptors.response.use(
  function (response) {
    return response;
  },
  error => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        store.dispatch(refreshUser());
        // const { data } = store.dispatch(refreshUser());
        // const newToken = data.data.accessToken;
        // AXIOS_INSTANCE.defaults.headers.common[
        //   'Authorization'
        // ] = `Bearer ${newToken}`;
        // originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return AXIOS_INSTANCE(originalRequest);
      } catch (error) {
        store.dispatch(clearToken());
        window.location.href = '/project-digitall3.0-r/signin';
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
