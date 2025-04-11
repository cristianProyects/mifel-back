const passport = require('passport');

const googleStrategy = require('./strategies/google');
const jwtStrategy = require('./strategies/jwt');

passport.use(googleStrategy);
passport.use(jwtStrategy);