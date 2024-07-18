import axios from 'axios';

export const INITIAL_STATE = {
  auth: {
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },
  user: { user: {}, isLoading: false, isError: false },
  water: {
    infoByToday: [],
    infoBySelectedDay: [],
    infoByMonth: [],
    selectedDate: null,
    loading: false,
    error: null,
  },
};

export const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://aquatracker-node.onrender.com',
});

AXIOS_INSTANCE.defaults.withCredentials = true;
