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

let abortControllers = [];

AXIOS_INSTANCE.interceptors.request.use(
  request => {
    if (
      !request.url.includes('register') &&
      !request.url.includes('signin') &&
      !request.url.includes('count') &&
      !request.url.includes('activate')
    ) {
      const {
        auth: { token },
      } = store.getState();
      request.headers.Authorization = `Bearer ${token}`;

      const controller = new AbortController();
      request.signal = controller.signal;
      abortControllers.push(controller);
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
      // console.log('error :>> ', error);
      if (
        error.response &&
        error.response.status === 401 &&
        error.response.data.data.message.includes('Access token expired') &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        if (!store.getState().auth.isRefreshing) {
          try {
            // abortControllers.forEach(controller => {
            //   controller.abort();
            // });
            // abortControllers = [];
            await store.dispatch(refreshUser());
            return await AXIOS_INSTANCE(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }
      }
      if (error.response.data) {
        throw error.response.data;
      }
      throw error;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
