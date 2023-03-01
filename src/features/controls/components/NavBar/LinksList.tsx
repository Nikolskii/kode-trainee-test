import { links } from '../../../../config';
import useDepartament from '../../useDepartament';
import { Link } from './Link';

const LinksList = () => {
  const [departament, handleDepartament] = useDepartament();

  const linksList = links.map((link) => (
    <li key={link.name}>
      <Link
        active={link.name === departament}
        onClick={() => handleDepartament(link.name)}
      >
        {link.name}
      </Link>
    </li>
  ));

  return <>{linksList}</>;
};

export default LinksList;
