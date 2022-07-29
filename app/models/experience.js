'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Experience.init({
    userId: DataTypes.INTEGER,
    institution: DataTypes.STRING,
    jobsPosition: DataTypes.STRING,
    jobsType: DataTypes.STRING,
    startMonth: DataTypes.STRING,
    startYear: DataTypes.INTEGER,
    endMonth: DataTypes.STRING,
    endYear: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Experience',
  });
  return Experience;
};