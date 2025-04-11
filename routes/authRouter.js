const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { config } = require("../config/config");

const router = express.Router();
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"],prompt: 'select_account' }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
  }),
  (req, res) => {
    const user = req.user;
    const payload = {
      sub: user.id,
      role: user.role,
    };

    const token = jwt.sign(payload, config.jwtSecret);
    res.json({ email:user.email, token });
  },
);

module.exports = router;
