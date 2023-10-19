import { MysqlUsersRepository } from "./MysqlUsersRepository";
import { CreateUserUseCase } from "../application/CreateUserUseCase";
import { GetByIdPorcentajeUseCase } from "../application/GetByIdUserUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { CreateReactionController } from "./controllers/CreateUserController";
import { GetAllController } from "./controllers/GetAllController";
import { GetByIdReactionController } from "./controllers/GetByIdReactionController";

export const mysqlReactionsRepository = new MysqlUsersRepository();
export const createUserUseCase = new CreateUserUseCase(
  mysqlReactionsRepository
);
export const getAllUseCase = new GetAllUseCase(
  mysqlReactionsRepository
);
export const getByIdUserUseCase = new GetByIdPorcentajeUseCase(
  mysqlReactionsRepository
);
export const createUserController = new CreateReactionController(
  createUserUseCase
);
export const getAllController = new GetAllController(
  getAllUseCase
);
export const getByIdUserController = new GetByIdReactionController(
  getByIdUserUseCase
);