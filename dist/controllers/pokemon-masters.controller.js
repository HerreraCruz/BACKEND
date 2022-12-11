"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPokemonToMaster = exports.getPokemonPokemon = exports.getPokemonMasters = void 0;
const pokemon_master_schema_1 = require("../model/pokemon-master.schema");
const mongoose_1 = __importDefault(require("mongoose"));
const getPokemonMasters = (req, res) => {
    pokemon_master_schema_1.PokemonMastersSchema.find()
        .then((result) => {
        res.send({ message: 'Maestros pokemon', result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.getPokemonMasters = getPokemonMasters;
//obtener un maestro
const getPokemonPokemon = (req, res) => {
    pokemon_master_schema_1.PokemonMastersSchema.find({ _id: req.params.firstName })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.getPokemonPokemon = getPokemonPokemon;
// Agregar pokemon a un maestro pokemon
const addPokemonToMaster = (req, res) => {
    pokemon_master_schema_1.PokemonMastersSchema.updateOne({ _id: req.params.id }, {
        $push: {
            pokemons: {
                _id: new mongoose_1.default.Types.ObjectId(req.body.id),
                name: req.body.name,
                img: req.body.img
            }
        }
    }).then(result => {
        res.send({ message: 'Pokemon agregado', result });
        res.end();
    }).catch(error => {
        res.send({ message: 'Ocurrio un error', error });
        res.end();
    });
};
exports.addPokemonToMaster = addPokemonToMaster;
