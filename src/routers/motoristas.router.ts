import express from "express";
import { addMotorista, deleteMotorista, getMotorista, getMotoristas, updateMotorista } from "../controllers/motoristas.controller";

const routerMasters = express.Router();

routerMasters.get("/", getMotoristass);
routerMasters.get("/:id", getMotorista);
routerMasters.post("/", addMotorista);
routerMasters.put("/:id", updateMotorista);
routerMasters.delete("/:id", deleteMotorista);

export default routerMasters;