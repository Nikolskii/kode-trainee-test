import { createSlice } from '@reduxjs/toolkit';
import ModalSlice from '../../types/modalSlice';

const initialState: ModalSlice = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleVisibility } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
