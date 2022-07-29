'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Experiences', {
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
      jobsPosition: {
        type: Sequelize.STRING
      },
      jobsType: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Experiences');
  }
};