import { Routes, Route } from 'react-router-dom';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

import EmployeePage from './pages/EmployeePage';
import EmployeesPage from './pages/EmployeesPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
        <Route path="/employee/:employeeId" element={<EmployeePage />} />
        <Route path="*" element={<ErrorMessage isPageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
