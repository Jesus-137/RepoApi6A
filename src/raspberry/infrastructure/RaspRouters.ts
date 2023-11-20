import express  from "express";

import { createRaspController } from "./dependencies.ts";
import { getAllController } from "./dependencies.ts";
import { getByIdController } from "./dependencies.ts";

export const raspRouters = express.Router();

raspRouters.get(
    '/getAll',
    getAllController.run.bind(getAllController)
);
raspRouters.get(
    '/:id',
    getByIdController.run.bind(getByIdController)
);
raspRouters.post(
    '/crear',
    createRaspController.run.bind(createRaspController)
);