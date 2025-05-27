const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const swaggerUi = require('swagger-ui-express');
//const swaggerDoc = require('./docs/swagger.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const logsRoutes = require('./routes/logs');

app.use('/api/login', authRoutes);
app.use('/api/logs', logsRoutes);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const PORT = 3001;
app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
