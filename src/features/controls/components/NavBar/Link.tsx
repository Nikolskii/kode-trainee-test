import styled from 'styled-components';

interface LinkProps {
  active: boolean;
}

export const Link = styled.button<LinkProps>`
  border: none;
  border-bottom: ${({ active }) =>
    active ? '2px solid var(--colors-accent)' : 'none'};
  color: ${({ active }) =>
    active ? 'var(--text-color-primary)' : 'var(--text-color-secondary-light)'};
  font-weight: ${({ active }) => (active ? 600 : 500)};
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
