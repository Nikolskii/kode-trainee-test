import styled from 'styled-components';

interface InputProps {
  id: string;
}

const StyledInput = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:hover {
    cursor: pointer;
  }
`;

const Input = ({ id }: InputProps) => {
  return <StyledInput id={id} />;
};

export default Input;
