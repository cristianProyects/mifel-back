// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const {config} = require('../config/config')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentacion API FUT',
      version: '1.0.0',
      description: 'Documentación para el consumo de servicios API FUT',
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
      },
    ],
  },
  apis: ['./routes/*.js'], // 👈 Archivos con anotaciones Swagger
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;