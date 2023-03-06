import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import Employee from '../../types/employee';
import Status from '../../types/status';
import { selectControls } from '../controls/controlsSelectors';
import { getEmployees } from './employeesAsyncActions';
import {
  selectSortedEmployees,
  selectStatusLoading,
} from './employeesSelectors';

const useEmployees = (): [Status, Employee[], Employee[], Employee[]] => {
  const dispatch = useAppDispatch();
  const controls = useSelector(selectControls);
  const status = useSelector(selectStatusLoading);

  const currentYearEmployees: Employee[] = [];
  const nextYearEmployees: Employee[] = [];

  const allEmployees = useSelector((state: RootState) =>
    selectSortedEmployees(state, controls),
  );

  const currentDate = new Date().toISOString().slice(5, 10);

  allEmployees.forEach((employee) => {
    if (employee.birthday.slice(5, 10) < currentDate) {
      nextYearEmployees.push(employee);
    } else {
      currentYearEmployees.push(employee);
    }
  });

  useEffect(() => {
    if (allEmployees.length === 0) {
      dispatch(getEmployees());
    }
  }, []);

  return [status, allEmployees, currentYearEmployees, nextYearEmployees];
};

export default useEmployees;
