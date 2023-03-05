import styled from 'styled-components';

import Title from '../../../../components/Title';
import Avatar from './Avatar';
import Position from './Position';
import Tag from './Tag';
import Wrapper from './Wrapper';

interface MainInfoProps {
  avatarUrl: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  userTag: string | undefined;
  position: string | undefined;
}

const StyledMainInfo = styled.section`
  background-color: var(--colors-rest-secondary);
  padding: 4px 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
`;

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
