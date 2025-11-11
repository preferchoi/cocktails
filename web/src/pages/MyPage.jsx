import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Heading,
  Select,
  Spinner,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import DefaultLayout from '../components/layout/DefaultLayout.jsx';
import {
  useDrinksQuery,
  useIngredientsQuery,
  useMeQuery,
} from '../generated/graphql.tsx';

const OWNED_INGREDIENTS_STORAGE_KEY = 'owned_ingredients';

const readOwnedIngredients = userId => {
  if (typeof window === 'undefined' || !userId) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(OWNED_INGREDIENTS_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    const userIngredients = parsed?.[userId];

    if (!Array.isArray(userIngredients)) {
      return [];
    }

    return userIngredients.filter(item => typeof item === 'string');
  } catch (error) {
    console.error('Failed to parse owned ingredients from storage', error);
    return [];
  }
};

const persistOwnedIngredients = (userId, ingredients) => {
  if (typeof window === 'undefined' || !userId) {
    return;
  }

  try {
    const raw = window.localStorage.getItem(OWNED_INGREDIENTS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    const nextValue =
      parsed && typeof parsed === 'object' && !Array.isArray(parsed)
        ? parsed
        : {};

    nextValue[userId] = ingredients;

    window.localStorage.setItem(
      OWNED_INGREDIENTS_STORAGE_KEY,
      JSON.stringify(nextValue),
    );
  } catch (error) {
    console.error('Failed to persist owned ingredients', error);
  }
};

export default function MyPage() {
  const accessToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('access_token') : null;
  const { data: meData, loading: meLoading } = useMeQuery({ skip: !accessToken });
  const userId = meData?.Me?.id ? String(meData.Me.id) : undefined;
  const username = meData?.Me?.username ?? '';

  const [ownedIngredients, setOwnedIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState('');

  useEffect(() => {
    if (!userId) {
      setOwnedIngredients([]);
      return;
    }

    setOwnedIngredients(readOwnedIngredients(userId));
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    persistOwnedIngredients(userId, ownedIngredients);
  }, [ownedIngredients, userId]);

  const isLoggedIn = Boolean(userId);

  const {
    data: ingredientsData,
    loading: ingredientsLoading,
  } = useIngredientsQuery({ skip: !isLoggedIn });

  const {
    data: drinksData,
    loading: drinksLoading,
  } = useDrinksQuery({
    skip: !isLoggedIn,
    variables: {
      limit: 500,
    },
    fetchPolicy: 'cache-and-network',
  });

  const availableIngredientOptions = useMemo(() => {
    if (!ingredientsData?.Ingredients) {
      return [];
    }

    return ingredientsData.Ingredients.filter(
      ingredient =>
        ingredient?.name && !ownedIngredients.includes(ingredient.name),
    )
      .map(ingredient => ingredient.name)
      .sort((a, b) => a.localeCompare(b, 'ko'));
  }, [ingredientsData?.Ingredients, ownedIngredients]);

  const handleIngredientSelect = useCallback(event => {
    setSelectedIngredient(event.target.value);
  }, []);

  const handleAddIngredient = useCallback(() => {
    if (!selectedIngredient) return;

    setOwnedIngredients(prev => {
      if (prev.includes(selectedIngredient)) {
        return prev;
      }

      return [...prev, selectedIngredient].sort((a, b) =>
        a.localeCompare(b, 'ko'),
      );
    });
    setSelectedIngredient('');
  }, [selectedIngredient]);

  const handleRemoveIngredient = useCallback(ingredientName => {
    setOwnedIngredients(prev =>
      prev.filter(existing => existing !== ingredientName),
    );
  }, []);

  const clearOwnedIngredients = useCallback(() => {
    setOwnedIngredients([]);
  }, []);

  const possibleDrinks = useMemo(() => {
    if (!drinksData?.Drinks?.Drinks || ownedIngredients.length === 0) {
      return [];
    }

    const normalizedOwned = new Set(
      ownedIngredients.map(ingredient => ingredient.toLowerCase()),
    );

    return drinksData.Drinks.Drinks.filter(drink => {
      if (!drink?.ingredients || !drink.name) {
        return false;
      }

      return drink.ingredients.every(ingredientTuple => {
        const ingredientName = ingredientTuple?.[0];
        if (!ingredientName) return false;
        return normalizedOwned.has(ingredientName.toLowerCase());
      });
    }).sort((a, b) => a.name.localeCompare(b.name, 'ko'));
  }, [drinksData?.Drinks?.Drinks, ownedIngredients]);

  if (meLoading) {
    return (
      <DefaultLayout>
        <Spinner />
      </DefaultLayout>
    );
  }

  if (!isLoggedIn) {
    return (
      <DefaultLayout>
        <Heading>마이페이지</Heading>
        <Text mt={4}>로그인이 필요한 서비스입니다.</Text>
        <Button as={RouterLink} to={'/LogIn'} colorScheme="teal" mt={6}>
          로그인 하러 가기
        </Button>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Heading>마이페이지</Heading>
      <Text mt={2} color="gray.600">
        {username ? `${username} 님이 보유한 재료를 관리해보세요.` : '보유한 재료를 관리해보세요.'}
      </Text>
      <Divider mt={6} mb={6} />

      <Box>
        <Heading size="md">보유 재료</Heading>
        <Text mt={2} fontSize="sm" color="gray.600">
          재료를 선택해 보유 목록을 업데이트하면 자동으로 저장됩니다.
        </Text>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={3}
          mt={4}
          align={{ base: 'stretch', md: 'center' }}
        >
          <Select
            placeholder={
              ingredientsLoading ? '재료를 불러오는 중입니다...' : '재료를 선택하세요'
            }
            value={selectedIngredient}
            onChange={handleIngredientSelect}
            isDisabled={ingredientsLoading || availableIngredientOptions.length === 0}
          >
            {availableIngredientOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <Button
            colorScheme="teal"
            onClick={handleAddIngredient}
            isDisabled={!selectedIngredient}
          >
            추가
          </Button>
          {ownedIngredients.length > 0 && (
            <Button variant="ghost" onClick={clearOwnedIngredients}>
              전체 삭제
            </Button>
          )}
        </Stack>
        <Wrap mt={4}>
          {ownedIngredients.map(ingredient => (
            <WrapItem key={ingredient}>
              <Tag
                size="lg"
                borderRadius="full"
                variant="solid"
                colorScheme="teal"
              >
                <TagLabel>{ingredient}</TagLabel>
                <TagCloseButton
                  aria-label={`${ingredient} 삭제`}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
        {!ingredientsLoading && ownedIngredients.length === 0 && (
          <Text mt={4} color="gray.500">
            아직 추가된 재료가 없습니다. 위 선택창에서 재료를 추가해보세요.
          </Text>
        )}
      </Box>

      <Divider mt={10} mb={6} />

      <Box>
        <Heading size="md">가능한 칵테일</Heading>
        <Text mt={2} fontSize="sm" color="gray.600">
          보유한 재료만으로 만들 수 있는 칵테일 목록입니다.
        </Text>
        {drinksLoading ? (
          <Spinner mt={6} />
        ) : possibleDrinks.length === 0 ? (
          <Text mt={6} color="gray.500">
            {ownedIngredients.length === 0
              ? '재료를 추가하면 만들 수 있는 칵테일을 확인할 수 있어요.'
              : '선택한 재료로 만들 수 있는 칵테일이 아직 없습니다.'}
          </Text>
        ) : (
          <VStack align="stretch" spacing={2} mt={4}>
            {possibleDrinks.map(drink => (
              <Button
                key={drink.name}
                as={RouterLink}
                to={`/drink/${encodeURIComponent(drink.name)}`}
                variant="ghost"
                justifyContent="flex-start"
              >
                {drink.name}
              </Button>
            ))}
          </VStack>
        )}
      </Box>
    </DefaultLayout>
  );
}
