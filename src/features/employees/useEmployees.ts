import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { Employee } from '../../types';
import { getEmployees } from './employeesAsyncActions';
import { selectSortedEmployees } from './employeesSelectors';

const useEmployees = (): [Employee[]] => {
  const dispatch = useAppDispatch();
  const employees = useSelector((state: RootState) =>
    selectSortedEmployees(state),
  );

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return [employees];
};

export default useEmployees;
