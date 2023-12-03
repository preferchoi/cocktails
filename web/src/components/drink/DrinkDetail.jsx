import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDrinkQuery } from '../../generated/graphql.tsx';

export default function DrinkDetail() {
  const { drinkName } = useParams();

  const { data, loading, error } = useDrinkQuery({
    variables: { drinkName: drinkName },
  });

  if (error) <p>{error.data}</p>;

  return (
    <Box>
      {loading && <p>loading...</p>}
      {!loading && data && (
        <>
          <Flex
            mt={12}
            flexDirection={{ base: 'column', md: 'row' }}
            alignContent={'center'}
          >
            <Box maxW={250} flex={1}>
              <Image src={data.Drink.img_path} borderRadius={20} />
            </Box>
            <Flex
              flex={1}
              ml={{ base: 0, md: 6 }}
              flexDirection={'column'}
              alignContent={'center'}
              justify={'center'}
              alignItems={'flex-start'}
            >
              <Heading mb={4}>{data.Drink.name}</Heading>
              <Heading size={'md'} mb={2}>
                {data.Drink.alcoholic} / {data.Drink.category}
              </Heading>
              <Heading size={'md'} mb={2}>
                {data.Drink.glass}
              </Heading>
            </Flex>
          </Flex>
          <Divider mt={6} />
          <Heading fontSize={20} mt={2} mb={2}>
            주조법
          </Heading>
          {data.Drink.instructions.length === 0 && (
            <Text>데이터가 없어요 :(</Text>
          )}
          <Flex
            flexDirection={'column'}
            alignContent={'center'}
            justify={'center'}
            alignItems={'flex-start'}
            mt={3}
          >
            {data.Drink.instructions &&
              data.Drink.instructions
                .split(/(\d\.)/)
                .filter(Boolean)
                .map((instruction, index, array) => {
                  if (index % 2 === 0 && index < array.length - 1) {
                    return (
                      <Text key={index} fontSize={'sm'}>
                        {instruction + ' ' + array[index + 1]}
                      </Text>
                    );
                  }
                  return null;
                })}
            {data.Drink.instructions &&
              data.Drink.instructions.split(/(\d\.)/).filter(Boolean).length ===
                1 &&
              data.Drink.instructions
                .split(/(?<!\boz)\b[.!?]\s*/)
                .filter(instruction => instruction.trim().length > 0)
                .map((instruction, index) => (
                  <Text key={index} fontSize={'sm'}>
                    {index + 1 + '. ' + instruction.trim() + '.'}
                  </Text>
                ))}
            <Divider mt={6} />
            <TableContainer mt={6} width="100%">
              <Heading fontSize={20}>재료 목록</Heading>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>재료</Th>
                    <Th>용량</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.Drink.ingredients.map(ingredient => (
                    <Tr>
                      <Th>{ingredient[0]}</Th>
                      <Th>{ingredient[1]}</Th>
                    </Tr>
                  ))}
                  {data.Drink.ingredients.length === 0 && (
                    <Tr>
                      <Th>데이터가 없어요 :(</Th>
                      <Th>데이터가 없어요 :(</Th>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </>
      )}
    </Box>
  );
}
