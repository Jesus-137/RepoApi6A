import express from "express";

import { getAllController } from "./dependencies.ts";
import { getByIdMediaController } from "./dependencies.ts";

export const mediaRouter = express.Router();

mediaRouter.get(
  "/getAll/:id",
  getAllController.run.bind(getAllController)
);
mediaRouter.get(
  "/:id",
  getByIdMediaController.run.bind(getByIdMediaController)
);