const express = require('express');
const bodyParser = require('body-parser');
const imageRoutes = require('./routes/imageRoutes');
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;
imageRoutes(app);
app.listen(PORT);
