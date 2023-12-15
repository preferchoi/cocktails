import { AuthenticationError } from 'apollo-server-core';
import { verifyAccessToken } from '../utils/jwt-auth.js';

export const isAuthenticated = async (context) => {
  const { authorization } = context.req.headers;
  if (!authorization) throw new AuthenticationError('access token expired');

  const accessToken = authorization.split(' ')[1];
  verifyAccessToken(accessToken);

  if (!context.verifiedUser) throw new AuthenticationError('access token expired');
  return true
};
