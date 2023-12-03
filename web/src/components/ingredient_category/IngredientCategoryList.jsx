import { Button, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useIngredientCategoriesQuery } from '../../generated/graphql.tsx';
import ListCelll from '../ListCelll.jsx';

export default function IngredientCategoryList() {
  const { data, loading, error } = useIngredientCategoriesQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <SimpleGrid columns={[2, null, 2]} spacing={[2, null, 10]}>
      {loading && <Skeleton>loading...</Skeleton>}
      {!loading &&
        data &&
        data.IngredientCategories.map((IngredientCategory, index) => (
          <Button colorScheme="teal">
            <ListCelll key={index} type={"ingredientCategory"} name={IngredientCategory.name} />
          </Button>
        ))}
    </SimpleGrid>
  );
}
