import ModalProps from '../../../interfaces/modalProps';
import useModal from '../useModal';
import ModalDialog from './ModalDialog';
import StyledModal from './StyledModal';

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
