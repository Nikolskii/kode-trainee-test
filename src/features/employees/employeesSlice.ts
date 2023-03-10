import { createSlice } from '@reduxjs/toolkit';

import EmployeesSlice from '../../types/employeesSlice';
import { getEmployees } from './employeesAsyncActions';

const initialState: EmployeesSlice = {
  list: [],
  status: 'idle',
  error: null,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(getEmployees.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error.message;
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.status = 'received';
      state.list = action.payload.data.items;
    });
  },
});

export const employeesReducer = employeesSlice.reducer;
