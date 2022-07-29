'use strict';
const Inclusion = require('../../data/inclusion.json')
module.exports = {
  async up (queryInterface, Sequelize) {
   const inclusion = Inclusion.map((name)=>({
    publisher : name.publisher,
    title: name.title,
    detail : name.detail,
    image : name.image,
    createdAt: new Date(),
    updatedAt: new Date(),
   }))
   await queryInterface.bulkInsert('Inclusions', inclusion )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Inclusions', {}, {});
  }
};
