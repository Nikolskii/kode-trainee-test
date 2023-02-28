import Main from '../components/Main';
import SortList from '../features/controls/components/SortList/SortList';
import TopAppBar from '../features/controls/components/TopAppBar';
import Modal from '../features/modal/components/Modal';

const EmployeesPage = () => {
  return (
    <div>
      <TopAppBar />
      <Main></Main>
      <Modal title="Сортировка">
        <SortList />
      </Modal>
    </div>
  );
};

export default EmployeesPage;
