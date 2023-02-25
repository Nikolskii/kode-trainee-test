import { Routes, Route } from 'react-router-dom';

import EmployeePage from './pages/EmployeePage';
import EmployeesPage from './pages/EmployeesPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
        <Route path="/details/:employeeId" element={<EmployeePage />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
};

export default App;
