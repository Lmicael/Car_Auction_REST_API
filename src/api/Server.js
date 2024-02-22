const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./Swagger');

const app = express();
const PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, () => {
    mongoose.connect('mongodb+srv://lucasmicaelg:nouAY2pdJeCPxEIs@cluster0.iosdqd1.mongodb.net/?retryWrites=true&w=majority');
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
