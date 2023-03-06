import styled from 'styled-components';
import FormProps from '../../../../interfaces/FormProps';

const StyledForm = styled.form`
  width: 100%;
`;

const Form = ({ children }: FormProps) => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
