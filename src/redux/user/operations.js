import { createAsyncThunk } from '@reduxjs/toolkit';
import { AXIOS_INSTANCE } from '../constants';

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
      } = await AXIOS_INSTANCE.patch('/users/update', payload);
      console.log(2);

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
