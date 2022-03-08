'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "restaurants",
      [
        {
          name: "Donuts",
          address: "132 main St houston, TX 77099",
          category: 'Japanese',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("restaurants", null, {}); 

  },
};
