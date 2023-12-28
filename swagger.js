const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'EcoTrack API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes
};

const specs = swaggerJsDoc(options);

module.exports = { specs, swaggerUi };
