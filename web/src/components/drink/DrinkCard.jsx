import {
  AspectRatio,
  Box,
  Heading,
  Image,
  LinkBox,
  Stack,
  Text,
  useColorModeValue,
  LinkOverlay,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function DrinkCard({ Drink }) {
  return (
    <LinkBox as="article" my={6}>
      <Box
        maxW={'300px'}
        w={'full'}
        rounded={'md'}
        px={{ base: 1, md: 3 }}
        overflow={'hidden'}
      >
        <LinkOverlay as={Link} to={`/drink/${Drink.name}`}>
          <Box bg={'gray.100'} mt={-3} mb={2} pos={'relative'}>
            <AspectRatio ratio={2 / 3}>
              <Image src={Drink.img_path}></Image>
            </AspectRatio>
          </Box>
        </LinkOverlay>
        <Stack>
          <LinkOverlay as={Link} to={`/drink/${Drink.name}`}>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'xl'}
              fontFamily={'body'}
            >
              {Drink.name}
            </Heading>
          </LinkOverlay>
          <Text fontSize={'sm'} color={'gray.500'} isTruncated>
            {Drink.alcoholic ? Drink.alcoholic : <>&nbsp;</>}
          </Text>
        </Stack>
        <Stack spacing={0} fontSize={'sm'} mt={2}>
          <Heading fontSize={'xl'} fontFamily={'body'}>
            재료 목록
          </Heading>
          {Drink.ingredients === null && <Text>재료 목록을 준비중이에요</Text>}
          {Drink.ingredients &&
            Drink.ingredients.map((ingredient, index) => (
              <ChakraLink as={Link} to={`/drink/${ingredient[0]}`}>
                <Text key={index} isTruncated>
                  {ingredient[0]}
                </Text>
              </ChakraLink>
            ))}
        </Stack>
      </Box>
    </LinkBox>
  );
}
