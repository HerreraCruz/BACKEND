"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Types.ObjectId,
    id: Number,
    gender: String,
    num: String,
    name: String,
    img: String,
    type: (Array),
    height: String,
    weight: String,
    candy: String,
    candy_count: Number,
    egg: String,
    spawn_chance: Number,
    avg_spawns: Number,
    spawn_time: String,
    multipliers: (Array),
    weaknesses: (Array),
    prev_evolution: (Array),
    next_evolution: (Array),
});
exports.PokemonSchema = mongoose_1.default.model('pokemones', schema);
