import useSort from '../../controls/useSort';
import useEmployees from '../useEmployees';
import DividingLine from './DividingLine';
import EmployeeCard from './EmployeeCard';

const EmployeesList = () => {
  const [allEmployees, currentYearEmployees, nextYearEmployees] =
    useEmployees();
  const [sort, handleSort] = useSort();

  return (
    <>
      {sort === 'alphabet' ? (
        allEmployees.map((employee) => (
          <EmployeeCard {...employee} key={employee.id} />
        ))
      ) : (
        <>
          {currentYearEmployees.map((employee) => (
            <EmployeeCard {...employee} sort={sort} key={employee.id} />
          ))}
          {nextYearEmployees.length > 0 && <DividingLine />}

          {nextYearEmployees.map((employee) => (
            <EmployeeCard {...employee} sort={sort} key={employee.id} />
          ))}
        </>
      )}{' '}
    </>
  );
};

export default EmployeesList;
