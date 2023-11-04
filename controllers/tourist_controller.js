const TouristService = require('../services/tourist_service');

const getAllTourists = async (req, res) => {
  try {
    const tourists = await TouristService.getAllTourists();
    res.send(tourists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTourist = async (req, res) => {
  try {
    const tourist = await TouristService.createTourist(req.body);
    res.status(201).json(tourist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTouristById = async (req, res) => {
  try {
    const id = req.params.id;
    const tourist = await TouristService.getTouristById(id);

    if (!tourist) {
      return res.status(404).json({ error: "Tourist not found" });
    }

    res.json(tourist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTourists,
  createTourist,
  getTouristById,
};
