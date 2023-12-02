import { useParams } from 'react-router-dom';
import { useDrinkQuery } from '../../generated/graphql.tsx';

export default function DrinkDetail() {
  const { drinkName } = useParams();

  const { data, loading, error } = useDrinkQuery({
    variables: { drinkName: drinkName },
  });

  if (error) <p>{error.data}</p>;

  return (
    <>
      {loading && <p>loading...</p>}
      {!loading && data && (
        <div>
          <p>{data.Drink.name}</p>
          <p>{data.Drink.alcoholic}</p>
          <p>{data.Drink.category}</p>
          <p>{data.Drink.glass}</p>
          <p>{data.Drink.img_path}</p>
          <p>{data.Drink.ingredients}</p>
          <p>{data.Drink.instructions}</p>
        </div>
      )}
    </>
  );
}
