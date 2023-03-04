import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import EmployeeDetails from '../features/details/components/EmployeeDetails';

const EmployeePage = () => {
  return (
    <div>
      <Header />
      <Main>
        <EmployeeDetails />
      </Main>
    </div>
  );
};

export default EmployeePage;
