import { links } from '../../../config';
import { NavBarLink } from './NavBarLink';

interface LinksListProps {
  handleClick: (department: string) => void;
  currentLink: string;
}

const LinksList = ({ handleClick, currentLink }: LinksListProps) => {
  const linksList = links.map((link) => (
    <li key={link.name}>
      <NavBarLink
        active={link.path === currentLink}
        onClick={() => handleClick(link.path)}
      >
        {link.name}
      </NavBarLink>
    </li>
  ));

  return <>{linksList}</>;
};

export default LinksList;
