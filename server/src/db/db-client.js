import { Sequelize } from "sequelize";

const sequelize  = new Sequelize('cocktail_manager', 'root', '1q2w3e4r', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log,
})


export const createDB = async () => {
  try {
      await sequelize.authenticate();
      console.log('연결 성공.');

  } catch (error) {
      console.error('연결 실패:', error);
  }

  return sequelize;
};