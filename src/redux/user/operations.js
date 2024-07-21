import { createAsyncThunk } from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from '../constants';
import toast from 'react-hot-toast';

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
    } = await AXIOS_INSTANCE.get('/users/current');

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
    return thunkAPI.rejectWithValue(error);
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
      } = await AXIOS_INSTANCE.patch('/users/update', payload);

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
      toast.error(<b>{error.data.message}</b>);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const countUsers = createAsyncThunk(
  'user/countUsers',
  async (_, thunkAPI) => {
    try {
      const {
        data: {
          data: { count },
        },
      } = await AXIOS_INSTANCE.get('/users/count');
      return count;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
