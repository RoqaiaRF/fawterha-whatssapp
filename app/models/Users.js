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
      unique: true
    },
    tax_number: {
      type: Sequelize.STRING,
      allowNull: true
    },
    unique_number: {
      type: Sequelize.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Users'
  });
  return Users;
};
