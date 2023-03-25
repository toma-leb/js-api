import { DataTypes, Model } from 'sequelize';
import database from '.';

export default class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updateAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: false,
  sequelize: database,
  freezeTableName: true,
  modelName: 'user',
});
