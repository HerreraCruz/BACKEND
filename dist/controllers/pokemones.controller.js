"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePokemon = exports.updatePokemon = exports.addPokemon = exports.getPokemon = exports.getPokemones = void 0;
const pokemon_schema_1 = require("../model/pokemon.schema");
// Obtener los poquemones
const getPokemones = (req, res) => {
    pokemon_schema_1.PokemonSchema.find().limit(150)
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getPokemones = getPokemones;
//Obtener solo uno
const getPokemon = (req, res) => {
    pokemon_schema_1.PokemonSchema.find({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getPokemon = getPokemon;
const addPokemon = (req, res) => {
    const p = new pokemon_schema_1.PokemonSchema({
        id: req.body.id,
        gender: req.body.gender,
        num: req.body.num,
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        height: req.body.height,
        weight: req.body.weight,
        candy: req.body.candy,
        candy_count: req.body.candy_count,
        egg: req.body.egg,
        spawn_chance: req.body.spawn,
        avg_spawns: req.body.avg_spawns,
        spawn_time: req.body.spawn_time,
        multipliers: req.body.multipliers,
        weaknesses: req.body.weaknesses,
        next_evolution: req.body.next_evolution,
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'Hubo un error al guardar', error }); // shorthand
        res.end();
    });
    // aqui
};
exports.addPokemon = addPokemon;
const updatePokemon = (req, res) => {
    // const p = new PokemonSchema({
    // 	id: req.body.id,
    // 	gender: req.body.gender,
    // 	num: req.body.num,
    // 	name: req.body.name,
    // 	img: req.body.img,
    // 	type: req.body.type,
    // 	height: req.body.height, 
    // 	weight: req.body.weight, 
    // 	candy: req.body.candy, 
    // 	candy_count: req.body.candy_count, 
    // 	egg: req.body.egg, 
    // 	spawn_chance: req.body.spawn, 
    // 	avg_spawns: req.body.avg_spawns, 
    // 	spawn_time: req.body.spawn_time, 
    // 	multipliers: req.body.multipliers, 
    // 	weaknesses: req.body.weaknesses, 
    // 	next_evolution: req.body.next_evolution,
    // });
    pokemon_schema_1.PokemonSchema.updateOne({ _id: req.params.id }, {
        id: req.body.id,
        gender: req.body.gender,
        num: req.body.num,
        name: req.body.name,
        img: req.body.img,
        type: req.body.type,
        height: req.body.height,
        weight: req.body.weight,
        candy: req.body.candy,
        candy_count: req.body.candy_count,
        egg: req.body.egg,
        spawn_chance: req.body.spawn,
        avg_spawns: req.body.avg_spawns,
        spawn_time: req.body.spawn_time,
        multipliers: req.body.multipliers,
        weaknesses: req.body.weaknesses,
        next_evolution: req.body.next_evolution,
    }).then(updateResponse => {
        res.send({ message: 'Registro actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'Hubo un error al actualizar', error }); // shorthand
        res.end();
    });
};
exports.updatePokemon = updatePokemon;
const deletePokemon = (req, res) => {
    pokemon_schema_1.PokemonSchema.remove({ _id: req.params.id })
        .then(removeResult => {
        res.send({ message: 'Registro eliminado', removeResult });
        res.end();
    });
};
exports.deletePokemon = deletePokemon;
