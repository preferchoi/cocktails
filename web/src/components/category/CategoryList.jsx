import { useCategoriesQuery } from '../../generated/graphql.tsx';
import ListCelll from '../ListCelll.jsx';

export default function CategoryList() {
  const { data, loading, error } = useCategoriesQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <>
      {loading && <>loading...</>}
      {!loading &&
        data &&
        data.Categories.map((category, index) => (
          <ListCelll key={index} name={category.name} />
        ))}
    </>
  );
}
