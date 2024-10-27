import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/config';

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;