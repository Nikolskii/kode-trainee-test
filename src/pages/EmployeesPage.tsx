import Main from '../components/Main';
import SortList from '../features/controls/components/SortList/SortList';
import TopAppBar from '../features/controls/components/TopAppBar';
import Employees from '../features/employees/components/Employees';
import Modal from '../features/modal/components/Modal';

const EmployeesPage = () => {
  return (
    <div>
      <TopAppBar />
      <Main>
        <Employees />
      </Main>
      <Modal title="Сортировка">
        <SortList />
      </Modal>
    </div>
  );
};

export default EmployeesPage;
