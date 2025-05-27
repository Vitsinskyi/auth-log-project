const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const path = require('path');

const app = express();
const port = 4000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(port, () => {
	console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
