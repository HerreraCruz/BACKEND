import { ObjectId } from "mongoose";
import { BasePokemon, Gender } from "./motorista.model";

export interface Partidas {
    player1: JSON;
    player2: JSON;
    winner: ObjectId;
}