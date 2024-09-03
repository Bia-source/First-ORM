import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.routes.js";
import { messageRouter } from "./routes/message.routes.js";
import { statusRouter } from "./routes/status.routes.js";
import { relashionshipRouter } from "./routes/relashionship.routes.js";

const app = express();
const port = 4000

// google solicitar alguma rota do meu projeto
// vai negado

// liberar todas as aplicacoes para acessar nossas rotas
app.use(cors());

// permite nosso js entender json
app.use(express.json());

// dando acesso as nossas rotas
app.use(userRouter);
app.use(messageRouter);
app.use(statusRouter);
app.use(relashionshipRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})