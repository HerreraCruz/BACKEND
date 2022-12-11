import mongoose  from "mongoose";
import { PokemonMaster } from "./usuarios.model";
import { BasePokemon } from "./motorista.model";
import { Partidas } from "./partidas.model";

const schema = new mongoose.Schema<Partidas>({
  player1: JSON,
  player2: JSON,
  winner: Object,
});

export const PokemonMastersSchema = mongoose.model('pokemonmasters',schema);