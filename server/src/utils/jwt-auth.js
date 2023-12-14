import { AuthenticationError } from 'apollo-server-core';
import jwt from 'jsonwebtoken';

export const DEFAULT_JWT_SECRET_KEY = 'secret';

export const verifyAccessToken = (accessToken) => {
  if (!accessToken) return null;

  try {
    const verified = jwt.verify(
      accessToken,
      process.env.JWT_SECRET_KEY || DEFAULT_JWT_SECRET_KEY,
    );
    return verified;
  } catch (error) {
    console.log('access_token expired: ', error.expiredAt);
    throw new AuthenticationError('access token expired');
  }
};

export const verifyAccessTokenFromReqHeaders = (headers) => {
  const { authorization } = headers;
  if (!authorization) return null;

  const accessToken = authorization.split(' ')[1];
  try {
    return verifyAccessToken(accessToken);
  } catch {
    return null;
  }
};