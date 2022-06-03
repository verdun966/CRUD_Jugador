const {Jugador} = require('../models/jugador')

const vistaJugador = async (req, res) =>{
    const jugadores = await Jugador.findById()
    res.json({jugadores})
}

const crearJugador = async (req, res)=>{
    try {
        const nuevoJugador = new Jugador(req.body)
        await nuevoJugador.save()
        res.status(201).json(nuevoJugador)
    } catch (err) {
        res.status(501).json({msg: "no se puede guardar el usuario"})
    }
}

module.exports = {crearJugador, vistaJugador}