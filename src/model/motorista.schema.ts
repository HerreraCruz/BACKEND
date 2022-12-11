import mongoose  from "mongoose";
import { Motorista } from "./motorista.model";

const schema = new mongoose.Schema<Motorista>({
  _id: mongoose.Types.ObjectId,
  id:             Number,
  gender:         String,
  num:            String,
  name:           String,
  img:            String,
});

export const MotoristaSchema = mongoose.model('motorista',schema);
