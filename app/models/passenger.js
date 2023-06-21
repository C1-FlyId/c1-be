'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.transaction, {
        foreignKey:'transaction_id'
      })
    }
  }
  passenger.init({
    transaction_id: DataTypes.INTEGER,
    transactionCode: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM,
      values: ['Adult', 'Child', 'Baby']
    },
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    family_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    nationality: DataTypes.STRING,
    nik_paspor: DataTypes.STRING,
    seat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'passenger',
  });
  return passenger;
};