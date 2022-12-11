import { Request, Response } from "express";
import { UsuarioSchema } from "../model/usuario.schema";
import mongoose, {ObjectId}  from "mongoose";
import { Console } from "console";

export const getUsuarios = (req: Request, res: Response) => {
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


export const getUsuario = (req: Request, res: Response) => {
	UsuarioSchema.find({ _id: req.params.firstName})
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};


export const addUsuario = (req: Request, res: Response) => {
  UsuarioSchema.updateOne({_id: req.params.id},
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

export const updateUsuario = (req: Request, res: Response) => {
	
  UsuarioSchema.updateOne({_id: req.params.id}, {
		id: req.body.id,
		gender: req.body.gender,
		num: req.body.num,
		name: req.body.name,
		img: req.body.img,
		
	}).then(updateResponse => {
    res.send({message: 'Registro actualizado', updateResponse});
    res.end();
  }).catch(error=>{
    res.send({message: 'Hubo un error al actualizar', error}); // shorthand
    res.end();
  });
};

export const deleteUsuario = (req: Request, res: Response) => {
	UsuarioSchema.remove({_id: req.params.id})
	.then(removeResult => {
		res.send({message: 'Registro eliminado', removeResult});
		res.end();
	});
	
};