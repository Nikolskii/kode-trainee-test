import useDetails from '../useDetails';
import MainInfo from './MainInfo/MainInfo';
import SecondaryInfo from './SecondaryInfo/SecondaryInfo';

const EmployeeDetails = () => {
  const [employee, birthday, phoneNumber, age] = useDetails();

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
          <SecondaryInfo
            birthday={birthday}
            phone={employee.phone}
            formatedPhone={phoneNumber}
            age={age}
          />
        </>
      )}
    </div>
  );
};

export default EmployeeDetails;
