import { useCategoriesQuery } from "../../generated/graphql.tsx";
export default function CategoryList() {
  const { data, loading, error } = useCategoriesQuery()

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
