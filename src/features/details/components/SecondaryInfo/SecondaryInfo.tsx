import Age from './Age';
import Birthday from './Birthday';
import Phone from './Phone';
import StyledSecondaryInfo from './StyledSecondaryInfo';
import Wrapper from './Wrapper';

interface SecondaryInfoProps {
  birthday: string;
  phone: string;
  formatedPhone: string;
  age: string;
}

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
