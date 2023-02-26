import styled from 'styled-components';

import closeIcon from '../../../images/close-icon.svg';

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
  background: url(${closeIcon}) no-repeat;
  border: none;
  transition: opacity 0.4s;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const ModalCloseButton = () => {
  return <StyledModalCloseButton />;
};

export default ModalCloseButton;
