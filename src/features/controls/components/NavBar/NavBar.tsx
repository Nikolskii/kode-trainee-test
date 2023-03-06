import NavBarList from './NavBarList';
import LinksList from './LinksList';

const NavBar = () => {
  return (
    <nav>
      <NavBarList>
        <LinksList />
      </NavBarList>
    </nav>
  );
};

export default NavBar;
