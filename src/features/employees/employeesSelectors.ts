import { RootState } from '../../app/store';

import { ControlsSlice } from '../controls/controlsSlice';

export const selectAllEmployees = (state: RootState) => state.employees.list;

export const selectSortedEmployees = (
  state: RootState,
  { search, sort, departament }: ControlsSlice,
) => {
  console.log(`
    search: ${search}, 
    sort: ${sort}, 
    departament: ${departament}
  `);

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

  return filteredEmployess;
};
