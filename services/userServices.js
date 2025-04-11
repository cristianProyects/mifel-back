const { models } = require('../libs/sequelize');

class UserServices {

    constructor(){
        this.table = models.Users
    }

    async getUsers(){
        const listUsers = await this.table.findAll();
        return listUsers; 
    }
    async create(user){
        const data = await this.table.create({
            ...user,
        })
        return data;
    }
    async findByEmail (email){
        const user = await this.table.findOne({
            where: {
                email
            }
        })
        return user;
    }
}

module.exports = UserServices;