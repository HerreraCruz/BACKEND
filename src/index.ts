import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import pokemonesRouter from "./routers/motoristas.router";
import pokemoneMastersRouter from "./routers/usuarios.router";
import { Database } from "./utils/database";
import cors from 'cors';


dotenv.config();
const database:Database = new Database(); //Se conecta a mongo
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use('/usuarios', usuariosRouter);
app.use('/motoristas', motoristasRouter);
app.use('/administradores', administradoresRouter);
app.use('/asociados', asociadosRouter);

app.listen(port, () => {
	console.log(`Servidor modificado https://localhost:${port}`);
});
