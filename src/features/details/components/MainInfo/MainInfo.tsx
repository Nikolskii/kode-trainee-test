import styled from 'styled-components';

import Title from '../../../../components/Title';
import Tag from './Tag';

const StyledMainInfo = styled.section`
  background-color: var(--colors-rest-secondary);
  padding: 4px 0 24px;
  display: flex;
  flex-direction: column;
`;

const MainInfo = () => {
  return (
    <StyledMainInfo>
      <Title>Денис</Title>
      <Tag>dn</Tag>
    </StyledMainInfo>
  );
};

export default MainInfo;
