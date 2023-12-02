import { useDrinksQuery } from "../../generated/graphql.tsx";

export default function DrinkList() {
  const { data, loading, error } = useDrinksQuery()

  if (error) {
    return <>{error.data}</>
  }

  return (
    <>
    {loading && <>loading...</>}
    {!loading && data && <></>}
    </>
  );
}