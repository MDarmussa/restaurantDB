'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          reviewer_id: 1,
          stars: 4,
          title: "John",
          review: "good resturant",
          restaurant_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("reviews", null, {}); 

  }
};
