import { sortingOptions } from '../../../../config';
import useSort from '../../useSort';
import SortOption from './SortOption';
import StyledSortList from './StyledSortList';

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
