import argon2 from "argon2";
import { sequelize, User } from '../db/db-client.js';
import jwt from 'jsonwebtoken';
import { createAccessToken, createRefreshToken, setRefreshTokenHeader } from "../utils/jwt-auth.js";
import { isAuthenticated } from "../middelwarers/isAuthenticated.js";

const DEFAULT_JWT_SECRET_KEY = 'secret';

const UserResolver = {
  Query: {
    Me: async (parent, args, context) => {
      const middel = isAuthenticated(context)
      if (!middel) return undefined
      if (!context.verifiedUser) return undefined;
      console.log(context.verifiedUser);
      return await User.findOne({ where: { id: context.verifiedUser.userId } });
    }
  },
  Mutation: {
    SignUp: async (_, { input }) => {
      const user = sequelize.model('User');
      const { username, email, password } = input
      const hashPW = await argon2.hash(password)
      const newUser = await user.create({
        email,
        username,
        password: hashPW
      })
      return newUser
    },
    LogIn: async (parent, args, context) => {
      const { email, password } = args.input
      const { res, redis } = context
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return { errors: [{ field: 'email', message: '해당하는 유저가 없습니다.' }] }
      }
      const isValid = await argon2.verify(user.password, password);
      if (!isValid) {
        return {
          errors: [
            { field: 'password', message: '비밀번호를 올바르게 입력해주세요.' },
          ],
        };
      }

      const accessToken = createAccessToken(user);
      const refreshToken = createRefreshToken(user)
      await redis.set(String(user.id), refreshToken)

      setRefreshTokenHeader(res, refreshToken)

      return { user, accessToken }
    }
  }
}

export default UserResolver