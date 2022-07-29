'use strict';
const Disability = require('../../data/disability.json')
module.exports = {
  async up (queryInterface, Sequelize) {
   const disability = Disability.map((name)=>({
    name,
    createdAt: new Date(),
    updatedAt: new Date(),
   }))
   await queryInterface.bulkInsert('Disabilities', disability )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Disabilities', {}, {});
  }
};
