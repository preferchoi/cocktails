import { verifyAccessToken } from '../utils/jwt-auth.js';

export const isAuthenticated = async (context) => {
  const { authorization } = context.req.headers;
  if (!authorization) return false

  const accessToken = authorization.split(' ')[1];
  verifyAccessToken(accessToken);

  if (!context.verifiedUser) return false
  return true
};
