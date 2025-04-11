const express = require("express");
const router = express();

const pokeServices = require("../services/pokeServices");
const poke = new pokeServices();

/**
 * @swagger
 * /api/v1/pokemons:
 *   get:
 *     summary: Lista los pokemons
 *     tags: [Pokemons]
 *     parameters:
 *       - in: query
 *         name: ditto
 *         schema:
 *           type: string
 *         required: false
 *         description: Nombre del Pokémon a buscar
 *     responses:
 *       200:
 *         description: Lista de Pokémons
 */
router.get("/", async (req, res, next) => {
  try {
    const { pokemon } = req.query;
    res.send(await poke.getAll(pokemon));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
