const Joi = require('joi');

const id = Joi.string();
const email = Joi.string().email();
const role = Joi.string().min(5);

const createUserSchema = Joi.object({
    email: email.required(),
    role: role.required(),
});

const updateUserSchema = Joi.object({
    email: email,
    role: role,
});

const getUserSchema = Joi.object({
    id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }