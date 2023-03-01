import { createSlice } from '@reduxjs/toolkit';

type ControlsSlice = {
  search: string;
  sort: 'alphabet' | 'birthday';
  departament:
    | 'Все'
    | 'Designers'
    | 'Analysts'
    | 'Managers'
    | 'iOS'
    | 'Android';
};

const initialState: ControlsSlice = {
  search: '',
  sort: 'alphabet',
  departament: 'Все',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {},
});

export const controlsReducer = controlsSlice.reducer;
