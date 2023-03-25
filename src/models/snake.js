import { DataTypes, Model } from 'sequelize';
import database from '.';

export default class Snake extends Model {}

Snake.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  isVenomous: {
    type: DataTypes.BOOLEAN,
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
  },
}, {
  timestamps: false,
  sequelize: database,
  freezeTableName: true,
  modelName: 'snake',
});
