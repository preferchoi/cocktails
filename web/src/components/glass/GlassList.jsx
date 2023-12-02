import { useGlassesQuery } from '../../generated/graphql.tsx';
import ListCelll from '../ListCelll.jsx';

export default function GlassList() {
  const { data, loading, error } = useGlassesQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <>
      {loading && <>loading...</>}
      {!loading &&
        data &&
        data.Glasses.map((glass, index) => (
          <ListCelll key={index} name={glass.name} />
        ))}
    </>
  );
}
