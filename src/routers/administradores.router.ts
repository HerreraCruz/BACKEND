import express from "express";
import { getAdministrador, getAdministradores } from "../controllers/administradores.controller";

const router = express.Router();

router.get("/", getAdministradores);
router.get("/:id", getAdministrador);


export default router;