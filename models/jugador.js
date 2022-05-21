const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
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

const JugadorB = mongoose.model('JugadorB', storeSchema);

module.exports = {JugadorB}