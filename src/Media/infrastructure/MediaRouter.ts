import express from "express";

import { getAllController } from "./dependencies";
import { getByIdMediaController } from "./dependencies";

export const mediaRouter = express.Router();

mediaRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
);
mediaRouter.get(
  "/:id",
  getByIdMediaController.run.bind(getByIdMediaController)
);