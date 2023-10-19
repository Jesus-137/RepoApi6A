import { MysqlPorcentajeRepository } from "./MysqlPorcentajeRepository";
import { CreatePorcentajeUseCase } from "../application/CreatePorcentajeUseCase";
import { GetByIdPorcentajeUseCase } from "../application/GetByIdPorcentajeUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { CreatePorcentajeController } from "./controllers/CreatePorcentajeController";
import { GetAllController } from "./controllers/GetAllController";
import { GetByIdPorcentajeController } from "./controllers/GetByIdPorcentajeController";

export const mysqlReactionsRepository = new MysqlPorcentajeRepository();
export const createPorcentajeUseCase = new CreatePorcentajeUseCase(
  mysqlReactionsRepository
);
export const getAllUseCase = new GetAllUseCase(
  mysqlReactionsRepository
);
export const getByIdPorcentajeUseCase = new GetByIdPorcentajeUseCase(
  mysqlReactionsRepository
);
export const createPorcentajeController = new CreatePorcentajeController(
  createPorcentajeUseCase
);
export const getAllController = new GetAllController(
  getAllUseCase
);
export const getByIdPorcentajeController = new GetByIdPorcentajeController(
  getByIdPorcentajeUseCase
);