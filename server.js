const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config.json')[env];
const { Sequelize } = require('sequelize');

const touristRoutes = require('./routes/tourist_routes');

const app = express();

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

// Middleware
app.use(bodyParser.json());

// Rutas

app.use('/', touristRoutes);




/*// Sincronizar el modelo con la base de datos
sequelize.sync()
  .then(() => {
    // Iniciar el servidor después de sincronizar el modelo*/

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log('Conexión a la base de datos establecida y modelo sincronizado.');
  console.log(`Servidor corriendo en ${PORT}`);
});
  /*})
  .catch(error => {
    console.error('No se pudo conectar a la base de datos o sincronizar el modelo:', error);
  });*/

module.exports = app;
