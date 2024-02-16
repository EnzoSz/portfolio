//requerimos el modulo express
const express = require('express');
//requerimos el metodo router
const router = express.Router();

//requerimos el controlador 
const homeController = require('../controllers/homeController');

//creamos la ruta principal
router.get('/', homeController.index);

//exportamos el modulo
module.exports = router;