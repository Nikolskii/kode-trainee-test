import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Header from '../components/Header';
import Main from '../components/Main';
import EmployeeDetails from '../features/details/components/EmployeeDetails';
import useDetails from '../features/details/useDetails';
import useEmployees from '../features/employees/useEmployees';

const EmployeePage = () => {
  const [employee] = useDetails();
  const [status] = useEmployees();

  return (
    <div>
      {!employee && status !== 'loading' && <ErrorMessage isPageNotFound />}
      {employee && (
        <>
          <Header />
          <Main>
            <EmployeeDetails />
          </Main>
        </>
      )}
    </div>
  );
};

export default EmployeePage;
