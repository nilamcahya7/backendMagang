'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    shortName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    NIK: DataTypes.STRING,
    mother: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    birthPlace: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    picture: DataTypes.STRING,
    headline: DataTypes.STRING,
    disabilityType: DataTypes.INTEGER,
    disabilityAids: DataTypes.STRING,
    detailsDisability: DataTypes.STRING,
    skill: DataTypes.STRING,
    marital: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};