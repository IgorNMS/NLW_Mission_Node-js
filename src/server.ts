import express, {request, response} from "express";
// precisa se instalar as bibliotecas de tipo, que geralmente ficam no caminho: @types/...
// A do express e @types/express
// Então o comando a ser usado: yarn add @types/express -D o menos D significa que esta sendo instalado
// somente no ambiente de desenvolvimento

const app = express();

app.get("/test", (request, response) => {
   return response.send("salve");
});
app.post("/testPost", (request, response) => {
   return response.send("salve post")
});

app.listen(3030, () => console.log("Server Running on port 3030"));