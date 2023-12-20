import { Sequelize } from "sequelize";
import UserSchema from "./schema/User.js";

export const sequelize = new Sequelize(
  process.env.DB_DATABASE || 'cocktail_manager',
  process.env.DB_USERNAME || 'root',
  process.env.DB_PASSWORD || '1q2w3e4r',
  {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    logging: console.log,
  })

export const User = sequelize.define('User', UserSchema)

export const createDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('연결 성공.');

    await sequelize.sync(
      // { force: true }
    );
    console.log('User table 생성 성공.');

  } catch (error) {
    console.error('연결 실패:', error);
  }

  return sequelize;
};