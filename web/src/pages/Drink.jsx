import { useDrinksQuery } from "../generated/graphql.tsx";
import DrinkList from "../components/drink/DrinkList.jsx";

export default function Drink() {
  const { data, loading, error } = useDrinksQuery()

  if (error) {
    return <>{error.data}</>
  }

  return (
    <>
    {loading && <>loading...</>}
    {!loading && data && <DrinkList />}
    </>
  );
}