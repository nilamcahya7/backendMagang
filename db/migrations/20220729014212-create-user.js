'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shortName: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      NIK: {
        type: Sequelize.STRING
      },
      mother: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      birthPlace: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      picture: {
        type: Sequelize.STRING
      },
      headline: {
        type: Sequelize.STRING
      },
      disabilityType: {
        type: Sequelize.INTEGER
      },
      disabilityAids: {
        type: Sequelize.STRING
      },
      detailsDisability: {
        type: Sequelize.STRING
      },
      skill: {
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
    await queryInterface.dropTable('Users');
  }
};