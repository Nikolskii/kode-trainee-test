import styled from 'styled-components';
import PseudoProps from '../../../../interfaces/pseudoProps';

const Pseudo = styled.span<PseudoProps>`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  border: ${({ isChecked }) => (isChecked ? '7px' : '2px')} solid
    var(--colors-accent);
  border-radius: 50%;
`;

export default Pseudo;
