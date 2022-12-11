import { Request, Response } from "express";
import { MotoristaSchema } from "../model/motorista.schema";


export const getMotoristas = (req: Request, res: Response) => {
	MotoristaSchema.find().limit(150)
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};


export const getMotorista = (req: Request, res: Response) => {
	MotoristaSchema.find({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

export const addMotorista = (req: Request, res: Response) => {
	const p = new MotoristaSchema({
		id: req.body.id,
		gender: req.body.gender,
		num: req.body.num,
		name: req.body.name,
		img: req.body.img,
	});
  p.save().then(saveResponse => {
    res.send(saveResponse);
    res.end();
  }).catch(error=>{
    res.send({message: 'Hubo un error al guardar', error}); // shorthand
    res.end();
  });
  // aqui
};

export const updateMotorista = (req: Request, res: Response) => {
	
  MotoristaSchema.updateOne({_id: req.params.id}, {
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

export const deleteMotorista = (req: Request, res: Response) => {
	MotoristaSchema.remove({_id: req.params.id})
	.then(removeResult => {
		res.send({message: 'Registro eliminado', removeResult});
		res.end();
	});
	
};
