const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const app = express();
const PORT = 3000;

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

// Middleware
app.use(bodyParser.json());

// Rutas
const touristRoutes = require('./routes/tourist_routes');
app.use('/', touristRoutes);

// Sincronizar el modelo con la base de datos
sequelize.sync()
  .then(() => {
    // Iniciar el servidor después de sincronizar el modelo
    app.listen(PORT, () => {
      console.log('Conexión a la base de datos establecida y modelo sincronizado.');
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('No se pudo conectar a la base de datos o sincronizar el modelo:', error);
  });
