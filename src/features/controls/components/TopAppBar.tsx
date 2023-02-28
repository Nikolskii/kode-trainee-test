import styled from 'styled-components';

import Title from '../../../components/Title';
import SearchBar from './SearchBar/SearchBar';
import NavBar from './NavBar/NavBar';

const StyledTopAppBar = styled.section`
  padding: 16px 16px 0;
  border-bottom: 0.3px solid var(--colors-rest);
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;

const TopAppBar = () => {
  return (
    <StyledTopAppBar>
      <Title>Поиск</Title>
      <SearchBar />
      <NavBar />
    </StyledTopAppBar>
  );
};

export default TopAppBar;
