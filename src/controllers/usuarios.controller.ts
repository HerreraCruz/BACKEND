import { Request, Response } from "express";
import { PokemonMastersSchema } from "../model/usuario.schema";
import mongoose, {ObjectId}  from "mongoose";
import { Console } from "console";

export const getUsuarios = (req: Request, res: Response) => {
  PokemonMastersSchema.find()
		.then((result) => {
			res.send({message: 'Maestros pokemon',result});
			res.end();
		})
		.catch((error) => {
      res.send(error);
			res.end();
    });
}


export const getUsuario = (req: Request, res: Response) => {
	PokemonMastersSchema.find({ _id: req.params.firstName})
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};


export const addUsuario = (req: Request, res: Response) => {
  PokemonMastersSchema.updateOne({_id: req.params.id},
    {
      $push: { 
          pokemons: {
            _id: new mongoose.Types.ObjectId(req.body.id),
            name: req.body.name,
            img: req.body.img
          } 
      }
    }
  ).then(result => {
    res.send({message: 'Pokemon agregado', result});
    res.end();
  }).catch(error => {
    res.send({message: 'Ocurrio un error', error});
    res.end();
  })
};