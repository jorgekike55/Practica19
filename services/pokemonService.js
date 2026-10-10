const Pokemon = require('../models/Pokemon');

function escaparRegex(valor) {
  return valor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function listarPokemones() {
  return Pokemon.find().sort({ nombre: 1 });
}

function buscarPorNombre(nombre) {
  return Pokemon.find({ nombre: new RegExp(`^${escaparRegex(nombre)}$`, 'i') });
}

function crearPokemon(datos) {
  return new Pokemon(datos).save();
}

module.exports = { listarPokemones, buscarPorNombre, crearPokemon };
