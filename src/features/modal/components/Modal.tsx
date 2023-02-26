import { ReactNode } from 'react';

import useModal from '../useModal';
import ModalDialog from './ModalDialog';
import { StyledModal } from './StyledModal';

export interface ModalProps {
  children: ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  const [isOpen] = useModal();

  return (
    <StyledModal isOpen={isOpen}>
      <ModalDialog title={title}>{children}</ModalDialog>
    </StyledModal>
  );
};

export default Modal;
