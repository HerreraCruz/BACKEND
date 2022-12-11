"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pokemones_controller_1 = require("../controllers/pokemones.controller");
const router = express_1.default.Router();
router.get("/", pokemones_controller_1.getPokemones);
router.get("/:id", pokemones_controller_1.getPokemon);
router.post("/", pokemones_controller_1.addPokemon);
router.put("/:id", pokemones_controller_1.updatePokemon);
router.delete("/:id", pokemones_controller_1.deletePokemon);
exports.default = router;
