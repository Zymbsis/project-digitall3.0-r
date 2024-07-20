import axios from 'axios';
import { store } from './store.js';
import { logOut, refreshUser } from './auth/operations.js';

export const INITIAL_STATE = {
  auth: {
    token: null,
    isLoggedIn: false,
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

    if (!token && !request.url.includes('/login')) {
      window.location.href = '/project-digitall3.0-r';
      return;
    }
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
    if (error.response.data.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const {
          payload: { accessToken },
        } = await store.dispatch(refreshUser());

        AXIOS_INSTANCE.defaults.headers.common.Authorization = accessToken;

        return AXIOS_INSTANCE(originalRequest);
      } catch (error) {
        await store.dispatch(logOut());

        window.location.href = '/project-digitall3.0-r/signin';
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
