import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 72px auto;
  grid-template-rows: auto auto;
  column-gap: 16px;
  row-gap: 2px;
  transition: opacity 0.4s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export default StyledLink;
