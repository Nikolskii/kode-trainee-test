import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployees = createAsyncThunk(
  'employees/getEmployees',
  async () => {
    const responce = await axios({
      method: 'GET',
      url: `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all`,
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(responce);

    return responce;
  },
);
