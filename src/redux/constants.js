import axios from 'axios';
import { store } from './store.js';
import { logOut, refreshUser } from './auth/operations.js';

export const INITIAL_STATE = {
  auth: {
    token: null,
    // isLoggedIn: false,
    isRefreshing: false,
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

// AXIOS_INSTANCE.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async error => {
//     const originalRequest = error.config;

//     if (error.response.data.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       console.log('originalRequest', originalRequest);
//       try {
//         const result = await store.dispatch(refreshUser());

//         AXIOS_INSTANCE.defaults.headers.common.Authorization =
//           result.payload.accessToken;
//         console.log('done refreshing session');
//         return AXIOS_INSTANCE(originalRequest);
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

let cancelTokens = [];

AXIOS_INSTANCE.interceptors.request.use(
  request => {
    const {
      auth: { token },
    } = store.getState();
    request.headers['Authorization'] = `Bearer ${token}`;

    const source = axios.CancelToken.source();
    request.cancelToken = source.token;
    cancelTokens.push(source);
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

let newAccessTokenPromise = null;

AXIOS_INSTANCE.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (!store.getState().auth.isRefreshing) {
        try {
          cancelTokens.forEach(source =>
            source.cancel('Cancelled due to a session refreshing')
          );
          cancelTokens = [];

          newAccessTokenPromise = store.dispatch(refreshUser());

          const accessToken = (await newAccessTokenPromise).payload.accessToken;

          AXIOS_INSTANCE.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

          console.log('refreshed');
          return;
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      originalRequest._retry = true;
      try {
        const accessToken = (await newAccessTokenPromise).payload.accessToken;
        console.log('test');
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return await AXIOS_INSTANCE(originalRequest);
      } catch (retryError) {
        return Promise.reject(retryError);
      }
    }

    return Promise.reject(error);
  }
);
