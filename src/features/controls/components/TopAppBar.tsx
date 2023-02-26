import Title from '../../../components/Title';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

const TopAppBar = () => {
  return (
    <div>
      <Title>Поиск</Title>
      <SearchBar />
      <NavBar />
    </div>
  );
};

export default TopAppBar;
