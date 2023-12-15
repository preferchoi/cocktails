import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import typeDefs from "../Defs/index.js";
import resolvers from "../Resolvers/index.js";
import { verifyAccessTokenFromReqHeaders } from "../utils/jwt-auth.js";
import { redis } from "../redis/redis-client.js";

export const createApolloServer = async () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    context: ({ req, res }) => {
      const verified = verifyAccessTokenFromReqHeaders(req.headers);
      return { req, res, verifiedUser: verified, redis };
    }
  });
}