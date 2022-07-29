'use strict';
const User = require('../../data/user.json')
module.exports = {
  async up (queryInterface, Sequelize) {
   const user = User.map((name)=>({
    NIK : name.NIK,
    fullName: name.fullName,
    mother : name.mother,
    birthPlace : name.birthPlace,
    birthDate : name.birthDate,
    gender : name.gender,
    marital : name.marital,
    createdAt: new Date(),
    updatedAt: new Date(),
   }))
   await queryInterface.bulkInsert('Users', user )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {}, {});
  }
};
