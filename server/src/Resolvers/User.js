import argon2 from "argon2";
import { sequelize } from '../db/db-client.js';

const UserResolver = {
  Mutation: {
    SignUp: async (_, { input }) => {
      const { username, email, password } = input
      const User = sequelize.model('User');
      const hashPW = await argon2.hash(password)
      const newUser = User.create({
        email,
        username,
        password:hashPW
      })
      return newUser
    },
    LogIn: async (_, { input }) => {
      const { email, password } = input
      console.log(email + "///" + password);
      return null
    }
  }
}

export default UserResolver