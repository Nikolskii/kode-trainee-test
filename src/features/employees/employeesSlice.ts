import { createSlice } from '@reduxjs/toolkit';

import { Employee, Status } from '../../types';

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
});

export const employeesReducer = employeesSlice.reducer;
