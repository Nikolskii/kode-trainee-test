import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { selectAllEmployees } from '../employees/employeesSelectors';
import { Employee } from '../../types';
import { useAppDispatch } from '../../app/hooks';
import { getEmployees } from '../employees/employeesAsyncActions';

const useDetails = (): [Employee | undefined] => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const initialEmployees = useSelector(selectAllEmployees);

  const employee = employees.find(
    (employee) => employee.id === params.employeeId,
  );

  useEffect(() => {
    setEmployees(initialEmployees);

    if (initialEmployees.length === 0) {
      dispatch(getEmployees());
    }
  }, [initialEmployees]);

  return [employee];
};

export default useDetails;
