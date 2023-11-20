import express from "express";

import { createUserController } from "./dependencies";
import { getAllController } from "./dependencies";
import { getByIdUserController } from "./dependencies";
import { loginController } from "./dependencies";

export const usersRouter = express.Router();

usersRouter.get(
  "/getAll",
  getAllController.run.bind(getAllController)
);
usersRouter.get(
  "/:id",
  getByIdUserController.run.bind(getByIdUserController)
);
usersRouter.post(
  "/crear",
  createUserController.run.bind(createUserController)
);
usersRouter.post(
  "/login",
  loginController.run.bind(loginController)
);