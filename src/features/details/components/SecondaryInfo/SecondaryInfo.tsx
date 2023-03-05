import styled from 'styled-components';
import Age from './Age';
import Birthday from './Birthday';
import Phone from './Phone';
import Wrapper from './Wrapper';

interface SecondaryInfoProps {
  birthday: string | undefined;
  phone: string | undefined;
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
        <Age>0 года</Age>
      </Wrapper>
      <Phone>{props.phone}</Phone>
    </StyledSecondaryInfo>
  );
};

export default SecondaryInfo;
