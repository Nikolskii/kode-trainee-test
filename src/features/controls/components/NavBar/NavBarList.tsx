import styled from 'styled-components';

export const NavBarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`;
