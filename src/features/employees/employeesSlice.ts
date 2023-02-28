import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
});

export const employeesReducer = employeesSlice.reducer;
