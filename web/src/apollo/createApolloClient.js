import { ApolloClient } from "@apollo/client";
import { createApolloCache } from "./createApolloCache.js";

export const createApolloClient = () => new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: createApolloCache(),
});