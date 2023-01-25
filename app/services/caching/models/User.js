const client = require("..")
class UserCache {
    taxNumber;
    commericalNumber;
    address;
    companyName;

    constructor(user) {
        const { taxNumber, commericalNumber, address, companyName } = user
        this.taxNumber = taxNumber;
        this.commericalNumber = commericalNumber;
        this.address = address;
        this.companyName = companyName;
    }

    async findByPhoneNumber(number) {
        const user = await client.get(number)
        return new UserCache(user)
    }
}

module.exports = UserCache