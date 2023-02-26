import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import SearchInput from './SearchInput';

const StyledSearchBar = styled.section``;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SearchForm>
        <SearchInput />
      </SearchForm>
      {/* <SortButton /> */}
    </StyledSearchBar>
  );
};

export default SearchBar;
