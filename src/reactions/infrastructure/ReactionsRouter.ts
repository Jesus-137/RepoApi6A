import express from "express";

import { createReactionController } from "./dependencies";
import { getByIdReactionController } from "./dependencies";

export const reactionsRouter = express.Router();

reactionsRouter.post(
  "/getbyname",
  getByIdReactionController.run.bind(getByIdReactionController)
);
reactionsRouter.post(
  "/crear",
  createReactionController.run.bind(createReactionController)
);