import { createSlice } from '@reduxjs/toolkit';

type ControlsSlice = {
  search: string;
  sort: 'alphabet' | 'birthday';
};

const initialState: ControlsSlice = {
  search: '',
  sort: 'alphabet',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {},
});

export const controlsReducer = controlsSlice.reducer;
