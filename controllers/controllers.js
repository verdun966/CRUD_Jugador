const {Jugador} = require('../models/jugador')

const vistaJugador = async (req, res) =>{
    const jugadores = await Jugador.find()
    res.json({jugadores})
}

// const crearJugador = async (req, res)=>{
//     try {
//         const nuevoJugador = new Jugador(req.body)
//         await nuevoJugador.save()
//         res.status(201).json(nuevoJugador)
//     } catch (err) {
//         res.status(501).json({msg: "no se puede guardar el usuario"})
//     }
// }

const crearJugador = async (req, res) =>{
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const { name } = req.body
            const nuevo_jugador = new Jugador({ name });
            await nuevo_jugador.save()
            res.status(201).json({nuevo_jugador, msg: "crak"})
        }else {
            res.status(501).json(error)
        }
    } catch (error) {
        res.status(500).json({msg: "este nombre de jugador ya existe en la base de datos"});
    }
}

const editarJugador = async (req, res) => {
    const {id} = req.params
    const name = req.body.name
    await Jugador.findByIdAndUpdate(id,req.body)
    res.status(202).json(name)
}

const eliminarJugador = async(req, res) => {
    try  {
    const futbol = await Jugador.findByIdAndUpdate(req.params.body)
    res.json({msg:"nos vemos", Jugador})
    }catch (error) {
        res.status(400).json({msg:"problemas a la hora de borrar la información"})
    }
}



module.exports = { vistaJugador, crearJugador, editarJugador, eliminarJugador}