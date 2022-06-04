const express = require('express');
const router = express.Router(); 
const {vistaJugador, crearJugador} = require('../controllers/controllers.js')

/* GET users listing. */
router.get('/ver', vistaJugador);
router.post('/crear', crearJugador);
 
module.exports = router;
