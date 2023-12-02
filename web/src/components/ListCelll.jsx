import { LinkOverlay } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function ListCell({ type, name }) {
  return (
    <LinkOverlay as={Link} to={`/drink?${type}Name=${name}`}>
      {name}
    </LinkOverlay>
  );
}
