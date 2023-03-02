import styled from 'styled-components';

import { sortingOptions } from '../../../../config';
import useSort from '../../useSort';
import SortOption from './SortOption';

const StyledSortList = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

const SortList = () => {
  const [sort, handleSort] = useSort();

  const optionsList = sortingOptions.map((option) => (
    <SortOption
      key={option.value}
      option={option.value}
      isChecked={sort === option.value}
      optionName={option.name}
      onClick={() => {
        handleSort(option.value);
      }}
    />
  ));

  return <StyledSortList>{optionsList}</StyledSortList>;
};

export default SortList;
