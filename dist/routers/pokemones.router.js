"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pokemones_controller_1 = require("../controllers/pokemones.controller");
const routerMasters = express_1.default.Router();
routerMasters.get("/", pokemones_controller_1.getPokemones);
routerMasters.get("/:id", pokemones_controller_1.getPokemon);
routerMasters.post("/", pokemones_controller_1.addPokemon);
routerMasters.put("/:id", pokemones_controller_1.updatePokemon);
routerMasters.delete("/:id", pokemones_controller_1.deletePokemon);
exports.default = routerMasters;
