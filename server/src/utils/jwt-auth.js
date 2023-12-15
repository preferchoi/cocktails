import { AuthenticationError } from 'apollo-server-core';
import jwt from 'jsonwebtoken';

export const DEFAULT_JWT_SECRET_KEY = 'secret';
export const REFRESH_JWT_SECRET_KEY = 'secret2';

export const createAccessToken = (user) => {
  const userData = { userId: user.id };
  const accessToken = jwt.sign(
    userData,
    process.env.JWT_SECRET_KEY || DEFAULT_JWT_SECRET_KEY,
    { expiresIn: '30m' },
  );
  return accessToken;
};

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

export const createRefreshToken = (user) => {
  const userData = { userId: user.id };
  return jwt.sign(
    userData,
    process.env.REFRESH_JWT_SECRET_KEY || REFRESH_JWT_SECRET_KEY,
    { expiresIn: '14d' },
  );
};

export const setRefreshTokenHeader = (res, refreshToken) => {
  res.cookie('refreshtoken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV == 'production',
    sameSite: 'lax',
  });
};