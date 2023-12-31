import express  from "express";

import { createRaspController } from "./dependencies";
import { getAllController } from "./dependencies";
import { getByIdController } from "./dependencies";

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