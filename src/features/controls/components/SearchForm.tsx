import { ReactNode } from 'react';
import styled from 'styled-components';

interface SearchFormProps {
  children: ReactNode;
}

const StyledSearchForm = styled.form`
  width: 100%;
`;

const SearchForm = ({ children }: SearchFormProps) => {
  return <StyledSearchForm>{children}</StyledSearchForm>;
};

export default SearchForm;
