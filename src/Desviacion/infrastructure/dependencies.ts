import { MysqlDesviacionRepository } from "./MysqlDesviacionRepository";
import { CreateDesviacionUseCase } from "../application/CreateDesviacionUseCase";
import { GetByIdDesviacionUseCase } from "../application/GetByIdDesviacionUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { CreateDesviacionController } from "./controllers/CreateDesviacionController";
import { GetAllController } from "./controllers/GetAllController";
import { GetByIdDesviacionController } from "./controllers/GetByIdDesviacionController";
import { MysqlReactionsRepository } from "../../Reactions/infrastructure/MysqlReactionsRepository";
import { MysqlMediaRepository } from "../../Media/infrastructure/MysqlExpeRepository";

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