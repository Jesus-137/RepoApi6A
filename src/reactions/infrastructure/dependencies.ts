import { MysqlReactionsRepository } from "./MysqlReactionsRepository.ts";
import { CreateReactionUseCase } from "../application/CreateReactionUseCase.ts";
import { GetByIdReactionUseCase } from "../application/GetByIReactionUseCase.ts";
import { GetAllUseCase } from "../application/GetAllUseCase.ts";
import { CreateReactionController } from "./controllers/CreateReactionController.ts";
import { GetAllReactionsController } from "./controllers/GetAllController.ts";
import { GetByIdReactionController } from "./controllers/GetByIdReactionController.ts";

export const mysqlReactionsRepository = new MysqlReactionsRepository();
export const createReactionUseCase = new CreateReactionUseCase(
  mysqlReactionsRepository
);
export const getAllUseCase = new GetAllUseCase(
  mysqlReactionsRepository
);
export const getByIdReactionUseCase = new GetByIdReactionUseCase(
  mysqlReactionsRepository
);
export const createReactionController = new CreateReactionController(
  createReactionUseCase
);
export const getAllController = new GetAllReactionsController(
  getAllUseCase
);
export const getByIdReactionController = new GetByIdReactionController(
  getByIdReactionUseCase
);