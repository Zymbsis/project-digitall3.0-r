import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from 'redux/store';
const BASE_URL = 'https://aquatracker-node.onrender.com';
// add BASE_URL to constants
const instance = axios.create({
  baseURL: BASE_URL,
});
const token = store.auth.token; // use store

if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const addWaterIntake = createAsyncThunk(
  'water/addWaterIntake',
  async (waterData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/water', waterData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateWaterIntake = createAsyncThunk(
  'water/updateWaterIntake',
  async ({ id, ...waterData }, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(`/water/${id}`, waterData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteWaterIntake = createAsyncThunk(
  'water/deleteWaterIntake',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/water/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getInfoByDay = createAsyncThunk(
  'water/getInfoByDay',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/water/day/${date}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const getInfoByMonth = createAsyncThunk(
  'water/getInfoByMonth',
  async (month, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/water/month/${month}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
