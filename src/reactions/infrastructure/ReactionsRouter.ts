import express from "express";

import { createReactionController } from "./dependencies.ts";
import { getAllController } from "./dependencies.ts";
import { getByIdReactionController } from "./dependencies.ts";

export const reactionsRouter = express.Router();

reactionsRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
);
reactionsRouter.get(
  "/:id",
  getByIdReactionController.run.bind(getByIdReactionController)
);
reactionsRouter.post(
  "/crear",
  createReactionController.run.bind(createReactionController)
);