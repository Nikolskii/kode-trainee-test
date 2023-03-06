import { useSelector } from 'react-redux';

import onSearch from '../../types/onSearch';
import { useAppDispatch } from '../../app/hooks';
import { selectSearch } from './controlsSelectors';
import { setSearch } from './controlsSlice';

const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch: onSearch = (evt) => {
    dispatch(setSearch(evt.target.value));
  };

  return [search, handleSearch];
};

export default useSearch;
