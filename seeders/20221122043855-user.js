'use strict';
const {
  v4: uuidv4
} = require('uuid');
const hashPassword = require('../helpers/hashPassword');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = {
      id: uuidv4(),
      username: "masteradmin",
      email: "gian.syntax@gmail.com",
      password: hashPassword('1234qwer'),
      // isActive: true,
      // isVerifiedEmail: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await queryInterface.bulkInsert("Users", [users]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users");
  },
};
