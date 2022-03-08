'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reviews.hasMany(models.restaurant, {
        foreignKey: 'restaurant_id',
    });
    Reviews.belongsTo(models.reviewer, {
          foreignKey: 'reviewer_id',
    });
    }
  }
  Reviews.init(
      {
      reviewer_id: DataTypes.INTEGER,
      stars: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
      title: DataTypes.STRING,
      review: DataTypes.STRING,
      restaurant_id: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'Review',
    });
    return Reviews;
  };