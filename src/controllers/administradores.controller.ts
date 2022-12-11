import { Request, Response } from "express";
import { UsuarioSchema } from "../model/usuario.schema";
import mongoose, {ObjectId}  from "mongoose";
import { Console } from "console";

export const getAdministradores = (req: Request, res: Response) => {
  UsuarioSchema.find()
		.then((result) => {
			res.send({message: 'Maestros pokemon',result});
			res.end();
		})
		.catch((error) => {
      res.send(error);
			res.end();
    });
}


export const getAdministrador = (req: Request, res: Response) => {
	UsuarioSchema.find({ _id: req.params.firstName})
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

