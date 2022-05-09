const express = require('express');
const router = express.Router();
const {vistaJugador} = require('../controllers/controllers.js');
const {crearJugador} = require('../controllers/controllers.js');
const {otroJugador} = require('../controllers/controllers')

/* GET home page. */
router.get('/', vistaJugador);
router.post('/', crearJugador);
router.post('/', otroJugador);

module.exports = router;
