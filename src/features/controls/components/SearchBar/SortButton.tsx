import styled from 'styled-components';

import sortIcon from '../../../../images/sort-icon.svg';

export const SortButton = styled.button`
  width: 21px;
  height: 12px;
  background: url(${sortIcon}) no-repeat;
  border: none;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
