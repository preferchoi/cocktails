import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useDrinksQuery } from '../../generated/graphql.tsx';
import DrinkCard from './DrinkCard.jsx';

export default function DrinkList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let variables = { variables: {} };
  if (searchParams.get('categoryName')) {
    variables['variables']['categoryName'] = searchParams.get('categoryName');
  }
  if (searchParams.get('glassName')) {
    variables['variables']['glassName'] = searchParams.get('glassName');
  }
  if (searchParams.get('ingredientName')) {
    variables['variables']['ingredientName'] =
      searchParams.get('ingredientName');
  }

  const { data, loading, error } = useDrinksQuery(variables);

  if (error) {
    return <p>{error.data}</p>;
  }

  return (
    <SimpleGrid columns={[2, null, 3]} spacing={[2, null, 10]}>
      {loading && <Skeleton>loading...</Skeleton>}
      {!loading &&
        data &&
        data.Drinks.map((drink, index) => (
          <Box>
            <DrinkCard key={index} Drink={drink} />
          </Box>
        ))}
    </SimpleGrid>
  );
}
