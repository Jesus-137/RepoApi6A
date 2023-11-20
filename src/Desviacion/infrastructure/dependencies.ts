import { MysqlDesviacionRepository } from "./MysqlDesviacionRepository.ts";
import { CreateDesviacionUseCase } from "../application/CreateDesviacionUseCase.ts";
import { GetByIdDesviacionUseCase } from "../application/GetByIdDesviacionUseCase.ts";
import { GetAllUseCase } from "../application/GetAllUseCase.ts";
import { CreateDesviacionController } from "./controllers/CreateDesviacionController.ts";
import { GetAllController } from "./controllers/GetAllController.ts";
import { GetByIdDesviacionController } from "./controllers/GetByIdDesviacionController.ts";
import { MysqlReactionsRepository } from "../../Reactions/infrastructure/MysqlReactionsRepository.ts";
import { MysqlMediaRepository } from "../../Media/infrastructure/MysqlExpeRepository.ts";

export const mysqlDesviacionRepository = new MysqlDesviacionRepository();
const mysqlReactionsRepo = new MysqlReactionsRepository();
const mysqlMediaRepo = new MysqlMediaRepository();
export const createDesviacionUseCase = new CreateDesviacionUseCase(
  mysqlDesviacionRepository
);
export const getAllDesviacionUseCase = new GetAllUseCase(
  mysqlDesviacionRepository
);
export const getByIdDesviacionUseCase = new GetByIdDesviacionUseCase(
  mysqlDesviacionRepository
);
export const createDesviacionController = new CreateDesviacionController(
  createDesviacionUseCase, mysqlReactionsRepo, mysqlMediaRepo
);
export const getAllController = new GetAllController(
  getAllDesviacionUseCase, createDesviacionController
);
export const getByIdDesviacionController = new GetByIdDesviacionController(
  getByIdDesviacionUseCase
);