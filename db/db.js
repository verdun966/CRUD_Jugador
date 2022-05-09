const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {  
        await mongoose.connect("mongodb+srv://daniel:Alfredo84@cluster0.5khmf.mongodb.net/test",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')   
    }
}

module.exports = {dbConnection}