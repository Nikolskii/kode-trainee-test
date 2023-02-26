import { useState } from 'react';
import styled from 'styled-components';

import { NavBarList } from './NavBarList';
import { NavBarListItem } from './NavBarListItem';
import { NavBarLink } from './NavBarLink';
import { links } from '../../../config';

const StyledNavBar = styled.nav``;

const NavBar = () => {
  const [currentLink, setCurrentLink] = useState('all');

  const handleLinkClick = (department: string) => {
    setCurrentLink(department);
  };

  const linksList = links.map((link) => (
    <NavBarListItem key={link.name}>
      <NavBarLink
        active={link.path === currentLink}
        onClick={() => handleLinkClick(link.path)}
      >
        {link.name}
      </NavBarLink>
    </NavBarListItem>
  ));

  return (
    <StyledNavBar>
      <NavBarList>{linksList}</NavBarList>
    </StyledNavBar>
  );
};

export default NavBar;
