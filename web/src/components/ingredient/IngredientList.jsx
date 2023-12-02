import { useIngredientsQuery } from '../../generated/graphql.tsx';

export default function IngredientList() {
  const { data, loading, error } = useIngredientsQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <>
      {loading && <>loading...</>}
      {!loading && data && <IngredientList />}
    </>
  );
}
