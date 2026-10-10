const mongoose = require('mongoose');

// El molde básico con las características de un Pokémon
const pokemonEsquema = new mongoose.Schema({
  nombre: { type: String, required: true },   
  tipo: { type: String, required: true },     
  nivel: { type: Number, default: 1 },
  puntosSalud: { type: Number, default: 1 },
  capturado: { type: Boolean, default: false } 
});

// 'Pokemon' -> Mongoose creará automáticamente la colección 'pokemons' en Atlas
const Pokemon = mongoose.model('Pokemon', pokemonEsquema);

// Exportamos el modelo para poder usarlo en nuestro servidor Express
module.exports = Pokemon;





// const pokemonEsquema = new mongoose.Schema({
//   nombre: String,
//   tipo: String,
//   nivel: Number,
//   puntosSalud: Number,
//   capturado: Boolean
// }); 


// const pokemonEsquema = new mongoose.Schema({
//   nombre: { type: String, required: true },   
//   tipo: { type: String, required: true },     
//   nivel: { type: Number, default: 1 },
//   puntosSalud: { type: Number, default: 1 },
//   capturado: { type: Boolean, default: false } 
// }); 