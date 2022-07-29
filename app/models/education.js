'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Education.init({
    userId: DataTypes.INTEGER,
    institution: DataTypes.STRING,
    level: DataTypes.STRING,
    major: DataTypes.STRING,
    gpa: DataTypes.FLOAT,
    startMonth: DataTypes.STRING,
    startYear: DataTypes.INTEGER,
    endMonth: DataTypes.STRING,
    endYear: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Education',
  });
  return Education;
};