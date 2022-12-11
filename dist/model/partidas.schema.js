"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonMastersSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    player1: JSON,
    player2: JSON,
    winner: Object,
});
exports.PokemonMastersSchema = mongoose_1.default.model('pokemonmasters', schema);
