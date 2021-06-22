import "reflect-metadata";
import express from "express";
import "./database";
import {router} from "./routes";
// adicionar no notion
// precisa se instalar as bibliotecas de tipo, que geralmente ficam no caminho: @types/...
// A do express e @types/express
// Então o comando a ser usado: yarn add @types/express -D o menos D significa que esta sendo instalado
// somente no ambiente de desenvolvimento

const app = express();

app.use(express.json());
app.use(router);

app.listen(3030, () => console.log("Server Running on port 3030"));