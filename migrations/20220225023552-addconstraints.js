'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('reviews',{
      fields: ['restaurant_id'],
      type: 'foreign key',
      references:  {
        table: 'restaurants', 
        field: 'id'
      }
    });
  },
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('reviews',{
      fields: ['reviewer_id'],
      type: 'foreign key',
      references:  {
        table: 'reviewers', 
        field: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
