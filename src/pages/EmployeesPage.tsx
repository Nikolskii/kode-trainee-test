import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Main from '../components/Main';
import SortList from '../features/controls/components/SortList/SortList';
import TopAppBar from '../features/controls/components/TopAppBar';
import Employees from '../features/employees/components/Employees';
import useEmployees from '../features/employees/useEmployees';
import Modal from '../features/modal/components/Modal';

const EmployeesPage = () => {
  const [status] = useEmployees();

  return (
    <div>
      {status === 'rejected' ? (
        <ErrorMessage isError />
      ) : (
        <>
          <TopAppBar />
          <Main>
            <Employees />
          </Main>
          <Modal title="Сортировка">
            <SortList />
          </Modal>
        </>
      )}
    </div>
  );
};

export default EmployeesPage;
