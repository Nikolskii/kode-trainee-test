import useEmployees from '../useEmployees';
import EmployeeCard from './EmployeeCard';

const EmployeesList = () => {
  const [employees] = useEmployees();

  return (
    <>
      {employees.map((employee) => (
        <EmployeeCard {...employee} key={employee.id} />
      ))}
    </>
  );
};

export default EmployeesList;
