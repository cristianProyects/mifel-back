const { ValidationError } = require('sequelize')

const errorBoom = (err, req, res, next) => {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }else {
        next(err);
    }
}

const errorSequelize = (err, req, res, next) => {
    if (err instanceof ValidationError) {
      const messages = err.errors.map(error => ({
        message: error.message,
        field: error.path
      }));
  
      res.status(409).json({
        statusCode: 409,
        message: err.name, 
        errors: messages
      });
    } else {
      next(err);
    }
  };

const error = ( err, req, res, next ) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
    
}

module.exports = { errorBoom, errorSequelize, error }
