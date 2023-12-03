import { useParams } from 'react-router-dom';
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
      {!loading && data && <>{data.Ingredient.name}</>}
    </>
  );
}
