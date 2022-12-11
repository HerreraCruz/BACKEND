import express from "express";
import { addUsuario, getUsuario, getUsuarios } from "../controllers/usuarios.controller";

const router = express.Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.put("/:id/pokemons", addUsuario);

export default router;