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
      console.log('pending...');
    });
    builder.addCase(getEmployees.rejected, (state) => {
      console.log('rejected...');
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      console.log('its ok...');
      state.list = action.payload.data.items;
    });
  },
});

export const employeesReducer = employeesSlice.reducer;
