"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const pokemones_router_1 = __importDefault(require("./routers/pokemones.router"));
const pokemon_masters_router_1 = __importDefault(require("./routers/pokemon-masters.router"));
const database_1 = require("./utils/database");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const database = new database_1.Database(); //Se conecta a mongo
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/pokemones', pokemones_router_1.default);
app.use('/pokemon-masters', pokemon_masters_router_1.default);
app.listen(port, () => {
    console.log(`Servidor modificado https://localhost:${port}`);
});
