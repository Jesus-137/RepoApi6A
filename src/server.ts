import { Signale } from "signale";
import express from "express";
import { reactionsRouter } from "./reactions/infrastructure/ReactionsRouter"; 
import { usersRouter } from "./users/infrastructure/UsersRouter";
import { porcentajeRouter } from "./Porcentaje_Reaction/infrastructure/porcentajeRouter";
import { raspRouters } from "./raspberry/infrastructure/RaspRouters";
import cors from 'cors';

const app = express();
const signale = new Signale();
app.use(express.json());
app.use(cors());
app.use("/user", usersRouter);
app.use("/reactions", reactionsRouter);
app.use("/porcentaje", porcentajeRouter);
app.use("/rasp", raspRouters)

const port = 3003;
const host = '0.0.0.0';

app.listen(port, host, () => {
  signale.success("Server online in port 3003");
});
