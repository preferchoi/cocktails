import { useGlassesQuery } from '../../generated/graphql.tsx';

export default function GlassList() {
  const { data, loading, error } = useGlassesQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <>
      {loading && <>loading...</>}
      {!loading && data && <GlassList />}
    </>
  );
}
