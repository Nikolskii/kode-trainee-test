import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { LinkName } from '../../types';
import { selectDepartment } from './controlsSelectors';
import { setDepartament } from './controlsSlice';

const useDepartament = (): [LinkName, (departament: LinkName) => void] => {
  const dispatch = useAppDispatch();
  const departament = useSelector(selectDepartment);

  const handleDepartament = (departament: LinkName) => {
    dispatch(setDepartament(departament));
  };

  return [departament, handleDepartament];
};

export default useDepartament;
