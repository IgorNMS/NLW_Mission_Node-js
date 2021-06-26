import "reflect-metadata";
import express, {NextFunction, Request, Response} from "express";
import "express-async-errors";
import "./database";
import {router} from "./routes";
import cors from "cors";

const app = express();

app.use(cors(
    //origin: "limitar o endereco dos sites que podem acessar a aplicação"
));
app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    let erroValidate = err;
    if (err instanceof Error) {
        return response.status(400).json({error: err.message});
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
        error: erroValidate.message
    });
});

app.listen(3030, () => console.log("Server Running on port 3030"));