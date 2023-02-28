import styled from 'styled-components';

import useModal from '../../../modal/useModal';
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

  return (
    <StyledSearchBar>
      <Form>
        <Input />
      </Form>
      <SortButton onClick={toggleIsOpen} />
    </StyledSearchBar>
  );
};

export default SearchBar;
