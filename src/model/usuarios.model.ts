import { BaseMotorista, Gender } from "./motorista.model";

export interface Usuario {
    firstName: string;
    lastName: string;
    gender: Gender;
    pokemons: Array<BaseMotorista>;
    level: string;
}