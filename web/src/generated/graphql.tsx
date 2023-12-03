/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Category = {
  __typename?: 'Category';
  name?: Maybe<Scalars['String']['output']>;
};

export type Drink = {
  __typename?: 'Drink';
  alcoholic?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  glass?: Maybe<Scalars['String']['output']>;
  img_path?: Maybe<Scalars['String']['output']>;
  ingredients?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
  instructions?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DrinksResponse = {
  __typename?: 'DrinksResponse';
  Drinks?: Maybe<Array<Maybe<Drink>>>;
  cursor?: Maybe<Scalars['Int']['output']>;
};

export type Glass = {
  __typename?: 'Glass';
  name?: Maybe<Scalars['String']['output']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  name?: Maybe<Scalars['String']['output']>;
};

export type IngredientResponse = {
  __typename?: 'IngredientResponse';
  Drinks?: Maybe<Array<Maybe<Drink>>>;
  Ingredient?: Maybe<Ingredient>;
};

export type Query = {
  __typename?: 'Query';
  Categories?: Maybe<Array<Maybe<Category>>>;
  Category?: Maybe<Category>;
  Drink?: Maybe<Drink>;
  Drinks?: Maybe<DrinksResponse>;
  Glass?: Maybe<Glass>;
  Glasses?: Maybe<Array<Maybe<Glass>>>;
  Ingredient?: Maybe<IngredientResponse>;
  Ingredients?: Maybe<Array<Maybe<Ingredient>>>;
};


export type QueryCategoryArgs = {
  CategoryName: Scalars['String']['input'];
};


export type QueryDrinkArgs = {
  DrinkName: Scalars['String']['input'];
};


export type QueryDrinksArgs = {
  CategoryName?: InputMaybe<Scalars['String']['input']>;
  GlassName?: InputMaybe<Scalars['String']['input']>;
  IngredientName?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGlassArgs = {
  GlassName: Scalars['String']['input'];
};


export type QueryIngredientArgs = {
  IngredientName: Scalars['String']['input'];
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', Categories?: Array<{ __typename?: 'Category', name?: string | null } | null> | null };

export type CategoryQueryVariables = Exact<{
  categoryName: Scalars['String']['input'];
}>;


export type CategoryQuery = { __typename?: 'Query', Category?: { __typename?: 'Category', name?: string | null } | null };

export type DrinkQueryVariables = Exact<{
  drinkName: Scalars['String']['input'];
}>;


export type DrinkQuery = { __typename?: 'Query', Drink?: { __typename?: 'Drink', name?: string | null, img_path?: string | null, alcoholic?: string | null, ingredients?: Array<Array<string | null> | null> | null, instructions?: string | null, category?: string | null, glass?: string | null } | null };

export type DrinksQueryVariables = Exact<{
  categoryName?: InputMaybe<Scalars['String']['input']>;
  glassName?: InputMaybe<Scalars['String']['input']>;
  ingredientName?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DrinksQuery = { __typename?: 'Query', Drinks?: { __typename?: 'DrinksResponse', cursor?: number | null, Drinks?: Array<{ __typename?: 'Drink', name?: string | null, img_path?: string | null, alcoholic?: string | null, ingredients?: Array<Array<string | null> | null> | null, instructions?: string | null, category?: string | null, glass?: string | null } | null> | null } | null };

export type GlassQueryVariables = Exact<{
  glassName: Scalars['String']['input'];
}>;


export type GlassQuery = { __typename?: 'Query', Glass?: { __typename?: 'Glass', name?: string | null } | null };

export type GlassesQueryVariables = Exact<{ [key: string]: never; }>;


export type GlassesQuery = { __typename?: 'Query', Glasses?: Array<{ __typename?: 'Glass', name?: string | null } | null> | null };

export type IngredientQueryVariables = Exact<{
  ingredientName: Scalars['String']['input'];
}>;


export type IngredientQuery = { __typename?: 'Query', Ingredient?: { __typename?: 'IngredientResponse', Ingredient?: { __typename?: 'Ingredient', name?: string | null } | null, Drinks?: Array<{ __typename?: 'Drink', name?: string | null, img_path?: string | null, alcoholic?: string | null, ingredients?: Array<Array<string | null> | null> | null, instructions?: string | null, category?: string | null, glass?: string | null } | null> | null } | null };

export type IngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type IngredientsQuery = { __typename?: 'Query', Ingredients?: Array<{ __typename?: 'Ingredient', name?: string | null } | null> | null };


export const CategoriesDocument = gql`
    query Categories {
  Categories {
    name
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query Category($categoryName: String!) {
  Category(CategoryName: $categoryName) {
    name
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      categoryName: // value for 'categoryName'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export function useCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategorySuspenseQueryHookResult = ReturnType<typeof useCategorySuspenseQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const DrinkDocument = gql`
    query Drink($drinkName: String!) {
  Drink(DrinkName: $drinkName) {
    name
    img_path
    alcoholic
    ingredients
    instructions
    category
    glass
  }
}
    `;

/**
 * __useDrinkQuery__
 *
 * To run a query within a React component, call `useDrinkQuery` and pass it any options that fit your needs.
 * When your component renders, `useDrinkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDrinkQuery({
 *   variables: {
 *      drinkName: // value for 'drinkName'
 *   },
 * });
 */
export function useDrinkQuery(baseOptions: Apollo.QueryHookOptions<DrinkQuery, DrinkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DrinkQuery, DrinkQueryVariables>(DrinkDocument, options);
      }
export function useDrinkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DrinkQuery, DrinkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DrinkQuery, DrinkQueryVariables>(DrinkDocument, options);
        }
export function useDrinkSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DrinkQuery, DrinkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DrinkQuery, DrinkQueryVariables>(DrinkDocument, options);
        }
export type DrinkQueryHookResult = ReturnType<typeof useDrinkQuery>;
export type DrinkLazyQueryHookResult = ReturnType<typeof useDrinkLazyQuery>;
export type DrinkSuspenseQueryHookResult = ReturnType<typeof useDrinkSuspenseQuery>;
export type DrinkQueryResult = Apollo.QueryResult<DrinkQuery, DrinkQueryVariables>;
export const DrinksDocument = gql`
    query Drinks($categoryName: String, $glassName: String, $ingredientName: String, $limit: Int, $cursor: Int) {
  Drinks(
    CategoryName: $categoryName
    GlassName: $glassName
    IngredientName: $ingredientName
    limit: $limit
    cursor: $cursor
  ) {
    cursor
    Drinks {
      name
      img_path
      alcoholic
      ingredients
      instructions
      category
      glass
    }
  }
}
    `;

/**
 * __useDrinksQuery__
 *
 * To run a query within a React component, call `useDrinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useDrinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDrinksQuery({
 *   variables: {
 *      categoryName: // value for 'categoryName'
 *      glassName: // value for 'glassName'
 *      ingredientName: // value for 'ingredientName'
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useDrinksQuery(baseOptions?: Apollo.QueryHookOptions<DrinksQuery, DrinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DrinksQuery, DrinksQueryVariables>(DrinksDocument, options);
      }
export function useDrinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DrinksQuery, DrinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DrinksQuery, DrinksQueryVariables>(DrinksDocument, options);
        }
export function useDrinksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DrinksQuery, DrinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DrinksQuery, DrinksQueryVariables>(DrinksDocument, options);
        }
export type DrinksQueryHookResult = ReturnType<typeof useDrinksQuery>;
export type DrinksLazyQueryHookResult = ReturnType<typeof useDrinksLazyQuery>;
export type DrinksSuspenseQueryHookResult = ReturnType<typeof useDrinksSuspenseQuery>;
export type DrinksQueryResult = Apollo.QueryResult<DrinksQuery, DrinksQueryVariables>;
export const GlassDocument = gql`
    query Glass($glassName: String!) {
  Glass(GlassName: $glassName) {
    name
  }
}
    `;

/**
 * __useGlassQuery__
 *
 * To run a query within a React component, call `useGlassQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlassQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlassQuery({
 *   variables: {
 *      glassName: // value for 'glassName'
 *   },
 * });
 */
export function useGlassQuery(baseOptions: Apollo.QueryHookOptions<GlassQuery, GlassQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlassQuery, GlassQueryVariables>(GlassDocument, options);
      }
export function useGlassLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlassQuery, GlassQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlassQuery, GlassQueryVariables>(GlassDocument, options);
        }
export function useGlassSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GlassQuery, GlassQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GlassQuery, GlassQueryVariables>(GlassDocument, options);
        }
export type GlassQueryHookResult = ReturnType<typeof useGlassQuery>;
export type GlassLazyQueryHookResult = ReturnType<typeof useGlassLazyQuery>;
export type GlassSuspenseQueryHookResult = ReturnType<typeof useGlassSuspenseQuery>;
export type GlassQueryResult = Apollo.QueryResult<GlassQuery, GlassQueryVariables>;
export const GlassesDocument = gql`
    query Glasses {
  Glasses {
    name
  }
}
    `;

/**
 * __useGlassesQuery__
 *
 * To run a query within a React component, call `useGlassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlassesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlassesQuery(baseOptions?: Apollo.QueryHookOptions<GlassesQuery, GlassesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlassesQuery, GlassesQueryVariables>(GlassesDocument, options);
      }
export function useGlassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlassesQuery, GlassesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlassesQuery, GlassesQueryVariables>(GlassesDocument, options);
        }
export function useGlassesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GlassesQuery, GlassesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GlassesQuery, GlassesQueryVariables>(GlassesDocument, options);
        }
export type GlassesQueryHookResult = ReturnType<typeof useGlassesQuery>;
export type GlassesLazyQueryHookResult = ReturnType<typeof useGlassesLazyQuery>;
export type GlassesSuspenseQueryHookResult = ReturnType<typeof useGlassesSuspenseQuery>;
export type GlassesQueryResult = Apollo.QueryResult<GlassesQuery, GlassesQueryVariables>;
export const IngredientDocument = gql`
    query Ingredient($ingredientName: String!) {
  Ingredient(IngredientName: $ingredientName) {
    Ingredient {
      name
    }
    Drinks {
      name
      img_path
      alcoholic
      ingredients
      instructions
      category
      glass
    }
  }
}
    `;

/**
 * __useIngredientQuery__
 *
 * To run a query within a React component, call `useIngredientQuery` and pass it any options that fit your needs.
 * When your component renders, `useIngredientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIngredientQuery({
 *   variables: {
 *      ingredientName: // value for 'ingredientName'
 *   },
 * });
 */
export function useIngredientQuery(baseOptions: Apollo.QueryHookOptions<IngredientQuery, IngredientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IngredientQuery, IngredientQueryVariables>(IngredientDocument, options);
      }
export function useIngredientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IngredientQuery, IngredientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IngredientQuery, IngredientQueryVariables>(IngredientDocument, options);
        }
export function useIngredientSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IngredientQuery, IngredientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IngredientQuery, IngredientQueryVariables>(IngredientDocument, options);
        }
export type IngredientQueryHookResult = ReturnType<typeof useIngredientQuery>;
export type IngredientLazyQueryHookResult = ReturnType<typeof useIngredientLazyQuery>;
export type IngredientSuspenseQueryHookResult = ReturnType<typeof useIngredientSuspenseQuery>;
export type IngredientQueryResult = Apollo.QueryResult<IngredientQuery, IngredientQueryVariables>;
export const IngredientsDocument = gql`
    query Ingredients {
  Ingredients {
    name
  }
}
    `;

/**
 * __useIngredientsQuery__
 *
 * To run a query within a React component, call `useIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIngredientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useIngredientsQuery(baseOptions?: Apollo.QueryHookOptions<IngredientsQuery, IngredientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IngredientsQuery, IngredientsQueryVariables>(IngredientsDocument, options);
      }
export function useIngredientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IngredientsQuery, IngredientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IngredientsQuery, IngredientsQueryVariables>(IngredientsDocument, options);
        }
export function useIngredientsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IngredientsQuery, IngredientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IngredientsQuery, IngredientsQueryVariables>(IngredientsDocument, options);
        }
export type IngredientsQueryHookResult = ReturnType<typeof useIngredientsQuery>;
export type IngredientsLazyQueryHookResult = ReturnType<typeof useIngredientsLazyQuery>;
export type IngredientsSuspenseQueryHookResult = ReturnType<typeof useIngredientsSuspenseQuery>;
export type IngredientsQueryResult = Apollo.QueryResult<IngredientsQuery, IngredientsQueryVariables>;