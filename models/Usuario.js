const mongoose = require('mongoose');

const usuarioEsquema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: true 
  },
  edad: { 
    type: Number, 
    required: true 
  },
  rol: { 
    type: String, 
    enum: ['entrenador', 'lider_gimnasio', 'profesor', 'campeon'], 
    default: 'entrenador' 
  },
  medallas: { 
    type: Number, 
    default: 0 
  },
  pokemons: {
    type: [String],
    default: []
  }
}); 

// Mongoose creará automáticamente la colección 'usuarios' en MongoDB Atlas
const Usuario = mongoose.model('Usuario', usuarioEsquema);

module.exports = Usuario;
