import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { isModalOpen } from './modalSelectors';
import { toggleVisibility } from './modalSlice';

const useModal = (): [boolean, () => void] => {
  const dispatch = useAppDispatch();
  const isOpen = useSelector(isModalOpen);

  const toggleIsOpen = () => dispatch(toggleVisibility());
  return [isOpen, toggleIsOpen];
};

export default useModal;
