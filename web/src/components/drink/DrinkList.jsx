import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useDrinksQuery } from '../../generated/graphql.tsx';
import DrinkCard from './DrinkCard.jsx';

export default function DrinkList() {
  const { data, loading, error } = useDrinksQuery();

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
