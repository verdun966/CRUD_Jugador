const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        require: true,
    },
    dni: {
        type: Number,
        require: true,
        unique: true,
    },
    club: {
        type: String,
        require: true,
    }
});

const Jugador = mongoose.model('Jugador', storeSchema);

module.exports = {Jugador}