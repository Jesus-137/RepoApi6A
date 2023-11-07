import { MysqlMediaRepository } from "./MysqlExpeRepository";
import { CreateMediaUseCase } from "../application/CreateMediaUseCase";
import { GetByIdMediaUseCase } from "../application/GetByIdMediaUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { CreateMediaController } from "./controllers/CreateMediaController";
import { GetAllController } from "./controllers/GetAllController";
import { GetByIdExpeController } from "./controllers/GetByIdExpeController";
import { MysqlReactionsRepository } from "../../Reactions/infrastructure/MysqlReactionsRepository";

export const mysqlMediaRepository = new MysqlMediaRepository();
const mysqlReactionsRepo = new MysqlReactionsRepository();
export const createMediaUseCase = new CreateMediaUseCase(
  mysqlMediaRepository
);
export const getAllMediaUseCase = new GetAllUseCase(
  mysqlMediaRepository
);
export const getByIdMediaUseCase = new GetByIdMediaUseCase(
  mysqlMediaRepository
);
export const createMediaController = new CreateMediaController(
  createMediaUseCase, mysqlReactionsRepo
);
export const getAllController = new GetAllController(
  getAllMediaUseCase, createMediaController
);
export const getByIdMediaController = new GetByIdExpeController(
  getByIdMediaUseCase
);