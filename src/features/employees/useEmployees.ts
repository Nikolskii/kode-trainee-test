import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { Employee } from '../../types';
import { selectControls } from '../controls/controlsSelectors';
import { getEmployees } from './employeesAsyncActions';
import { selectSortedEmployees } from './employeesSelectors';

const useEmployees = (): [Employee[], Employee[], Employee[]] => {
  const dispatch = useAppDispatch();
  const controls = useSelector(selectControls);

  const currentDate = new Date().toISOString().slice(5, 10);
  const currentYearEmployees: Employee[] = [];
  const nextYearEmployees: Employee[] = [];

  const allEmployees = useSelector((state: RootState) =>
    selectSortedEmployees(state, controls),
  );

  allEmployees.forEach((employee) => {
    if (employee.birthday.slice(5, 10) < currentDate) {
      nextYearEmployees.push(employee);
    } else {
      currentYearEmployees.push(employee);
    }
  });

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return [allEmployees, currentYearEmployees, nextYearEmployees];
};

export default useEmployees;
