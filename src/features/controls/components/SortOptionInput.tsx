import styled from 'styled-components';

interface SortOptionInputProps {
  id: string;
}

const StyledSortOptionInput = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:hover {
    cursor: pointer;
  }
`;

const SortOptionInput = ({ id }: SortOptionInputProps) => {
  return <StyledSortOptionInput id={id} />;
};

export default SortOptionInput;
