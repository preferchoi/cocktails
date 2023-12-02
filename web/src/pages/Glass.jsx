import { useGlassesQuery } from "../generated/graphql.tsx";
import GlassList from '../components/glass/GlassList.jsx';

export default function Glass() {
  const { data, loading, error } = useGlassesQuery()

  if (error) {
    return <>{error.data}</>
  }

  return (
    <>
    {loading && <>loading...</>}
    {!loading && data && <GlassList />}
    </>
  );
}
