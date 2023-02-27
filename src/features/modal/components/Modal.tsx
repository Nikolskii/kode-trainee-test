import { ReactNode } from 'react';

import useModal from '../useModal';
import ModalDialog from './ModalDialog';
import { StyledModal } from './StyledModal';

export interface ModalProps {
  children: ReactNode;
  title: string;
}

const Modal = ({ children, title }: ModalProps) => {
  const [isOpen, toggleIsOpen] = useModal();

  return (
    <>
      {isOpen && (
        <>
          <StyledModal isOpen={isOpen} onClick={toggleIsOpen} />
          <ModalDialog title={title}>{children}</ModalDialog>
        </>
      )}
    </>
  );
};

export default Modal;
