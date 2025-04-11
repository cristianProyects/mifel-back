const { ExtractJwt, Strategy } = require("passport-jwt");
const { config } = require("../../../config/config");
const { models } = require('../../../libs/sequelize');
const boom = require('@hapi/boom');

const jwtStrategy =
    new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret,
    },
    async (payload, done) => {
            try {
                const _user = await models.Users.findByPk(payload.sub);
                if (!_user ) {
                    return done(boom.unauthorized(), false); 
                }
                done(null, _user);
            } catch (error) {
                done(error, false); 
            }
        }
    )

module.exports = jwtStrategy