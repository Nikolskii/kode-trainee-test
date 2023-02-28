import styled from 'styled-components';
import SortOption from './SortOption';

const StyledSortList = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

const SortList = () => {
  return (
    <StyledSortList>
      <SortOption option="alphabet" isChecked={true} optionName="По алфавиту" />
      <SortOption
        option="birthday"
        isChecked={false}
        optionName="По дню рождения"
      />
    </StyledSortList>
  );
};

export default SortList;
