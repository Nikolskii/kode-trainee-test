import styled from 'styled-components';

import Input from './Input';
import { Pseudo } from './Pseudo';
import { OptionName } from './OptionName';

interface SortOptionProps {
  option: string;
  isChecked: boolean;
  optionName: string;
}

const StyledSortOption = styled.label`
  display: block;
`;

const SortOption = ({ option, isChecked, optionName }: SortOptionProps) => {
  return (
    <StyledSortOption htmlFor={option}>
      <Input id={option} />
      <Pseudo isChecked={isChecked} />
      <OptionName>{optionName}</OptionName>
    </StyledSortOption>
  );
};

export default SortOption;
