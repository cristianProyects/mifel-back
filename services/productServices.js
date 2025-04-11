const { Op } = require("sequelize");
const { models } = require("../libs/sequelize");

class ProductServices {
  constructor() {
    this.table = models.Products;
  }

  async getAll() {
    const listProducts = await this.table.findAll();
    return listProducts;
  }
  async getFilter(filters) {
    const where = {};
    for (const clave in filters) {
      if (filters[clave]) {
        where[clave] = {
          [Op.like]: `%${filters[clave]}%`,
        };
      }
    }
    
    const data = await this.table.findAll({
      where: {
        ...where,
      },
    });
    return data;
  }
}

module.exports = ProductServices;
