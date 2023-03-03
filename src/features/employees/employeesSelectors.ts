import { RootState } from '../../app/store';

import { ControlsSlice } from '../controls/controlsSlice';

export const selectSortedEmployees = (
  state: RootState,
  { search, sort, departament }: ControlsSlice,
) => {
  let filteredEmployess = state.employees.list;

  // Фильтр по имени, фамилии, тегу
  if (search.length > 0)
    filteredEmployess = filteredEmployess.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
        employee.userTag.toLowerCase().includes(search.toLowerCase()),
    );

  // Фильтр по департаменту
  if (departament !== 'all')
    filteredEmployess = filteredEmployess.filter(
      (employee) => employee.department === departament,
    );

  // Сортировка по алфавиту
  if (sort === 'alphabet')
    filteredEmployess = [...filteredEmployess].sort((a, b) =>
      a.firstName.localeCompare(b.firstName),
    );

  // Сортировка по дню рождения
  if (sort === 'birthday')
    filteredEmployess = [...filteredEmployess].sort(
      (a, b) =>
        new Date(a.birthday.slice(5)).valueOf() -
        new Date(b.birthday.slice(5)).valueOf(),
    );

  return filteredEmployess;
};
