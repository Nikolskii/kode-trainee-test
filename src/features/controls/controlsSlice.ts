import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sort } from '../../types';

export type ControlsSlice = {
  search: string;
  sort: Sort;
  departament: string;
};

const initialState: ControlsSlice = {
  search: '',
  sort: 'alphabet',
  departament: 'all',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setDepartament: (state, action: PayloadAction<string>) => {
      state.departament = action.payload;
    },
  },
});

export const { setSearch, setDepartament } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
