require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Importar la rutas
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})

