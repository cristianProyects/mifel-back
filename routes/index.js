const express = require("express");
const userService = require("./usersRouter");
const passport = require("passport");
const authRoute = require("./authRouter");

const mainRouter = (app) => {
  const router = express.Router(); // PERMITE PETICIONES HTTP
  app.use("/api/v1", router);
  router.use("/auth", authRoute);

  router.use(passport.authenticate("jwt", { session: false }));

  router.use("/users", userService);
};

module.exports = mainRouter;
