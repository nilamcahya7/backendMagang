'use strict';
const Vacancy = require('../../data/vacancy.json')
module.exports = {
  async up (queryInterface, Sequelize) {
   const vacancy = Vacancy.map((name)=>({
    company : name.company,
    position: name.position,
    location : name.location,
    deadline : name.deadline,
    skill : name.skill,
    fieldOfWork : name.fieldOfWork,
    typeOfWork: name.typeOfWork,
    status:name.status,
    salaryRange:name.salaryRange,
    vacancy:name.vacancy,
    gender:name.gender,
    responsibility:name.responsibility,
    requirement:name.requirement,
    minEducation:name.minEducation,
    minExperience:name.minExperience,
    age:name.age,
    condition:name.condition,
    marital:name.marital,
    image : name.image,
    createdAt: new Date(),
    updatedAt: new Date(),
   }))
   await queryInterface.bulkInsert('Vacancies', vacancy )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vacancies', {}, {});
  }
};
