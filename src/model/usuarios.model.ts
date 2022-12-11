import { BasePokemon, Gender } from "./motorista.model";

export interface PokemonMaster {
    firstName: string;
    lastName: string;
    gender: Gender;
    pokemons: Array<BasePokemon>;
    level: string;
}