const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Users extends Sequelize.Model {}
  Users.init({
    company_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isNumeric:true,
      }
    },
    tax_number: {
      type: Sequelize.STRING,
      allowNull: true,
      validate:{
        isNumeric:true,
        min:15,
        max:15
      }
    },
    unique_number: {
      type: Sequelize.STRING,
      allowNull: true,
      validate:{
        isNumeric:true,
        min:15,
        max:15
      }
    }
  }, {
    sequelize,
    modelName: 'users'
  });
};
