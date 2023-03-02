import { RootState } from '../../app/store';

import { ControlsSlice } from '../controls/controlsSlice';

export const selectAllEmployees = (state: RootState) => state.employees.list;

export const selectSortedEmployees = (
  state: RootState,
  { search, sort, departament }: ControlsSlice,
) => {
  console.log(sort);

  return state.employees.list;
};
