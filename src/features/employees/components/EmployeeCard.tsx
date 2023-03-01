import styled from 'styled-components';

import { Employee } from '../../../types';
import Avatar from './Avatar';
import Birthday from './Birthday';
import Name from './Name';
import Position from './Position';
import Tag from './Tag';

const StyledEmployeeCard = styled.article`
  display: grid;
  grid-template-columns: 72px auto auto;
  grid-template-rows: auto auto;
  column-gap: 16px;
  row-gap: 2px;
`;

interface EmployeeProps extends Employee {}

const EmployeeCard = (props: EmployeeProps) => {
  const { avatarUrl, firstName, lastName, userTag, position, birthday } = props;

  return (
    <StyledEmployeeCard>
      <Avatar src={avatarUrl} />
      <Name>
        {firstName} {lastName}
        <Tag>{userTag}</Tag>
      </Name>
      <Position>{position}</Position>
      <Birthday>{birthday}</Birthday>
    </StyledEmployeeCard>
  );
};

export default EmployeeCard;
