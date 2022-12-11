import mongoose  from "mongoose";
import { PokemonMaster } from "./usuarios.model";
import { BasePokemon } from "./motorista.model";

const schema = new mongoose.Schema<PokemonMaster>({
  firstName: String,
  lastName: String,
  gender: String,
  pokemons: Array<BasePokemon>,
  level: String
});

export const PokemonMastersSchema = mongoose.model('pokemonmasters',schema);
