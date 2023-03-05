import useDetails from '../useDetails';
import MainInfo from './MainInfo/MainInfo';
import SecondaryInfo from './SecondaryInfo/SecondaryInfo';

const EmployeeDetails = () => {
  const [employee] = useDetails();

  return (
    <div>
      {employee && (
        <>
          <MainInfo
            avatarUrl={employee.avatarUrl}
            firstName={employee.firstName}
            lastName={employee.lastName}
            userTag={employee.userTag}
            position={employee.position}
          />
          <SecondaryInfo birthday={employee.birthday} phone={employee.phone} />
        </>
      )}
    </div>
  );
};

export default EmployeeDetails;
