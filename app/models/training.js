'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Training extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Training.init({
    tag: DataTypes.STRING,
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    price: DataTypes.FLOAT,
    detail: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Training',
  });
  return Training;
};