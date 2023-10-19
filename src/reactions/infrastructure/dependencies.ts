import { MysqlReactionsRepository } from "./MysqlReactionsRepository";
import { CreateReactionUseCase } from "../application/CreateReactionUseCase";
import { GetByIdReactionUseCase } from "../application/GetByIReactionUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { CreateReactionController } from "./controllers/CreateReactionController";
import { GetAllReactionsController } from "./controllers/GetAllController";
import { GetByIdReactionController } from "./controllers/GetByIdReactionController";

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