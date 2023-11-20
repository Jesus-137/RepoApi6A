import { MysqlMediaRepository } from "./MysqlExpeRepository.ts";
import { CreateMediaUseCase } from "../application/CreateMediaUseCase.ts";
import { GetByIdMediaUseCase } from "../application/GetByIdMediaUseCase.ts";
import { GetAllUseCase } from "../application/GetAllUseCase.ts";
import { CreateMediaController } from "./controllers/CreateMediaController.ts";
import { GetAllController } from "./controllers/GetAllController.ts";
import { GetByIdExpeController } from "./controllers/GetByIdExpeController.ts";
import { MysqlReactionsRepository } from "../../Reactions/infrastructure/MysqlReactionsRepository.ts";

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