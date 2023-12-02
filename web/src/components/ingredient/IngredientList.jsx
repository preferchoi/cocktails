import { useIngredientsQuery } from '../../generated/graphql.tsx';
import ListCelll from '../ListCelll.jsx';

export default function IngredientList() {
  const { data, loading, error } = useIngredientsQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <>
      {loading && <>loading...</>}
      {!loading &&
        data &&
        data.Ingredients.map((ingredient, index) => (
          <ListCelll key={index} name={ingredient.name} />
        ))}
    </>
  );
}
