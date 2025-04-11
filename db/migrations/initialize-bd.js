'use strict';
const {USER_TABLE,UserSchema} = require('../models/usersModel')
const {PRODUCT_TABLE,ProductSchema} = require('../models/productsModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE,UserSchema);
    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema);
  },
  
  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE,ProductSchema);
    await queryInterface.dropTable(USER_TABLE,UserSchema);

  }
};
