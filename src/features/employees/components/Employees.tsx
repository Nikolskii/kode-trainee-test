import styled from 'styled-components';
import EmployeesList from './EmployeesList';

const StyledEmployees = styled.ul`
  margin: 0;
  padding: 22px 16px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const Employees = () => {
  return (
    <StyledEmployees>
      <EmployeesList />
    </StyledEmployees>
  );
};

export default Employees;
