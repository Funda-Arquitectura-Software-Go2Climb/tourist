const touristRepository = require('../repositories/tourist_repository');


const createTourist = async (touri) => {
  try {
    const createdTourist = await touristRepository.createTourist(touri);
    return createdTourist;
  } catch (error) {
    throw new Error('Error al crear un nuevo turista: ' + error.message);
  }
};

const getAllTourists = async () => {
  try {
    const tourists = await touristRepository.getAllTourists();
    return tourists;
  } catch (error) {
    throw new Error('Error al obtener la lista de turistas: ' + error.message);
  }
};

const getTouristById = async (id) => {
  try {
    const tourist = await touristRepository.getTouristById(id);
    return tourist;
  } catch (error) {
    throw new Error('Error al obtener el turista por ID: ' + error.message);
  }
};

module.exports = {
  createTourist,
  getAllTourists,
  getTouristById,
};