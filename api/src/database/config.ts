import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('find_a_taxi_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;