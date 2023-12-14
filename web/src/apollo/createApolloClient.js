import { ApolloClient, from, HttpLink, NormalizedCacheObject } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createApolloCache } from "./createApolloCache.js";

export const createApolloClient = () => new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: createApolloCache(),
  link: from([errorLink, httpLink]),
});

const errorLink = onError(
  // eslint-disable-next-line consistent-return
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        // eslint-disable-next-line no-console
        console.log(`[GraphQL error]: -> ${operation.operationName}
      Message: ${message}, Query: ${path}, Location: ${JSON.stringify(
          locations,
        )}`),
      );
    }
    if (networkError) {
      // eslint-disable-next-line no-console
      console.log(`[networkError]: -> ${operation.operationName}
    Message: ${networkError.message}`);
    }
  },
);

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

