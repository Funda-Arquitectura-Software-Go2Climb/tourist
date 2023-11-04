const db = require('../models');
const Tourist = db.Tourist;

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;



// Importa el controlador de turistas
const TouristController = require('../controllers/tourist_controller');

// Rutas públicas (sin protección)
router.post('/tourists', TouristController.createTourist);


// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Realiza una consulta a la base de datos para verificar las credenciales
    const user = await Tourist.findOne({ where: { email, password } });

    if (user) {
      // Si se encuentra un usuario con esas credenciales, genera un token JWT
      const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '12h' });
      res.json({ token });
    } else {
      // Si no se encuentra un usuario, responde con un error
      res.status(401).json({ message: 'Autenticación fallida' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Middleware para verificar el token en una solicitud
function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1]; // Supongamos que el token se envía en el encabezado Authorization

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

jwt.verify(token, jwtSecret, (err, decoded) => {
  if (err) {

    return res.status(401).json({ message: 'Token inválido' });
  }

  req.user = decoded;
  next();
});

}

// Rutas protegidas (requieren autenticación)
router.use(verifyToken); // Aplica el middleware a todas las rutas que siguen
router.get('/tourists', TouristController.getAllTourists);
router.get('/tourists/:id', TouristController.getTouristById);

module.exports = router;
