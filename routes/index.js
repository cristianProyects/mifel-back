const express = require("express");
const productRoute = require("./productRouter");
const pokeRoute = require("./pokeRouter");
const passport = require("passport");
const authRoute = require("./authRouter");
const textRoute = require("./textRouter");

const mainRouter = (app) => {
  const router = express.Router(); 
  app.use("/api/v1", router);
  router.use("/auth", authRoute);

  router.use(passport.authenticate("jwt", { session: false }));

  router.use("/products", productRoute);
  router.use("/pokemons", pokeRoute);
  router.use("/text", textRoute);
};

module.exports = mainRouter;
