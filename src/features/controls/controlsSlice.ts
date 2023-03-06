import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ControlsSlice from '../../types/controlsSlice';
import Departament from '../../types/departament';
import SortValue from '../../types/sortValue';

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
    setSort: (state, action: PayloadAction<SortValue>) => {
      state.sort = action.payload;
    },
    setDepartament: (state, action: PayloadAction<Departament>) => {
      state.departament = action.payload;
    },
  },
});

export const { setSearch, setSort, setDepartament } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
