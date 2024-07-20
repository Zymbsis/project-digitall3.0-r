import axios from 'axios';
import { store } from './store.js';
import { logOut, refreshUser } from './auth/operations.js';

export const INITIAL_STATE = {
  auth: {
    token: null,
    // isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },
  user: { user: {}, countUser: null, isLoading: false, isError: false },
  water: {
    infoByToday: { portions: [], completionRate: null },
    infoBySelectedDay: [],
    infoByMonth: { date: '', days: [] },
    selectedDate: null,
    loading: false,
    error: null,
  },
};

export const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://aquatracker-node.onrender.com',
  withCredentials: true,
});

AXIOS_INSTANCE.interceptors.request.use(
  request => {
    const {
      auth: { token },
    } = store.getState();

    request.headers['Authorization'] = `Bearer ${token}`;
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

AXIOS_INSTANCE.interceptors.response.use(
  function (response) {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (
      !store.getState().auth.isError &&
      !store.getState().user.isError &&
      !store.getState().water.isError
    ) {
      return AXIOS_INSTANCE(originalRequest);
    }
    if (error.response.data.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const result = await store.dispatch(refreshUser());

        AXIOS_INSTANCE.defaults.headers.common.Authorization =
          result.payload.accessToken;
        console.log('done refreshing session');
        return AXIOS_INSTANCE(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
