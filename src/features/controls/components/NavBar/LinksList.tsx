import { links } from '../../../../config';
import { Link } from './Link';

interface LinksListProps {
  handleClick: (department: string) => void;
  currentLink: string;
}

const LinksList = ({ handleClick, currentLink }: LinksListProps) => {
  const linksList = links.map((link) => (
    <li key={link.name}>
      <Link
        active={link.path === currentLink}
        onClick={() => handleClick(link.path)}
      >
        {link.name}
      </Link>
    </li>
  ));

  return <>{linksList}</>;
};

export default LinksList;
