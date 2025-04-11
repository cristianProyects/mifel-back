const axios = require("axios");

class PokeServices {
  constructor() {
    this.path = "https://pokeapi.co/api/v2/pokemon/";
  }

  async getAll(pokemon) {
    try {
      const response = await axios.get(`${this.path}${pokemon}`);

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = PokeServices;
