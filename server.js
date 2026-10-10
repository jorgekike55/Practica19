require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const pokemonRoutes = require('./routes/pokemons');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado exitosamente a MongoDB Atlas'))
  .catch(err => console.error('Error de conexión:', err));

app.use('/api/pokemons', pokemonRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
