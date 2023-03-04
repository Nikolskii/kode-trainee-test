import styled from 'styled-components';

import useModal from '../../../modal/useModal';
import useSearch from '../../useSearch';
import useSort from '../../useSort';
import Form from './Form';
import { Input } from './Input';
import { SortButton } from './SortButton';

const StyledSearchBar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background-color: #f7f7f8;
  border-radius: 16px;
`;

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
