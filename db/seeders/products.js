"use strict";
const { PRODUCT_TABLE } = require("../models/productsModel");

function getRandomPrecio() {
  return parseFloat((Math.random() * 1000 + 50).toFixed(2)); 
}

function getRandomName() {
  const names = [
    "Camiseta",
    "Pantalón",
    "Zapatos",
    "Gorra",
    "Sudadera",
    "Lentes",
    "Mochila",
  ];
  return (
    names[Math.floor(Math.random() * names.length)]
  );
}

function getRandomCategory() {
  const categories = ["Ropa", "Calzado", "Accesorios", "Electrónica", "Hogar"];
  return categories[Math.floor(Math.random() * categories.length)];
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [];

    for (let i = 0; i < 20; i++) {
      products.push({
        id:i,
        name: getRandomName(),
        description: "Producto",
        price: getRandomPrecio(),
        category: getRandomCategory(),
        create_at: new Date()
      });
    }

    await queryInterface.bulkInsert(PRODUCT_TABLE, products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(PRODUCT_TABLE, null, {});
  },
};
