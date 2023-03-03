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

interface EmployeeProps extends Employee {
  sort?: string;
}

const EmployeeCard = (props: EmployeeProps) => {
  const { avatarUrl, firstName, lastName, userTag, position, birthday, sort } =
    props;

  const formattedDateBirthday = new Date(birthday)
    .toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
    .slice(0, -1);

  return (
    <StyledEmployeeCard>
      <Avatar src={avatarUrl} />
      <Name>
        {firstName} {lastName}
        <Tag>{userTag}</Tag>
      </Name>
      <Position>{position}</Position>
      {sort === 'birthday' && <Birthday>{formattedDateBirthday}</Birthday>}
    </StyledEmployeeCard>
  );
};

export default EmployeeCard;
