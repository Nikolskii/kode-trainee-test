import styled from 'styled-components';

import SortOptionInput from './SortOptionInput';
import { SortOptionPseudo } from './SortOptionPseudo';
import { SortOptionSpan } from './SortOptionSpan';

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
      <SortOptionInput id={option} />
      <SortOptionPseudo isChecked={isChecked} />
      <SortOptionSpan>{optionName}</SortOptionSpan>
    </StyledSortOption>
  );
};

export default SortOption;
