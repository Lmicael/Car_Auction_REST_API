const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    info: {
      title: 'API Leilão',
      version: '1.0.0',
      description: '',
    },
  },
  apis: ['./src/controllers/UserController.js', './src/controllers/MakeOffersController.js', './src/controllers/CarsController.js', './src/controllers/OffersController.js', './src/controllers/ClosureController.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
