import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { Departament } from '../../types';
import { selectDepartment } from './controlsSelectors';
import { setDepartament } from './controlsSlice';

const useDepartament = (): [
  Departament,
  (departament: Departament) => void,
] => {
  const dispatch = useAppDispatch();
  const departament = useSelector(selectDepartment);

  const handleDepartament = (departament: Departament) => {
    dispatch(setDepartament(departament));
  };

  return [departament, handleDepartament];
};

export default useDepartament;
