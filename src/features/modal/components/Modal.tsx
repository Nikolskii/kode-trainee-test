import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { isModalOpen } from '../modalSelectors';
import ModalDialog from './ModalDialog';

import { StyledModal } from './StyledModal';

export interface ModalProps {
  children: ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  const { isOpen } = useSelector(isModalOpen);

  return (
    <StyledModal isOpen={isOpen}>
      <ModalDialog title={title}>{children}</ModalDialog>
    </StyledModal>
  );
};

export default Modal;
