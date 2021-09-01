'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [{
      name: 'John Wick',
      email: "wick@gmail.com",
      password: '123456',
      created_at: new Date,
      updated_at: new Date
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null);
  }
};
