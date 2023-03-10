import MainInfoProps from '../../../../interfaces/mainInfoProps';
import Avatar from './Avatar';
import Position from './Position';
import StyledMainInfo from './StyledMainInfo';
import Tag from './Tag';
import Title from './Title';
import Wrapper from './Wrapper';

const MainInfo = (props: MainInfoProps) => {
  return (
    <StyledMainInfo>
      <Avatar src={props.avatarUrl} />
      <Wrapper>
        <Title>
          {props.firstName} {props.lastName}
        </Title>
        <Tag>{props.userTag}</Tag>
      </Wrapper>
      <Position>{props.position}</Position>
    </StyledMainInfo>
  );
};

export default MainInfo;
