import { Button , SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useCategoriesQuery } from '../../generated/graphql.tsx';
import ListCelll from '../ListCelll.jsx';

export default function CategoryList() {
  const { data, loading, error } = useCategoriesQuery();

  if (error) {
    return <>{error.data}</>;
  }

  return (
    <SimpleGrid columns={[2, null, 2]} spacing={[2, null, 10]}>
      {loading && <Skeleton>loading...</Skeleton>}
      {!loading &&
        data &&
        data.Categories.map((category, index) => (
          <Button colorScheme="teal">
          <ListCelll key={index} type={"category"} name={category.name} />
          </Button>
        ))}
    </SimpleGrid>
  );
}
