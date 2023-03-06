import SecondaryInfoProps from '../../../../interfaces/SecondaryInfoProps';
import Age from './Age';
import Birthday from './Birthday';
import Phone from './Phone';
import StyledSecondaryInfo from './StyledSecondaryInfo';
import Wrapper from './Wrapper';

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
