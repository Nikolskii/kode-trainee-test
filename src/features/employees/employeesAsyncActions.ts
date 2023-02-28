import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ALL_EMPLOYEES } from '../../config';

export const getEmployees = createAsyncThunk(
  'employees/getEmployees',
  async () => {
    const responce = await axios({
      method: 'GET',
      url: ALL_EMPLOYEES,
      headers: { 'Content-Type': 'application/json' },
    });

    return responce;
  },
);
