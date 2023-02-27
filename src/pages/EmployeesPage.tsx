import SortList from '../features/controls/components/SortList';
import TopAppBar from '../features/controls/components/TopAppBar';
import Modal from '../features/modal/components/Modal';

const EmployeesPage = () => {
  return (
    <div>
      <TopAppBar />
      <Modal title="Сортировка">
        <SortList />
      </Modal>
    </div>
  );
};

export default EmployeesPage;
