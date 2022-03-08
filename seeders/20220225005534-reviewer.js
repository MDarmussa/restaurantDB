'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reviewers",
      [
        {
          name: "Smith",
          email: "Smith@yahoo.com",
          karma: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("reviewers", null, {}); 

  }
};
