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
        unique: true,
        require: true,
    },
    club: {
        type: String,
        require: true,
    },
});

const Tevez = mongoose.model('Tevez', storeSchema);

module.exports = {Tevez}