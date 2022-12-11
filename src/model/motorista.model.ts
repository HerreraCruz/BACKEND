import mongoose from "mongoose";

export type Gender = 'Masculino' | 'Femenino' | 'Otro';

export interface BaseMotorista {
    _id?: mongoose.Types.ObjectId,
    name: string;
    img: string;
}

export interface Motorista extends BaseMotorista {
  id:             number;
  gender?:        Gender;
  num:            string;
}

export interface Evolution {
  num:  string;
  name: string;
}