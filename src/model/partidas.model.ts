import { ObjectId } from "mongoose";
import { BaseMotorista, Gender } from "./motorista.model";

export interface Partidas {
    player1: JSON;
    player2: JSON;
    winner: ObjectId;
}