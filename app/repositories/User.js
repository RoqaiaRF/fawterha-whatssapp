const Users = require("../../models/Users")

const create = async(user)=>{
    await Users.create(user)
}