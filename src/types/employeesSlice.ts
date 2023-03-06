import Employee from './employee';
import Error from './error';
import Status from './status';

type EmployeesSlice = {
  list: Employee[];
  status: Status;
  error: Error;
};

export default EmployeesSlice;
