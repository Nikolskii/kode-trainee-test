import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../app/hooks';
import { SortValue } from '../../types';
import { toggleVisibility } from '../modal/modalSlice';
import { selectSort } from './controlsSelectors';
import { setSort } from './controlsSlice';

const useSort = (): [SortValue, (sort: SortValue) => void] => {
  const dispatch = useAppDispatch();
  const sort = useSelector(selectSort);

  const handleSort = (sort: SortValue) => {
    dispatch(setSort(sort));
    dispatch(toggleVisibility());
  };

  return [sort, handleSort];
};

export default useSort;
