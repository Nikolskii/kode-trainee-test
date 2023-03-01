import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LinkName } from '../../types';

type ControlsSlice = {
  search: string;
  sort: 'alphabet' | 'birthday';
  departament: LinkName;
};

const initialState: ControlsSlice = {
  search: '',
  sort: 'alphabet',
  departament: 'Все',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setDepartament: (state, action: PayloadAction<LinkName>) => {
      state.departament = action.payload;
    },
  },
});

export const { setDepartament } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
