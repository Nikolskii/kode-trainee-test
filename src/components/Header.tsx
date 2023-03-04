import React from 'react';
import styled from 'styled-components';
import BackButton from './BackButton';

const StyledHeader = styled.header`
  background-color: var(--colors-rest-secondary);
  padding: 22px 24px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <BackButton to="/" />
    </StyledHeader>
  );
};

export default Header;
