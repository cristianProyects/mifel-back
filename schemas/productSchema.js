const Joi = require('joi');

const name = Joi.string();
const description = Joi.string();
const category = Joi.string();
const price = Joi.number().min(1);

const createProductSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    price: price.required(),
    category: category.required(),
});

const updateProductSchema = Joi.object({
    name: name,
    description: description,
    price: price,
    category: category,
});


const getProductSchema = Joi.object({
    name: name,
    description: description,
    category: category,
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }