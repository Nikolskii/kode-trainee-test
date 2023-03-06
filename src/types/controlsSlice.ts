import Departament from './departament';
import SortValue from './sortValue';

export type ControlsSlice = {
  search: string;
  sort: SortValue;
  departament: Departament;
};

export default ControlsSlice;
