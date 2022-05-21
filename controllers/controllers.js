const {JugadorB} = require('../models/jugador')

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaJugador = async (req, res) =>{
    const Tevez = await JugadorB.find()
    res.json({Tevez})
}

const otroJugador = async (req, res)=>{
    try {
        const guardar = new JugadorB(req.body)
        await guardar.save()
        res.status(201).json(save)
    } catch (err) {
        res.status(501).json({msg: "no se puede guardar el usuario"})
    }
}

const crearJugador = async (req, res)=>{
    try {
        const save = new JugadorB(req.body)
        await save.save()
        res.status(201).json(save)
    } catch (err) {
        res.status(501).json({msg: "no se puede guardar el usuario"})
    }
}

module.exports = {vistaUno, crearJugador, vistaJugador, otroJugador}