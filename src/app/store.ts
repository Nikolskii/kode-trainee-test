import { configureStore } from '@reduxjs/toolkit';
import { controlsReducer } from '../features/controls/controlsSlice';
import { modalReducer } from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
