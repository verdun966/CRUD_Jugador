const express = require('express');
const router = express.Router(); 
const {vistaJugador, crearJugador, otroJugador} = require('../controllers/controllers.js')

/* GET users listing. */
router.get('/ver', vistaJugador);
router.post('/crear', crearJugador);
router.post('/crear', otroJugador);
 
module.exports = router;
