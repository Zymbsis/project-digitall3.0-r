import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const instance = axios.create({
  // baseURL: BASE_URL, from constants
});


export const addWaterIntake = createAsyncThunk(
  'water/addWaterIntake',
  async (waterData, { rejectWithValue }) => {
    try {
      const response = await instance.post('/water/add', waterData); //update url from backend
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateWaterIntake = createAsyncThunk(
  'water/updateWaterIntake',
  async ({ id, ...waterData }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/water/update/${id}`, waterData); //update url from backend
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteWaterIntake = createAsyncThunk(
  'water/deleteWaterIntake',
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/water/delete/${id}`); //update url from backend
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getInfoByDay = createAsyncThunk(
  'water/getInfoByDay',
  async (date, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/water/getInfoByDay?date=${date}`); //update url from backend
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getInfoByMonth = createAsyncThunk(
  'water/getInfoByMonth',
  async (month, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/water/getInfoByMonth?month=${month}`); //update url from backend
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
