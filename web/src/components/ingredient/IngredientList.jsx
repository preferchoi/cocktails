import { Button, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useIngredientsQuery } from '../../generated/graphql.tsx';
import ListCelll from '../ListCelll.jsx';

export default function IngredientList() {
  const { data, loading, error } = useIngredientsQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <SimpleGrid columns={[2, null, 2]} spacing={[2, null, 10]}>
      {loading && <Skeleton>loading...</Skeleton>}
      {!loading &&
        data &&
        data.Ingredients.map((ingredient, index) => (
          <Button colorScheme="teal">
            <ListCelll key={index} type={"ingredient"} name={ingredient.name} />
          </Button>
        ))}
    </SimpleGrid>
  );
}
