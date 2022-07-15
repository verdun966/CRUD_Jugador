const {Jugador} = require('../models/jugador')
const validarId = (res, req, next) => {
    const futbol = await Jugador.findByIdAndDelete(req.params.id)
    if (futbol.name !== null) {
    next();
    }
    res.json({msg: "el id es invalido"})
}

module.exports = {validarId}