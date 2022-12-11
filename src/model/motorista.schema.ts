import mongoose  from "mongoose";
import { Evolution, Motorista, Gender } from "./motorista.model";

const schema = new mongoose.Schema<Motorista>({
  _id: mongoose.Types.ObjectId,
  id:             Number,
  gender:         String,
  num:            String,
  name:           String,
  img:            String,
});

export const MotoristaSchema = mongoose.model('motorista',schema);
