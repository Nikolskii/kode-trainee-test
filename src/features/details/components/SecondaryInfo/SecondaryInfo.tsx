import styled from 'styled-components';
import Age from './Age';
import Birthday from './Birthday';
import Phone from './Phone';
import Wrapper from './Wrapper';

interface SecondaryInfoProps {
  birthday: string;
  phone: string;
  formatedPhone: string;
  age: string;
}

const StyledSecondaryInfo = styled.section`
  padding: 6px 18px;
  display: flex;
  flex-direction: column;
`;

const SecondaryInfo = (props: SecondaryInfoProps) => {
  return (
    <StyledSecondaryInfo>
      <Wrapper>
        <Birthday>{props.birthday}</Birthday>
        <Age>{props.age}</Age>
      </Wrapper>
      <Phone href={`tel:${props.phone}`}>{props.formatedPhone}</Phone>
    </StyledSecondaryInfo>
  );
};

export default SecondaryInfo;
