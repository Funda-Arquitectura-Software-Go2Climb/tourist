const db = require('../models');
//importa el modelname de models/index.js (importante)
const Tourist = db.touristdb;


console.log(Tourist); // Verifica si Tourist está definido correctamente

const createTourist = async (touri) => {
  try {
    console.log('Before create:', Tourist);
    return Tourist.create(touri);
  } catch (error) {
    throw new Error('Error al crear un nuevo turista: ' + error.message);
  }
};

const getAllTourists = async () => {
  try {
    console.log('Before findAll:', Tourist);
    return Tourist.findAll();
  } catch (error) {
    throw new Error('Error al obtener la lista de turistas: ' + error.message);
  }
};

const getTouristById = async (id) => {
  try {
    console.log(Tourist); // Agrega este log para verificar si Tourist es undefined
    return Tourist.findByPk(id);
  } catch (error) {
    throw new Error('Error al obtener el turista por ID: ' + error.message);
  }
};

module.exports = {
  getAllTourists,
  createTourist,
  getTouristById,
};