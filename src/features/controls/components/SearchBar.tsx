import React from 'react';
import styled from 'styled-components';

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
