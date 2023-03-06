import styled from 'styled-components';
import StyledModalProps from '../../../interfaces/styledModalProps';

const StyledModal = styled.div<StyledModalProps>`
  width: 100%;
  height: 100%;
  background-color: rgba(5, 5, 16, 0.16);
  position: fixed;
  top: 0;
  left: 0;
`;

export default StyledModal;
