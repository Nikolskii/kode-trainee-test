import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { Sort } from '../../types';
import { selectSort } from './controlsSelectors';
import { setSort } from './controlsSlice';

const useSort = (): [string, (sort: string) => void] => {
  const dispatch = useAppDispatch();
  const sort = useSelector(selectSort);

  const handleSort = (sort: string) => {
    dispatch(setSort(sort));
  };

  return [sort, handleSort];
};

export default useSort;
