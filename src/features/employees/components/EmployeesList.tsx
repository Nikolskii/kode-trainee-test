import { useEffect } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { getEmployees } from '../employeesAsyncActions';
import Employee from './Employee';

const EmployeesList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <>
      <Employee />
      <Employee />
      <Employee />
      <Employee />
    </>
  );
};

export default EmployeesList;
