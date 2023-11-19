const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// Middleware
app.use(bodyParser.json());

// Rutas
const touristRoutes = require('./routes/tourist_routes');
app.use('/', touristRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});

module.exports = app;
