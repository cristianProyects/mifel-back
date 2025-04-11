const Joi = require('joi');


const text = Joi.string();
const text_encrypted = Joi.string();


const textEncryptedSchema = Joi.object({
    text: text.required(),
});

const textDecryptedSchema = Joi.object({
    text_encrypted: text_encrypted.required(),
});



module.exports = { textEncryptedSchema, textDecryptedSchema }