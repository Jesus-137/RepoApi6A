import { MysqlPorcentajeRepository } from "./MysqlExpeRepository";
import { CreateExpeUseCase } from "../application/CreateExpeUseCase";
import { GetByIdExpeUseCase } from "../application/GetByIdExpeUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { CreateExpeController } from "./controllers/CreateExpeController";
import { GetAllController } from "./controllers/GetAllController";
import { GetByIdExpeController } from "./controllers/GetByIdExpeController";

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