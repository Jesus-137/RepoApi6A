import express from "express";

import { createPorcentajeController } from "./dependencies";
import { getAllController } from "./dependencies";
import { getByIdPorcentajeController } from "./dependencies";

export const porcentajeRouter = express.Router();

porcentajeRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
);
porcentajeRouter.get(
  "/:id",
  getByIdPorcentajeController.run.bind(getByIdPorcentajeController)
);
porcentajeRouter.post(
  "/crear",
  createPorcentajeController.run.bind(createPorcentajeController)
);