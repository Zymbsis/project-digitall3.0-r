import { createAsyncThunk } from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from '../constants';
import toast from 'react-hot-toast';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await AXIOS_INSTANCE.post(
        '/users/register',
        credentials
      );
      return data.data;
    } catch (error) {
      toast.error(<b>{error.data.message}</b>);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const activateUser = createAsyncThunk(
  'auth/activateUser',
  async (activationToken, thunkAPI) => {
    try {
      const { data } = await AXIOS_INSTANCE.post('/users/activate', {
        activationToken,
      });
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const requestActivationEmail = createAsyncThunk(
  'auth/requestActivationEmail',
  async (activationToken, thunkAPI) => {
    try {
      const { data } = await AXIOS_INSTANCE.post('/users/request-activation', {
        activationToken,
      });
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await AXIOS_INSTANCE.post('/users/login', credentials);
      return data;
    } catch (error) {
      toast.error(<b>{error.data.message}</b>);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await AXIOS_INSTANCE.post('/users/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await AXIOS_INSTANCE.post('/users/refresh');
      return response.data.data;
    } catch (error) {
      thunkAPI.dispatch(logOut());
      return thunkAPI.rejectWithValue(error);
    }
  }
);
