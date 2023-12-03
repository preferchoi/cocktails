import { Divider, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useIngredientQuery } from '../../generated/graphql.tsx';

export default function IngredientDetail() {
  const { ingredientName } = useParams();

  const { data, loading, error } = useIngredientQuery({
    variables: { ingredientName },
  });
  if (error) <p>{error.data}</p>;
  return (
    <>
      {loading && <p>loading...</p>}
      {!loading && data && (
        <>
          <Heading>{data.Ingredient.Ingredient.name}</Heading>
          <Divider mt={6} mb={6} />
          <Text mb={2}>
            {data.Ingredient.Ingredient.name}을 사용하는 칵테일들
          </Text>
          <>
            {data.Ingredient.Drinks.map(drink => (
              <Text>
                <ChakraLink as={Link} to={`/drink/${drink.name}`}>
                  {drink.name}
                </ChakraLink>
              </Text>
            ))}
          </>
        </>
      )}
    </>
  );
}
