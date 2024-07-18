import { AXIOS_INSTANCE } from '../constants.js';
import { store } from '../store.js';

import { clearToken, setToken } from '../auth/slice.js';

import { refreshUser } from '../auth/operations.js';

AXIOS_INSTANCE.interceptors.response.use(
  function (response) {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const { data } = store.dispatch(refreshUser);
        const newToken = data.data.accessToken;
        store.dispatch(setToken(newToken));
        console.log(newToken);
        AXIOS_INSTANCE.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${newToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return AXIOS_INSTANCE(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        store.dispatch(clearToken());
        window.location.href = '/project-digitall3.0-r/signin';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
