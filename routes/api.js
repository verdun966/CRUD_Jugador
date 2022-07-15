const express = require('express');
const router = express.Router(); 
const {vistaJugador, crearJugador, editarJugador, eliminarJugador} = require('../controllers/controllers.js')

/* GET users listing. */
router.get('/ver', vistaJugador);
router.post('/crear', crearJugador);
router.put('/editar', editarJugador);
router.delete('/eliminar', eliminarJugador);
 
module.exports = router;
