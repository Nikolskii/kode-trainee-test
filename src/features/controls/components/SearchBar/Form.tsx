import { ReactNode } from 'react';
import styled from 'styled-components';

interface FormProps {
  children: ReactNode;
}

const StyledForm = styled.form`
  width: 100%;
`;

const Form = ({ children }: FormProps) => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
