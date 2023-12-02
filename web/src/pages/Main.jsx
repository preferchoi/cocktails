import { Box } from '@chakra-ui/react';
import {
  useDrinksQuery,
  // useDrinkQuery,
  // useCategoriesQuery,
  // useCategoryQuery,
  // useGlassesQuery,
  // useGlassQuery,
  // useIngredientsQuery,
  // useIngredientQuery
} from '../generated/graphql.tsx';

export default function Main() {
  const { data, loading, error } = useDrinksQuery();
  // const { data, loading, error } = useDrinkQuery({variables: { drinkName: String("'57 Chevy with a White License Plate") }});
  // const { data, loading, error } = useCategoriesQuery();
  // const { data, loading, error } = useCategoryQuery({variables: {categoryName: String("COCKTAIL")}});
  // const { data, loading, error } = useGlassesQuery();
  // const { data, loading, error } = useGlassQuery({variables: {glassName: String("HIGHBALL GLASS")}});
  // const { data, loading, error } = useIngredientsQuery();
  // const { data, loading, error } = useIngredientQuery({variables: {ingredientName: String("CREME DE CACAO")}});

  if (error) return <p>{error.message}</p>;

  return (
    <Box>
      {loading &&
        new Array(6).fill(0).map(x => <div key={x} height={'400px'} />)}
      {!loading && data && data.Drinks?.map((el, idx) => <div key={idx}>{el.name}</div>)}
      {/* {!loading && data && <div>{data.Drink.name}</div>} */}
      {/* {!loading && data && data.Categories?.map((el, idx) => <div key={idx}>{el.name}</div>)} */}
      {/* {!loading && data && <div>{data.Category.name}</div>} */}
      {/* {!loading && data && data.Glasses?.map((el, idx) => <div key={idx}>{el.name}</div>)} */}
      {/* {!loading && data && <div>{data.Glass.name}</div>} */}
      {/* {!loading && data && data.Ingredients?.map((el, idx) => <div key={idx}>{el.name}</div>)} */}
      {/* {!loading && data && <div>{data.Ingredient.name}</div>} */}
    </Box>
  );
}
