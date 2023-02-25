import { createSlice } from '@reduxjs/toolkit';

type ControlsSlice = {
  search: string;
  sort: 'onAlphabet' | 'onBirthday';
};

const initialState: ControlsSlice = {
  search: '',
  sort: 'onAlphabet',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {},
});

export const controlsReducer = controlsSlice.reducer;
