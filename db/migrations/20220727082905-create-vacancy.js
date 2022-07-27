'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vacancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.DATE
      },
      skill: {
        type: Sequelize.STRING
      },
      fieldOfWork: {
        type: Sequelize.STRING
      },
      typeOfWork: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      salaryRange: {
        type: Sequelize.FLOAT
      },
      vacancy: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      responsibility: {
        type: Sequelize.STRING
      },
      requirement: {
        type: Sequelize.STRING
      },
      minEducation: {
        type: Sequelize.STRING
      },
      minExperience: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      condition: {
        type: Sequelize.STRING
      },
      marital: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Vacancies');
  }
};