import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';
import Birthday from './Birthday';
import Name from './Name';
import Position from './Position';
import Tag from './Tag';

const StyledEmployee = styled.article`
  display: grid;
  grid-template-columns: 72px auto auto;
  grid-template-rows: auto auto;
  column-gap: 16px;
  row-gap: 2px;
`;

const Employee = () => {
  return (
    <StyledEmployee>
      <Avatar src="https://avatars.githubusercontent.com/u/15583900?v=4" />
      <Name>
        Денис Никольский
        <Tag>dn</Tag>
      </Name>
      <Position>Front</Position>
      <Birthday>5 апреля</Birthday>
    </StyledEmployee>
  );
};

export default Employee;
