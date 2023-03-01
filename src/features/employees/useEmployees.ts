import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { Employee } from '../../types';
import { selectControls } from '../controls/controlsSelectors';
import { getEmployees } from './employeesAsyncActions';
import { selectSortedEmployees } from './employeesSelectors';

const useEmployees = (): [Employee[]] => {
  const dispatch = useAppDispatch();

  const controls = useSelector(selectControls);

  const employees = useSelector((state: RootState) =>
    selectSortedEmployees(state, controls),
  );

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return [employees];
};

export default useEmployees;
