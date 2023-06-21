'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
         foreignKey: 'user_id' 
        });
      this.belongsTo(models.transaction, {
         foreignKey: 'transaction_id' 
        });
    }
  }
  History.init({
    user_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};