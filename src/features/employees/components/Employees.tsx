import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import useEmployees from '../useEmployees';
import EmployeesList from './EmployeesList';
import LoadingList from './LoadingList';
import StyledEmployees from './StyledEmployees';

const Employees = () => {
  const [status, allEmployees] = useEmployees();

  return (
    <StyledEmployees>
      {status === 'loading' && <LoadingList />}

      {allEmployees.length === 0 && status !== 'loading' && (
        <ErrorMessage isEmployeesNotFound />
      )}
      <EmployeesList />
    </StyledEmployees>
  );
};

export default Employees;
