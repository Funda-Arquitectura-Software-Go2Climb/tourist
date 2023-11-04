const { Tourist } = require('../models/tourist');

const getAllTourists = async () => {
  try {
    return Tourist.findAll();
  } catch (error) {
    throw new Error('Error al obtener la lista de turistas: ' + error.message);
  }
};

const createTourist = async (touristData) => {
  try {
    const newTourist = await Tourist.create(touristData);
    return newTourist;
  } catch (error) {
    throw new Error('Error al crear un nuevo turista: ' + error.message);
  }
};

const getTouristById = async (id) => {
  try {
    const tourist = await Tourist.findByPk(id);
    return tourist;
  } catch (error) {
    throw new Error('Error al obtener el turista por ID: ' + error.message);
  }
};

module.exports = {
  getAllTourists,
  createTourist,
  getTouristById,
};
