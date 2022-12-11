import express from "express";
import { addPokemonToMaster, getPokemonMasters } from "../controllers/usuarios.controller";

const router = express.Router();

router.get("/", getPokemonMasters);
router.get("/:id", getPokemonMasters);
router.put("/:id/pokemons", addPokemonToMaster);

export default router;