import { Button, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useGlassesQuery } from '../../generated/graphql.tsx';
import ListCelll from '../ListCelll.jsx';

export default function GlassList() {
  const { data, loading, error } = useGlassesQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <SimpleGrid columns={[2, null, 2]} spacing={[2, null, 10]}>
      {loading && <Skeleton>loading...</Skeleton>}
      {!loading &&
        data &&
        data.Glasses.map((glass, index) => (
          <Button colorScheme="teal">
            <ListCelll key={index} type={"glass"} name={glass.name} />
          </Button>
        ))}
    </SimpleGrid>
  );
}
