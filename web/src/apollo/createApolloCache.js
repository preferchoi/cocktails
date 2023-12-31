import { InMemoryCache } from "@apollo/client";

export const createApolloCache = () => {
  return new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Drinks: {
            keyArgs: ["CategoryName", "GlassName", "IngredientName"],
            merge: (
              existing,
              incoming,
            ) => {
              return {
                cursor: incoming.cursor,
                Drinks: existing
                  ? [...existing.Drinks, ...incoming.Drinks]
                  : incoming.Drinks,
              };
            },
          },
        },
      },
    },
  });
};
