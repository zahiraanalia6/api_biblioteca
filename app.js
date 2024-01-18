const express = require('express');
const app = express();
const mongoose = require('mongoose');
const librosRouter = require('./routes/libros');
const errorHandler = require('./middleware/errorHandler');

// Conexión a la base de datos MongoDB
mongoose.connect("mongodb://localhost:27017/biblioteca", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// Middleware para parsear datos JSON en las solicitudes
app.use(express.json());

// Rutas
app.use('/libros', librosRouter);

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});