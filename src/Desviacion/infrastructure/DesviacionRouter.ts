import express from "express";

import { getAllController } from "./dependencies";
import { getByIdDesviacionController } from "./dependencies";

export const desviacionRouter = express.Router();

desviacionRouter.get(
  "/getAll/:id",
  getAllController.run.bind(getAllController)
);
desviacionRouter.get(
  "/:id",
  getByIdDesviacionController.run.bind(getByIdDesviacionController)
);