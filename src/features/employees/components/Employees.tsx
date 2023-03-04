import styled from 'styled-components';
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

  console.log(status);

  return (
    <StyledEmployees>
      {status === 'loading' && <LoadingList />}
      <EmployeesList />
    </StyledEmployees>
  );
};

export default Employees;
