import styled from 'styled-components';
import PseudoProps from '../../../../interfaces/PseudoProps';

export const Pseudo = styled.span<PseudoProps>`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border: ${({ isChecked }) => (isChecked ? '7px' : '2px')} solid
    var(--colors-accent);
  border-radius: 50%;
`;
