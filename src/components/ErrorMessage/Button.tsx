import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: var(--colors-accent);
  transition: opacity 0.4s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export default Button;
