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
    dailyIntake: [],
    monthlyStats: [],
    currentDate: null,
    loading: false,
    error: null,
  },
  date: {
    selectedDate: null,
    selectedDateInfo: [],
    completionRate: null,
    loading: false,
    error: null,
  },
};

export const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://aquatracker-node.onrender.com',
});

AXIOS_INSTANCE.defaults.withCredentials = true;
