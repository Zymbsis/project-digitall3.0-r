import { createAsyncThunk } from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from '../constants.js';

export const getInfoByDay = createAsyncThunk(
  'date/getInfoByDay',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await AXIOS_INSTANCE.get(`/water/day/${date}`);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
  // Example: getInfoByDay('2024-07-02')
);
