import mongoose  from "mongoose";
import { Usuario } from "./usuarios.model";
import { BaseMotorista } from "./motorista.model";
import { Partidas } from "./pedidos.model";

const schema = new mongoose.Schema<Partidas>({
  player1: JSON,
  player2: JSON,
  winner: Object,
});

export const UsuariosSchema = mongoose.model('usuarios',schema);