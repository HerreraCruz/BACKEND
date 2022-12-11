import express from "express";
import { addUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from "../controllers/usuarios.controller";

const router = express.Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.put("/:id/usuarios", addUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);


export default router;