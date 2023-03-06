import styled from 'styled-components';
import { Link } from 'react-router-dom';

import backIcon from '../images/back-icon.svg';

const BackButton = styled(Link)`
  background: transparent url(${backIcon}) no-repeat center;
  width: 24px;
  height: 24px;
  display: block;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export default BackButton;
