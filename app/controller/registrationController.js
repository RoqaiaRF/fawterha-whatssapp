const { Sequelize, sequelize } = require("../config/connection");
const Users = require("../models/Users")(sequelize, Sequelize);

const registrationController = async (info) => {
    var id;
    await Users.create({
        company_name: info.company_name,
        address: info.address,
        phone: info.phone,
        tax_number: info.tax_number,
        unique_number: info.unique_number,
    
    }).then(result => (id = result.id));

    return id;
}

module.exports = registrationController
