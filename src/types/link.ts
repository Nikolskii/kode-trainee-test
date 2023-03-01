export type LinkName =
  | 'Все'
  | 'Designers'
  | 'Analysts'
  | 'Managers'
  | 'iOS'
  | 'Android';

export type Link = {
  name: LinkName;
  path: string;
};
