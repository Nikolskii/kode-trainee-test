import SearchBar from './SearchBar/SearchBar';
import NavBar from './NavBar/NavBar';
import Title from './Title';
import StyledTopAppBar from './StyledTopAppBar';

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
