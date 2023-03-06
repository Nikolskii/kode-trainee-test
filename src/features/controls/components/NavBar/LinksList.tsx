import useDepartament from '../../useDepartament';
import { links } from '../../../../config';
import { Link } from './Link';

const LinksList = () => {
  const [departament, handleDepartament] = useDepartament();

  const linksList = links.map((link) => (
    <li key={link.name}>
      <Link
        active={link.path === departament}
        onClick={() => handleDepartament(link.path)}
      >
        {link.name}
      </Link>
    </li>
  ));

  return <>{linksList}</>;
};

export default LinksList;
