const GoogleStrategy = require('passport-google-oauth20').Strategy;
const UserService = require('../../../services/userServices.js'); 
const service = new UserService();
const { config } = require("../../../config/config.js")

const googleStrategy = new GoogleStrategy({
  clientID: config.googleID,
  clientSecret: config.googleSecret,
  callbackURL: 'http://localhost:3503/api/v1/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails[0].value;

    let user = await service.findByEmail(email);
    if (!user) {
      user = await service.create({ email, googleId: profile.id });
    }

    done(null, user);
  } catch (error) {
    done(error, false);
  }
})

module.exports = googleStrategy
