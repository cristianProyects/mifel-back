const boom = require('@hapi/boom');

function checkRoles( roles ) { 
  return (req, res, next) =>{
    const payload = req.user;
    if (roles.includes(payload.role)) {
      next();
    } else {
      next(boom.forbidden());
    }
  }
}

module.exports = { checkRoles }