'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articles', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      companyUrl: {
        type: Sequelize.STRING,
        field: "company_url",
      },
      location: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      howToApply: {
        type: Sequelize.TEXT,
        field: "how_to_apply",
      },
      companyLogo: {
          type: Sequelize.STRING,
          field: "company_logo",
      },
      createdAt: {
        allowNull: false,
        field: "created_at",
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        field: "updated_at",
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles');
  }
};