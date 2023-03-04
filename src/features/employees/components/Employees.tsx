import styled from 'styled-components';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import useEmployees from '../useEmployees';
import EmployeesList from './EmployeesList';
import LoadingList from './LoadingList';

const StyledEmployees = styled.ul`
  margin: 0;
  padding: 22px 16px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const Employees = () => {
  const [status] = useEmployees();

  return (
    <StyledEmployees>
      {status === 'loading' && <LoadingList />}
      {status === 'rejected' && <ErrorMessage isError />}
      <EmployeesList />
    </StyledEmployees>
  );
};

export default Employees;
