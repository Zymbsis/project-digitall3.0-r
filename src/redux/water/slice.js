import { createSlice } from '@reduxjs/toolkit';

const waterSlice = createSlice({
  name: 'water',
  initialState: null,
});

export const waterReducer = waterSlice.reducer;
