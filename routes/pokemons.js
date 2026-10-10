const express = require('express');
const pokemonService = require('../services/pokemonService');

const router = express.Router();

router.get('/nombre/:nombre', async (req, res) => {
  try {
    const pokemons = await pokemonService.buscarPorNombre(req.params.nombre);
    if (pokemons.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron Pokémon con ese nombre' });
    }
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar Pokémon', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const pokemons = await pokemonService.listarPokemones();
    res.json(pokemons);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener datos', error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const pokemon = await pokemonService.crearPokemon(req.body);
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al guardar', error: error.message });
  }
});

module.exports = router;
