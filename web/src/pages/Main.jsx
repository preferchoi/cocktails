import { Box } from '@chakra-ui/react';
import { useDrinksQuery } from '../generated/graphql.tsx';

export default function Main() {
  const { data, loading, error } = useDrinksQuery();

  if (error) return <p>{error.message}</p>;

  return (
    <Box>
      {loading &&
        new Array(6).fill(0).map(x => <div key={x} height={'400px'} />)}
      {!loading &&
        data &&
        data.Drinks?.map((el, idx) => <div key={idx}>{el.name}</div>)}
      123
    </Box>
  );
}
