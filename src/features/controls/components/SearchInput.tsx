import styled from 'styled-components';

import searchActiveIcon from '../../../images/search-active-icon.svg';
import searchInactiveIcon from '../../../images/search-inactive-icon.svg';

const StyledSearchInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Введи имя, тег, почту...',
})`
  box-sizing: border-box;
  width: 100%;
  padding: 0 31px;
  outline: none;
  border: none;
  color: var(--text-color-primary);
  background: url(${searchInactiveIcon}) no-repeat;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  caret-color: var(--colors-accent);
  &::placeholder {
    font-weight: 500;
    color: var(--colors-rest);
  }
  &:focus::placeholder {
    color: transparent;
  }
  &:focus {
    background: url(${searchActiveIcon}) no-repeat;
  }
`;

const SearchInput = () => {
  return <StyledSearchInput />;
};

export default SearchInput;
