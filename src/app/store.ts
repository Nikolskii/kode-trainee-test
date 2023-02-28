import { configureStore } from '@reduxjs/toolkit';
import { controlsReducer } from '../features/controls/controlsSlice';
import { employeesReducer } from '../features/employees/employeesSlice';
import { modalReducer } from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    modal: modalReducer,
    employees: employeesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
