const express = require('express');
const router = express.Router(); 
const {vistaUno, crearJugador, otroJugador} = require('../controllers/controllers.js')

/* GET users listing. */
router.get('/ver', vistaUno);
router.post('/crear', crearJugador);
router.post('/crear', otroJugador);
 
module.exports = router;
