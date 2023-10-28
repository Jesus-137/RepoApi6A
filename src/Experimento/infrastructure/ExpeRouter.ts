import express from "express";

import { createPorcentajeController } from "./dependencies";
import { getAllController } from "./dependencies";
import { getByIdPorcentajeController } from "./dependencies";

export const expeRouter = express.Router();

expeRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
);
expeRouter.get(
  "/:id",
  getByIdPorcentajeController.run.bind(getByIdPorcentajeController)
);
expeRouter.post(
  "/crear",
  createPorcentajeController.run.bind(createPorcentajeController)
);