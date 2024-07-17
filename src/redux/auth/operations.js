import { createAsyncThunk } from '@reduxjs/toolkit';
// import { AXIOS_INSTANCE } from '../constants';
import axios from 'axios';

// ------------------------------------------
const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://aquatracker-node.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

AXIOS_INSTANCE.interceptors.request.use(
  request => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

// #################
AXIOS_INSTANCE.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    // console.log(originalRequest._retry);
    console.log(error.response.status);
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // originalRequest._retry = false;
      console.log('Token refresh failed:');
      try {
        //  refreshUser();
        // const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(
          'https://aquatracker-node.onrender.com/users/refresh'
        );
        const { accessToken } = response.data;

        AXIOS_INSTANCE.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;

        return AXIOS_INSTANCE(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        // localStorage.removeItem('accessToken');
        // localStorage.removeItem('refreshToken');
        // ------------------------------------------------------
        window.location.href = '/project-digitall3.0-r/signin';
        // ------------------------------------------------------
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
// #######################

// ============================================================================

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
      const { data } = await AXIOS_INSTANCE.post('/users/login', credentials, {
        credentials: 'include',
      });
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

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     setToken(persistedToken);
//     try {
//       const { data } = await AXIOS_INSTANCE.post('/users/refresh');
//       setToken(data.data.accessToken);
//       return data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// ***************************************************************************

// const AXIOS_INSTANCE = axios.create({
//   baseURL: 'https://aquatracker-node.onrender.com',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// AXIOS_INSTANCE.interceptors.request.use(
//   request => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken) {
//       request.headers['Authorization'] = `Bearer ${accessToken}`;
//     }
//     return request;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// const fetchData = async () => {
//   try {
//     const response = await AXIOS_INSTANCE.get('/your/endpoint');
//     console.log('Data successfully fetched:', response.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setToken(persistedToken);
    try {
      const { data } = await AXIOS_INSTANCE.post('/users/refresh');
      setToken(data.data.accessToken);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
