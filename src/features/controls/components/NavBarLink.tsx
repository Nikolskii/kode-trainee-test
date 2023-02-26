import styled from 'styled-components';

interface NavBarLinkProps {
  active: boolean;
}

export const NavBarLink = styled.button<NavBarLinkProps>`
  font-weight: ${({ active }) => (active ? 600 : 500)};
  color: ${({ active }) => (active ? '#050510' : '#97979b')};
  border-bottom: ${({ active }) => (active ? '2px solid #6534ff' : 'none')};
  border: none;
  background-color: transparent;
  padding: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  padding: 0px 12px 7px;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
