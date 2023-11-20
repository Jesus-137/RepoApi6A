import { MysqlPorcentajeRepository } from "./MysqlExpeRepository.ts";
import { CreateExpeUseCase } from "../application/CreateExpeUseCase.ts";
import { GetByIdExpeUseCase } from "../application/GetByIdExpeUseCase.ts";
import { GetAllUseCase } from "../application/GetAllUseCase.ts";
import { CreateExpeController } from "./controllers/CreateExpeController.ts";
import { GetAllController } from "./controllers/GetAllController.ts";
import { GetByIdExpeController } from "./controllers/GetByIdExpeController.ts";

export const mysqlReactionsRepository = new MysqlPorcentajeRepository();
export const createPorcentajeUseCase = new CreateExpeUseCase(
  mysqlReactionsRepository
);
export const getAllUseCase = new GetAllUseCase(
  mysqlReactionsRepository
);
export const getByIdPorcentajeUseCase = new GetByIdExpeUseCase(
  mysqlReactionsRepository
);
export const createPorcentajeController = new CreateExpeController(
  createPorcentajeUseCase
);
export const getAllController = new GetAllController(
  getAllUseCase
);
export const getByIdPorcentajeController = new GetByIdExpeController(
  getByIdPorcentajeUseCase
);