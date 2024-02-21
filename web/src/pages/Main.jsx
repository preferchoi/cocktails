import {
  Button,
  LinkOverlay,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import DefaultLayout from '../components/layout/DefaultLayout.jsx';
import { Link } from 'react-router-dom';
import drinksImage from '../assets/drinks.png';
import drinkImage from '../assets/drink.png';
import categoryImage from '../assets/category.png';
import ingredientImage from '../assets/ingredient.png';
import selectedDrinksImage from '../assets/selected_drinks.png';
import selectedIngredientImage from '../assets/selected_ingredient.png';

export default function Main() {
  return (
    <DefaultLayout>
      <SimpleGrid columns={1} spacing={[2, null, 5]}>
        <Flex align="center" gap="4" border="1px" borderColor="gray.200" borderRadius="md">
          <Image src={drinksImage} w={'50%'} m={2}></Image>
          <Text m={2}>
            다양한 칵테일들을 확인할 수 있습니다.
            <br />
            이름, 알콜 포함 여부, 사용하는 재료 등이 간단하게 표기됩니다.
          </Text>
        </Flex>
        <Flex align="center" gap="4" border="1px" borderColor="gray.200" borderRadius="md">
          <Text m={2}>
            선택한 칵테일의 정보를 찾아보세요.
            <br />
            칵테일 카드를 클릭해 세부 정보에 들어가면, 주조법, 사용하는 재료의
            양과 잔이 표기됩니다.
          </Text>
          <Image src={drinkImage} w={'50%'} m={2}></Image>
        </Flex>
        <Flex align="center" gap="4" border="1px" borderColor="gray.200" borderRadius="md">
          <Image src={categoryImage} w={'30%'} m={2}></Image>
          <Text m={2}>
            찾고 싶은 칵테일의 분류를 선택하세요.
            <br />
            카테고리, 잔, 사용하는 재료 등으로 검색이 가능합니다.
          </Text>
          <Image src={ingredientImage} w={'30%'}></Image>
        </Flex>
        <Flex align="center" gap="4" border="1px" borderColor="gray.200" borderRadius="md">
          <Image src={selectedDrinksImage} w={'50%'} m={2}></Image>
          <Text m={2}>
            파라미터를 통해 필터링이 가능합니다.
            <br />
            카테고리 이름, 잔 이름, 재료 이름으로 원하는 칵테일을 찾을 수
            있습니다.
          </Text>
        </Flex>
        <Flex align="center" gap="4" border="1px" borderColor="gray.200" borderRadius="md">
          <Text m={2}>
            칵테일 카드의 재료 목록에서 간단하게 표기된 정보를 볼 수 있습니다.
            <br />
            해당 재료를 사용하는 칵테일의 목록을 확인하고, 이름을 눌러 세부
            정보를 확인할 수 있습니다.
          </Text>
          <Image src={selectedIngredientImage} w={'50%'} m={2}></Image>
        </Flex>
      </SimpleGrid>

      <Box mt={5} mb={5}>
        <Flex justifyContent="center" gap="4" border="1px" borderColor="gray.200" borderRadius="md" p={5}>
          <Button>
            <LinkOverlay as={Link} to={'/LogIn'}>
              로그인 하기
            </LinkOverlay>
          </Button>
          <Button>
            <LinkOverlay as={Link} to={'/signup'}>
              회원가입 하기
            </LinkOverlay>
          </Button>
        </Flex>
      </Box>
    </DefaultLayout>
  );
}
