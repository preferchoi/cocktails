import { useDrinksQuery } from '../../generated/graphql.tsx';
import DrinkCard from './DrinkCard.jsx';

export default function DrinkList() {
  const { data, loading, error } = useDrinksQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <>
      {loading && <>loading...</>}
      {!loading &&
        data &&
        data.Drinks.map((drink, index) => (
          <DrinkCard key={index} Drink={drink} />
        ))}
    </>
  );
}
