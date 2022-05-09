const {Tevez} = require('../models/model')
const {Messi} = require('../models/jugador')

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaJugador = async (req, res) =>{
    const Tevez = await Car.find()
    res.json({Tevez})
}

const otroJugador = async (req, res)=>{
    try {
        const guardar = new Tevez(req.body)
        await guardar.save()
        res.status(201).json(save)
    } catch (err) {
        res.status(501).json({msg: "no se puede guardar el usuario"})
    }
}

const crearJugador = async (req, res)=>{
    try {
        const save = new Messi(req.body)
        await save.save()
        res.status(201).json(save)
    } catch (err) {
        res.status(501).json({msg: "no se puede guardar el usuario"})
    }
}

module.exports = {vistaUno, crearJugador, vistaJugador, otroJugador}