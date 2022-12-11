import mongoose  from "mongoose";
import { Usuario } from "./usuarios.model";
import { BaseMotorista } from "./motorista.model";

const schema = new mongoose.Schema<Usuario>({
  firstName: String,
  lastName: String,
  gender: String,
  pokemons: Array<BaseMotorista>,
});

export const UsuarioSchema = mongoose.model('usuario',schema);
