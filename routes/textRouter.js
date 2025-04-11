const express = require("express");
const router = express.Router();

const textService = require("../services/textServices");
const textModify = new textService();

const validationHandler = require("../middlewares/validation");
const { textDecryptedSchema,textEncryptedSchema } = require("../schemas/textSchema");

router.post("/encrypt",
  validationHandler(textEncryptedSchema,'body'),
  (req, res, next) => {
  try {
    res.send(textModify.encrypt(req.body.text));
  } catch (error) {
    next(error);
  }
});

router.post("/decrypt", 
  validationHandler(textDecryptedSchema,'body'),
  (req, res, next) => {
  try {
    res.send(textModify.decrypt(req.body.text_encrypted));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
