import { useIngredientsQuery } from "../generated/graphql.tsx";
import IngredientList from "../components/ingredient/IngredientList.jsx";

export default function Ingredient() {
  const { data, loading, error } = useIngredientsQuery()

  if (error) {
    return <>{error.data}</>
  }

  return (
    <>
    {loading && <>loading...</>}
    {!loading && data && <IngredientList />}
    </>
  );
}