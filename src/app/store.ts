import { configureStore } from '@reduxjs/toolkit';
import { controlsReducer } from '../features/controls/controlsSlice';

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
