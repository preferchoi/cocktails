import { LinkOverlay } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function ListCell({ type, name }) {
  return (
    <LinkOverlay
      as={Link}
      to={
        type !== 'ingredientCategory'
          ? `/drink?${type}Name=${name}`
          : `/ingredient?${type}Name=${name}`
      }
    >
      {name}
    </LinkOverlay>
  );
}
