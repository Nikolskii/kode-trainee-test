import { RootState } from '../../app/store';

export const selectAllEmployees = (state: RootState) => state.employees.list;
