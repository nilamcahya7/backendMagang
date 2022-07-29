'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Education', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      institution: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      major: {
        type: Sequelize.STRING
      },
      gpa: {
        type: Sequelize.FLOAT
      },
      startMonth: {
        type: Sequelize.STRING
      },
      startYear: {
        type: Sequelize.INTEGER
      },
      endMonth: {
        type: Sequelize.STRING
      },
      endYear: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Education');
  }
};