import EmployeeProps from '../../../interfaces/employeeProps';
import Avatar from './Avatar';
import Birthday from './Birthday';
import Name from './Name';
import Position from './Position';
import StyledEmployeeCard from './StyledEmployeeCard';
import StyledLink from './StyledLink';
import Tag from './Tag';

const EmployeeCard = (props: EmployeeProps) => {
  const {
    id,
    avatarUrl,
    firstName,
    lastName,
    userTag,
    position,
    birthday,
    sort,
  } = props;

  const formattedDateBirthday = new Date(birthday)
    .toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
    .slice(0, -1);

  return (
    <StyledEmployeeCard>
      <StyledLink to={`employee/${id}`}>
        <Avatar src={avatarUrl} />
        <Name>
          {firstName} {lastName}
          <Tag>{userTag}</Tag>
        </Name>
        <Position>{position}</Position>
      </StyledLink>
      {sort === 'birthday' && <Birthday>{formattedDateBirthday}</Birthday>}
    </StyledEmployeeCard>
  );
};

export default EmployeeCard;
