import express from "express";

import { createUserController } from "./dependencies.ts";
import { getAllController } from "./dependencies.ts";
import { getByIdUserController } from "./dependencies.ts";
import { loginController } from "./dependencies.ts";

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