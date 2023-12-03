import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useDrinksQuery } from '../../generated/graphql.tsx';
import { Waypoint } from 'react-waypoint';
import DrinkCard from './DrinkCard.jsx';

export default function DrinkList() {
  const location = useLocation();
  const LIMIT = 6;

  const searchParams = new URLSearchParams(location.search);
  let variables = {};
  if (searchParams.get('categoryName')) {
    variables['categoryName'] = searchParams.get('categoryName');
  }
  if (searchParams.get('glassName')) {
    variables['glassName'] = searchParams.get('glassName');
  }
  if (searchParams.get('ingredientName')) {
    variables['ingredientName'] = searchParams.get('ingredientName');
  }

  const { data, loading, error, fetchMore } = useDrinksQuery({
    variables: {
      limit: LIMIT,
      cursor: 0,
      ...variables,
    },
  });

  if (error) {
    return <p>{error.data}</p>;
  }

  return (
    <SimpleGrid columns={[2, null, 3]} spacing={[2, null, 10]}>
      {loading && <Skeleton>loading...</Skeleton>}
      {!loading &&
        data &&
        data.Drinks.Drinks.map((drink, index) => (
          <Box key={drink.name}>
            {data.Drinks.cursor &&
              index === data.Drinks.Drinks.length - LIMIT / 2 && (
                <Waypoint
                  onEnter={() => {
                    fetchMore({
                      variables: {
                        limit: LIMIT,
                        cursor: data.Drinks.cursor,
                        ...variables,
                      },
                    });
                  }}
                />
              )}
            <DrinkCard Drink={drink} />
          </Box>
        ))}
    </SimpleGrid>
  );
}
