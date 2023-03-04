import useSort from '../../controls/useSort';
import useEmployees from '../useEmployees';
import DividingLine from './DividingLine';
import EmployeeCard from './EmployeeCard';

const EmployeesList = () => {
  const [status, allEmployees, currentYearEmployees, nextYearEmployees] =
    useEmployees();
  const [sort, handleSort] = useSort();

  return (
    <>
      {/* Сортировка сотрудников по алфавиту */}
      {sort === 'alphabet' &&
        allEmployees.map((employee) => (
          <EmployeeCard {...employee} key={employee.id} />
        ))}

      {/* Сортировка сотрудников по дню рождения */}
      {sort === 'birthday' && (
        <>
          {currentYearEmployees.map((employee) => (
            <EmployeeCard {...employee} sort={sort} key={employee.id} />
          ))}
          {nextYearEmployees.length > 0 && <DividingLine />}

          {nextYearEmployees.map((employee) => (
            <EmployeeCard {...employee} sort={sort} key={employee.id} />
          ))}
        </>
      )}
    </>
  );
};

export default EmployeesList;
