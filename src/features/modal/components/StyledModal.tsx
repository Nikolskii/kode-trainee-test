import styled from 'styled-components';

interface StyledModalProps {
  isOpen: boolean;
}

export const StyledModal = styled.div<StyledModalProps>`
  width: 100%;
  height: 100%;
  background-color: rgba(5, 5, 16, 0.16);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: visibility 0.3s, opacity 0.3s;
`;
