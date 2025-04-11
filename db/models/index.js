const { Users, UserSchema } = require('../models/usersModel')
const { Products, ProductSchema } = require('../models/productsModel')

function setUpModel(sequelize){ 
    Users.init(UserSchema, Users.config( sequelize )); 
    Products.init(ProductSchema, Products.config( sequelize )); 
    
}

module.exports = setUpModel;