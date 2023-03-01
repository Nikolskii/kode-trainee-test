import { useState } from 'react';

import { NavBarList } from './NavBarList';
import LinksList from './LinksList';
import useDepartament from '../../useDepartament';

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
