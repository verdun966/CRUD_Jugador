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

const Messi = mongoose.model('Messi', storeSchema);

module.exports = {Messi}