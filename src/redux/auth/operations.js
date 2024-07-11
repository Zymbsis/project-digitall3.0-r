import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// -----------------------------------
axios.defaults.baseURL = 'smeUrl';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

// ????????????????????????????????????????????????????
export const register = createAsyncThunk(
  'auth/register',
  // credentials дані користувача з форми
  async (credentials, thunkAPI) => {
    try {
      // ----------------------------------------
      await axios.post('', credentials);
      //   ---------------------------------------
      const response = await axios.post('', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  // credentials дані користувача з форми
  async (credentials, thunkAPI) => {
    try {
      // ---------------------------------------------------
      const response = await axios.post('', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    //   ---------------------------
    await axios.post('');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    setAuthHeader(token);
    const response = await axios.get('/users/current');
    return response.data;
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
