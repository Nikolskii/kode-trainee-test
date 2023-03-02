import { Link, Sort } from './types';

const BASE_URL =
  'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=';

export const ALL_EMPLOYEES = BASE_URL + 'all';

export const links: Link[] = [
  { name: 'Все', path: 'all' },
  { name: 'Designers', path: 'design' },
  { name: 'Analysts', path: 'analytics' },
  { name: 'Managers', path: 'management' },
  { name: 'iOS', path: 'ios' },
  { name: 'Android', path: 'android' },
];

export const sortingOptions: Sort[] = [
  { name: 'По алфавиту', value: 'alphabet' },
  { name: 'По дню рождения', value: 'birthday' },
];
