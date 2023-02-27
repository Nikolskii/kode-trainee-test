import { ModalProps } from './Modal';
import { ModalTitle } from './ModalTitle';
import { ModalCloseButton } from './ModalCloseButton';
import { StyledModalDialog } from './StyledModalDialog';
import useModal from '../useModal';

const ModalDialog = ({ children, title }: ModalProps) => {
  const [isOpen, toggleIsOpen] = useModal();

  return (
    <StyledModalDialog>
      <ModalTitle>{title}</ModalTitle>
      {children}
      <ModalCloseButton onClick={toggleIsOpen} />
    </StyledModalDialog>
  );
};

export default ModalDialog;
