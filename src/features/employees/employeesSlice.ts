import { createSlice } from '@reduxjs/toolkit';

import { Employee, Status } from '../../types';
import { getEmployees } from './employeesAsyncActions';

type EmployeesSlice = {
  list: Employee[];
  status: Status;
  error: string | null;
};

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
    });
    builder.addCase(getEmployees.rejected, (state) => {
      state.status = 'rejected';
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.status = 'received';
      state.list = action.payload.data.items;
    });
  },
});

export const employeesReducer = employeesSlice.reducer;
