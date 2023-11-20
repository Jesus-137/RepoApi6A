import express from "express";

import { createReactionController } from "./dependencies";
import { getAllController } from "./dependencies";
import { getByIdReactionController } from "./dependencies";

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