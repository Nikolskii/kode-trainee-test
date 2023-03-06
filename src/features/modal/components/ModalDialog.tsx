import Title from './Title';
import CloseButton from './CloseButton';
import StyledModalDialog from './StyledModalDialog';
import useModal from '../useModal';
import ModalProps from '../../../interfaces/ModalProps';

const ModalDialog = ({ children, title }: ModalProps) => {
  const [isOpen, toggleIsOpen] = useModal();

  return (
    <StyledModalDialog>
      <Title>{title}</Title>
      {children}
      <CloseButton onClick={toggleIsOpen} />
    </StyledModalDialog>
  );
};

export default ModalDialog;
