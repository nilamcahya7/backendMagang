'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vacancy.init({
    image: DataTypes.STRING,
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    location: DataTypes.STRING,
    deadline: DataTypes.DATE,
    skill: DataTypes.STRING,
    fieldOfWork: DataTypes.STRING,
    typeOfWork: DataTypes.STRING,
    status: DataTypes.STRING,
    salaryRange: DataTypes.FLOAT,
    vacancy: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    responsibility: DataTypes.STRING,
    requirement: DataTypes.STRING,
    minEducation: DataTypes.STRING,
    minExperience: DataTypes.STRING,
    age: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    marital: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vacancy',
  });
  return Vacancy;
};