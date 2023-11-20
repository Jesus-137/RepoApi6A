import { MysqlUsersRepository } from "./MysqlUsersRepository.ts";
import { CreateUserUseCase } from "../application/CreateUserUseCase.ts";
import { GetByIdPorcentajeUseCase } from "../application/GetByIdUserUseCase.ts";
import { GetAllUseCase } from "../application/GetAllUseCase.ts";
import { LoginUseCase } from "../application/LoginUseCase.ts";
import { CreateReactionController } from "./controllers/CreateUserController.ts";
import { GetAllController } from "./controllers/GetAllController.ts";
import { GetByIdReactionController } from "./controllers/GetByIdReactionController.ts";
import { LoginController } from "./controllers/LoginController.ts";

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
export const loginUseCase = new LoginUseCase(
  mysqlReactionsRepository
)
export const createUserController = new CreateReactionController(
  createUserUseCase
);
export const getAllController = new GetAllController(
  getAllUseCase
);
export const getByIdUserController = new GetByIdReactionController(
  getByIdUserUseCase
);
export const loginController = new LoginController(
  loginUseCase
)
