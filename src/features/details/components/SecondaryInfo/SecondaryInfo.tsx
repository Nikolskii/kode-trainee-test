import styled from 'styled-components';
import Age from './Age';
import Birthday from './Birthday';
import Phone from './Phone';
import Wrapper from './Wrapper';

const StyledSecondaryInfo = styled.section`
  padding: 6px 18px;
  display: flex;
  flex-direction: column;
`;

const SecondaryInfo = () => {
  return (
    <StyledSecondaryInfo>
      <Wrapper>
        <Birthday>5 июня 1996</Birthday>
        <Age>24 года</Age>
      </Wrapper>
      <Phone>+7 (999) 900 90 90</Phone>
    </StyledSecondaryInfo>
  );
};

export default SecondaryInfo;
