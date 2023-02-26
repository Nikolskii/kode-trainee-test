import styled from 'styled-components';

import searchActiveIcon from '../../../images/search-active-icon.svg';
import searchInactiveIcon from '../../../images/search-inactive-icon.svg';

const StyledSearchInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Введи имя, тег, почту...',
})`
  width: 100%;
  padding-left: 31px;
  outline: none;
  border: none;
  color: var(--text-color-primary);
  background: #f7f7f8 url(${searchInactiveIcon}) no-repeat;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  caret-color: var(--colors-accent);
  &::placeholder {
    font-weight: 500;
    color: #c3c3c6;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &:focus {
    background: #f7f7f8 url(${searchActiveIcon}) no-repeat;
  }
`;

const SearchInput = () => {
  return <StyledSearchInput />;
};

export default SearchInput;
