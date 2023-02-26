import { useState } from 'react';

import { NavBarList } from './NavBarList';
import LinksList from './LinksList';

const NavBar = () => {
  const [currentLink, setCurrentLink] = useState('all');

  const handleLinkClick = (department: string) => {
    setCurrentLink(department);
  };

  return (
    <nav>
      <NavBarList>
        <LinksList handleClick={handleLinkClick} currentLink={currentLink} />
      </NavBarList>
    </nav>
  );
};

export default NavBar;
