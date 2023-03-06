import useModal from '../../../modal/useModal';
import useSearch from '../../useSearch';
import useSort from '../../useSort';
import Form from './Form';
import Input from './Input';
import SortButton from './SortButton';
import StyledSearchBar from './StyledSearchBar';

const SearchBar = () => {
  const [isOpen, toggleIsOpen] = useModal();
  const [search, handleSearch] = useSearch();
  const [sort] = useSort();

  return (
    <StyledSearchBar>
      <Form>
        <Input value={search} onChange={handleSearch} />
      </Form>
      <SortButton onClick={toggleIsOpen} active={sort === 'birthday'} />
    </StyledSearchBar>
  );
};

export default SearchBar;
