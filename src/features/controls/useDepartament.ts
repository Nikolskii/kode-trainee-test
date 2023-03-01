import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { selectDepartment } from './controlsSelectors';
import { setDepartament } from './controlsSlice';

const useDepartament = (): [string, (departament: string) => void] => {
  const dispatch = useAppDispatch();
  const departament = useSelector(selectDepartment);

  const handleDepartament = (departament: string) => {
    dispatch(setDepartament(departament));
  };

  return [departament, handleDepartament];
};

export default useDepartament;
