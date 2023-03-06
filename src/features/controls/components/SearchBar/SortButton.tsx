import styled from 'styled-components';

import sortIcon from '../../../../images/sort-icon.svg';
import sortIconActive from '../../../../images/sort-icon-active.svg';
import SortButtonProps from '../../../../interfaces/sortButtonProps';

const SortButton = styled.button<SortButtonProps>`
  width: 21px;
  height: 12px;
  background: ${({ active }) =>
    active ? `url(${sortIconActive})` : `url(${sortIcon})`};
  background-repeat: no-repeat;
  border: none;
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export default SortButton;
