import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher.js';
import { useMeQuery } from '../../generated/graphql.tsx';
import { useMemo } from 'react';

export default function NavBar() {
  const accessToken = localStorage.getItem('access_token');
  const { data } = useMeQuery({ skip: !accessToken });
  const isLoggedIn = useMemo(() => {
    if (accessToken) return data?.Me?.id;
    return false;
  }, [accessToken, data?.Me?.id]);
  return (
    <Box
      zIndex={10}
      position={'fixed'}
      w={'100%'}
      bg={useColorModeValue('white', 'gray.800')}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      py={{ base: 2 }}
      px={{ base: 4 }}
    >
      {' '}
      <Flex
        maxW={960}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        align={'center'}
        m={'auto'}
      >
        <Flex flex={{ base: 1, md: 'auto' }}>
          <Link
            as={RouterLink}
            to={'/'}
            fontFamily={'heading'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.800', 'white')}
          >
            CockTail
          </Link>
        </Flex>
        <Stack justify={'flex-end'} direction={'row'} spacing={6}>
          <Button
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            as={RouterLink}
            to={'/Drink'}
          >
            Drink
          </Button>
          <Button
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            as={RouterLink}
            to={'/Category'}
          >
            Category
          </Button>
          <Button
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            as={RouterLink}
            to={'/Glass'}
          >
            Glass
          </Button>
          <Button
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            as={RouterLink}
            to={'/IngredientCategory'}
          >
            Ingredient
          </Button>
          {isLoggedIn ? (
            <LoggedInNavbarItem />
          ) : (
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize="sm"
              fontWeight={600}
              colorScheme="teal"
              as={RouterLink}
              to={'/signup'}
            >
              시작하기
            </Button>
          )}
          <ColorModeSwitcher />
        </Stack>
      </Flex>
    </Box>
  );
}

const LoggedInNavbarItem = () => {
  return (
    <Stack
      justify={'flex-end'}
      alignItems={'center'}
      direction={'row'}
      spacing={3}
    >
      <Avatar size={'sm'} />
    </Stack>
  );
};
