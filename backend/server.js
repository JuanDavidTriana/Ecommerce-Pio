// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Importa las rutas
const authRoutes = require('./routes/authRoutes');

// Usa las rutas
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
