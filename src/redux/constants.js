import axios from 'axios';
import { store } from './store.js';
import { refreshUser } from './auth/operations.js';

export const INITIAL_STATE = {
  auth: {
    token: null,
    isRefreshing: false,
    showOnboardingTour: false,
    isLoading: false,
    isError: false,
  },
  user: { user: {}, countUser: null, isLoading: false, isError: false },
  water: {
    infoByToday: { portions: [], completionRate: null },
    infoBySelectedDay: [],
    infoByMonth: { date: '', days: [] },
    selectedDate: null,
    isLoading: false,
    isError: false,
  },
};

export const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://aquatracker-node.onrender.com',
  // baseURL: 'https://project-digitall3-0-n.onrender.com',
  withCredentials: true,
});

let cancelTokens = [];

AXIOS_INSTANCE.interceptors.request.use(
  request => {
    if (!request.url.includes('register') && !request.url.includes('signin')) {
      const {
        auth: { token },
      } = store.getState();
      request.headers.Authorization = `Bearer ${token}`;
      const source = axios.CancelToken.source();
      request.cancelToken = source.token;
      cancelTokens.push(source);
      return request;
    } else {
      return request;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

AXIOS_INSTANCE.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    try {
      const originalRequest = error.config;
      console.log('error :>> ', error);
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.data.message.includes('Access token expired') &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;

        if (!store.getState().auth.isRefreshing) {
          try {
            cancelTokens.forEach(source => {
              source.cancel();
            });
            cancelTokens = [];
            await store.dispatch(refreshUser());
            return await AXIOS_INSTANCE(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }
      }
      throw error.response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
