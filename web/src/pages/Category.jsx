import { useCategoriesQuery } from "../generated/graphql.tsx";
import CategoryList from "../components/category/CategoryList.jsx";

export default function Category() {
  const { data, loading, error } = useCategoriesQuery()

  if (error) {
    return <>{error.data}</>
  }

  return (
    <>
    {loading && <>loading...</>}
    {!loading && data && <CategoryList />}
    </>
  );
}