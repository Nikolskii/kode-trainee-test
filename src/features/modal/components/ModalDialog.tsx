import styled from 'styled-components';

import { ModalProps } from './Modal';
import { ModalTitle } from './ModalTitle';
import ModalCloseButton from './ModalCloseButton';

const StyledModalDialog = styled.section`
  width: 373px;
  background-color: var(--colors-bg);
  border-radius: 20px;
  position: relative;
  padding: 24px 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;
`;

const ModalDialog = ({ children, title }: ModalProps) => {
  return (
    <StyledModalDialog>
      <ModalTitle>{title}</ModalTitle>
      {children}
      <ModalCloseButton />
    </StyledModalDialog>
  );
};

export default ModalDialog;
