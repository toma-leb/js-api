import Sequelize from 'sequelize';
import config from '../config';

const database = new Sequelize(
  config.DATABASE_NAME,
  config.DATABASE_USERNAME,
  config.DATABASE_PASSWORD,
  {
    host: config.DATABASE_HOST,
    dialect: 'mysql',
  },
);

(async () => {
  try {
    await database.authenticate();
    await database.sync();
  } catch (error) {
    throw Error('Unable to connect to the database: ', error);
  }
})();

export default database;
