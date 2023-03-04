import styled from 'styled-components';

import Title from '../../../../components/Title';
import Avatar from './Avatar';
import Position from './Position';
import Tag from './Tag';
import Wrapper from './Wrapper';

const StyledMainInfo = styled.section`
  background-color: var(--colors-rest-secondary);
  padding: 4px 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
`;

const MainInfo = () => {
  return (
    <StyledMainInfo>
      <Avatar src="https://avatars.githubusercontent.com/u/15583900?v=4" />
      <Wrapper>
        <Title>Денис Никольский</Title>
        <Tag>dn</Tag>
      </Wrapper>
      <Position>Developer</Position>
    </StyledMainInfo>
  );
};

export default MainInfo;
