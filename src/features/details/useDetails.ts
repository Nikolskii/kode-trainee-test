import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { selectAllEmployees } from '../employees/employeesSelectors';
import { useAppDispatch } from '../../app/hooks';
import { getEmployees } from '../employees/employeesAsyncActions';
import Employee from '../../types/employee';

const useDetails = (): [Employee | undefined, string, string, string] => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const allEmployees = useSelector(selectAllEmployees);

  const employee = employees.find(
    (employee) => employee.id === params.employeeId,
  );

  let birthday: string = '';
  let phoneNumber: string = '';
  let age: string = '';

  // Форматирование дня рождения
  const formatBirthday = (date: string) =>
    new Date(date)
      .toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .slice(0, -3);

  // Форматирование номера телефона
  const formatPhoneNumber = (number: string) =>
    `+7 (${number[2]}${number[3]}${number[4]}) ${number[5]}${number[6]}${number[7]} ${number[8]}${number[9]} ${number[10]}${number[11]}`;

  // Вычисление возраста
  const getAge = (date: string) => {
    const today = new Date();
    const birthDate = new Date(date);
    let nubmerAge = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      nubmerAge--;
    }

    const getWordAge = (age: number) => {
      const strAge = age.toString();
      const lastNum = strAge[strAge.length - 1];

      if (lastNum === '1') {
        return 'год';
      } else if (lastNum === '2' || lastNum === '3' || lastNum === '4') {
        return 'года';
      }
      return 'лет';
    };

    const wordAge = getWordAge(nubmerAge);

    return `${nubmerAge} ${wordAge}`;
  };

  if (employee) {
    birthday = formatBirthday(employee.birthday);
    phoneNumber = formatPhoneNumber(employee.phone);
    age = getAge(employee.birthday);
  }

  useEffect(() => {
    setEmployees(allEmployees);

    if (allEmployees.length === 0) {
      dispatch(getEmployees());
    }
  }, [allEmployees]);

  return [employee, birthday, phoneNumber, age];
};

export default useDetails;
