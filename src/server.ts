import { Signale } from "signale";
import express from "express";
import { reactionsRouter } from "./Reactions/infrastructure/ReactionsRouter"; 
import { usersRouter } from "./Users/infrastructure/UsersRouter";
import { expeRouter } from "./Experimento/infrastructure/ExpeRouter";
import { raspRouters } from "./Raspberry/infrastructure/RaspRouters";
import { mediaRouter } from "./Media/infrastructure/MediaRouter";
import { desviacionRouter } from "./Desviacion/infrastructure/DesviacionRouter";
import cors from 'cors';

const app = express();
const signale = new Signale();
app.use(express.json());
app.use(cors());
app.use("/user", usersRouter);
app.use("/reactions", reactionsRouter);
app.use("/expe", expeRouter);
app.use("/rasp", raspRouters);
app.use("/media", mediaRouter);
app.use("/desviacion", desviacionRouter);

const port = 3003;
const host = '0.0.0.0';

app.listen(port, host, () => {
  signale.success("Server online in port 3003");
});
