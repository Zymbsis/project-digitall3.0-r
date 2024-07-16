import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getUser = createAsyncThunk('user/getUser', async (_, thunkAPI) => {
  try {
    const {
      data: {
        data: {
          email,
          name,
          gender,
          dailyNorma,
          activeHours,
          weight,
          avatar,
          createdAt,
        },
      },
    } = await instance.get('/users/current');

    return {
      email,
      name,
      gender,
      dailyNorma,
      activeHours,
      weight,
      avatar,
      createdAt,
    };
  } catch (error) {
    return thunkAPI.rejectWithValue('fetch error');
  }
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (payload, thunkAPI) => {
    try {
      const {
        data: {
          data: {
            email,
            name,
            gender,
            dailyNorma,
            activeHours,
            weight,
            avatar,
            createdAt,
          },
        },
      } = await instance.patch('/users/update', payload);
      return {
        email,
        name,
        gender,
        dailyNorma,
        activeHours,
        weight,
        avatar,
        createdAt,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue('update error');
    }
  }
);
