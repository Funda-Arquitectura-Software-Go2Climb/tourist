const express = require('express');
const TouristController = require('../controllers/tourist_controller');

const router = express.Router();

router.get('/tourists', TouristController.getAllTourists);
router.post('/tourists', TouristController.createTourist);
router.get('/tourists/:id', TouristController.getTouristById);

module.exports = router;
