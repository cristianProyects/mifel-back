const express = require("express");
const router = express();

const productService = require("../services/productServices");
const product = new productService();

const validationHandler = require("../middlewares/validation");
const { getProductSchema } = require("../schemas/productSchema");
/**
 * @swagger
 * /api/v1/products:
 *   post:
 *     summary: Lista los productos o bien una muestra de ellos filtrandolos por los valores de busqueda
 *     tags: [Products]
 *     requestBody: 
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               price:
 *                 type: integer
 *     responses:
 *       200:
 *         description:
 */
router.post(
  "/",
  validationHandler(getProductSchema, "body"),
  async (req, res, next) => {
    try {
      res.send(await product.getFilter(req.body));
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
