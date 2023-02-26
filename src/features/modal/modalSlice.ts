import { createSlice } from '@reduxjs/toolkit';

type ModalSlice = {
  isOpen: boolean;
};

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
