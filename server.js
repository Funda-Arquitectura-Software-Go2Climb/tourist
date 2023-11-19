const express = require('express');
const bodyParser = require('body-parser');


const { Sequelize } = require('sequelize');
require('dotenv').config();



const app = express();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql', 
});

// Middleware
app.use(bodyParser.json());

// Rutas
const touristRoutes = require('./routes/tourist_routes');
app.use('/', touristRoutes);




// Sincronizar el modelo con la base de datos
sequelize.sync()
  .then(() => {
    // Iniciar el servidor después de sincronizar el modelo*/



const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log('Conexión a la base de datos establecida y modelo sincronizado.');
  console.log(`Servidor corriendo en ${PORT}`);
});
  })
  .catch(error => {
    console.error('No se pudo conectar a la base de datos o sincronizar el modelo:', error);
  });

module.exports = app;
