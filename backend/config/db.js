// config/db.js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error('Error conectando a MongoDB:', error));

module.exports = mongoose;
