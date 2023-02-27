import styled from 'styled-components';

interface SortOptionPseudoProps {
  isChecked: boolean;
}

export const SortOptionPseudo = styled.span<SortOptionPseudoProps>`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border: ${({ isChecked }) => (isChecked ? '7px' : '2px')} solid #6534ff;
  border-radius: 50%;
`;
