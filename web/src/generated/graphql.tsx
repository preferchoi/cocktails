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
  img_path?: Maybe<Scalars['String']['output']>;
  ingredients?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
  instructions?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Glass = {
  __typename?: 'Glass';
  name?: Maybe<Scalars['String']['output']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Categories?: Maybe<Array<Maybe<Category>>>;
  Category?: Maybe<Category>;
  Drink?: Maybe<Drink>;
  Drinks?: Maybe<Array<Maybe<Drink>>>;
  Glass?: Maybe<Glass>;
  Glasses?: Maybe<Array<Maybe<Glass>>>;
  Ingredient?: Maybe<Ingredient>;
  Ingredients?: Maybe<Array<Maybe<Ingredient>>>;
};


export type QueryCategoryArgs = {
  CategoryName: Scalars['String']['input'];
};


export type QueryDrinkArgs = {
  DrinkName: Scalars['String']['input'];
};


export type QueryGlassArgs = {
  GlassName: Scalars['String']['input'];
};


export type QueryIngredientArgs = {
  IngredientName: Scalars['String']['input'];
};

export type DrinkQueryVariables = Exact<{
  drinkName: Scalars['String']['input'];
}>;


export type DrinkQuery = { __typename?: 'Query', Drink?: { __typename?: 'Drink', name?: string | null, img_path?: string | null, alcoholic?: string | null, ingredients?: Array<Array<string | null> | null> | null, instructions?: string | null } | null };

export type DrinksQueryVariables = Exact<{ [key: string]: never; }>;


export type DrinksQuery = { __typename?: 'Query', Drinks?: Array<{ __typename?: 'Drink', name?: string | null, img_path?: string | null, alcoholic?: string | null, ingredients?: Array<Array<string | null> | null> | null, instructions?: string | null } | null> | null };


export const DrinkDocument = gql`
    query Drink($drinkName: String!) {
  Drink(DrinkName: $drinkName) {
    name
    img_path
    alcoholic
    ingredients
    instructions
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
    query Drinks {
  Drinks {
    name
    img_path
    alcoholic
    ingredients
    instructions
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