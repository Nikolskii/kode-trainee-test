import { ReactNode } from 'react';
import ModalDialog from './ModalDialog';

import { StyledModal } from './StyledModal';

export interface ModalProps {
  children: ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  return (
    <StyledModal isOpen>
      <ModalDialog title={title}>{children}</ModalDialog>
    </StyledModal>
  );
};

export default Modal;
