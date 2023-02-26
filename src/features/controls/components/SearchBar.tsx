import styled from 'styled-components';

import SearchForm from './SearchForm';
import SearchInput from './SearchInput';
import { SortButton } from './SortButton';

const StyledSearchBar = styled.section``;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SearchForm>
        <SearchInput />
      </SearchForm>
      <SortButton />
    </StyledSearchBar>
  );
};

export default SearchBar;
