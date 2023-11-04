const db = require('../models');
const Tourist = db.Tourist;


const getAllTourists = async () => {
  return Tourist.findAll();
};

const createTourist = async (touristData) => {
  return await Tourist.create(touristData);
};

const getTouristById = async (id) => {
  return await Tourist.findByPk(id);
};

module.exports = {
  getAllTourists,
  createTourist,
  getTouristById,
};
