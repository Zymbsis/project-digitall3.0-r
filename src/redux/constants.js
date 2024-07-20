import axios from 'axios';

export const INITIAL_STATE = {
  auth: {
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },
  user: { user: {}, countUser: null, loading: false, error: false },
  water: {
    infoByToday: { date: '', portions: [], completionRate: null },
    infoBySelectedDay: { date: '', portions: [], completionRate: null },
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
