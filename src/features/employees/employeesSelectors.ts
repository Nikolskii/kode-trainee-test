import { RootState } from '../../app/store';

export const selectAllEmployees = (state: RootState) => state.employees.list;

export const selectSortedEmployees = (state: RootState) => {
  return state.employees.list;
};
