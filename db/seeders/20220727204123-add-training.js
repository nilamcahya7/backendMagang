'use strict';
const Training = require('../../data/training.json')
module.exports = {
  async up (queryInterface, Sequelize) {
   const training = Training.map((name)=>({
    tag : name.tag,
    name: name.name,
    company : name.company,
    price : name.price,
    detail: name.detail,
    image : name.image,
    createdAt: new Date(),
    updatedAt: new Date(),
   }))
   await queryInterface.bulkInsert('Trainings', training )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trainings', {}, {});
  }
};
