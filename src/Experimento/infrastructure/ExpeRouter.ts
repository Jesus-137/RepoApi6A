import express from "express";

import { createPorcentajeController } from "./dependencies.ts";
import { getAllController } from "./dependencies.ts";
import { getByIdPorcentajeController } from "./dependencies.ts";

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