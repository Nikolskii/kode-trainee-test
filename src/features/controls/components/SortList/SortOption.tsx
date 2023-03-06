import styled from 'styled-components';

import Input from './Input';
import { Pseudo } from './Pseudo';
import { OptionName } from './OptionName';
import SortOptionProps from '../../../../interfaces/SortOptionProps';

const StyledSortOption = styled.label`
  display: block;
`;

const SortOption = ({
  option,
  isChecked,
  optionName,
  onClick,
}: SortOptionProps) => {
  return (
    <StyledSortOption htmlFor={option} onClick={onClick}>
      <Input id={option} />
      <Pseudo isChecked={isChecked} />
      <OptionName>{optionName}</OptionName>
    </StyledSortOption>
  );
};

export default SortOption;
