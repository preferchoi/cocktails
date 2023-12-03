import { Button, Heading, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useIngredientCategoryQuery } from '../../generated/graphql.tsx';
import ListCelll from '../ListCelll.jsx';
import { useLocation } from 'react-router-dom';

export default function IngredientList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const { data, loading, error } = useIngredientCategoryQuery({
    variables: {
      ingredientCategoryName: searchParams.get('ingredientCategoryName'),
    },
  });

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <>
      {loading && <Skeleton>loading...</Skeleton>}
      {!loading && data && (
        <Heading mb={6}>
          {data.IngredientCategory?.IngredientCategory?.name.toUpperCase()}
        </Heading>
      )}
      <SimpleGrid columns={[2, null, 2]} spacing={[2, null, 10]}>
        {!loading &&
          data &&
          data.IngredientCategory?.Ingredients?.map((ingredient, index) => (
            <Button colorScheme="teal">
              <ListCelll
                key={index}
                type={'ingredient'}
                name={ingredient.name}
              />
            </Button>
          ))}
      </SimpleGrid>
    </>
  );
}
