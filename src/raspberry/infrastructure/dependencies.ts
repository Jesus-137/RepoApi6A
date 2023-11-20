import { MysqlRaspRepository } from "./MysqlRaspRepository.ts";
import { CreateRaspUseCase } from "../application/CreateRaspUseCase.ts";
import { GetAllUseCase } from "../application/GetAllUseCase.ts";
import { GetByIdUseCase } from "../application/GetByIdUseCase.ts";
import { CreateRaspController } from "./controlers/CreateRaspController.ts";
import { GetAllController } from "./controlers/GetAllController.ts";
import { GetByIdController } from "./controlers/GetByIdController.ts";

export const mysqlRaspRepo = new MysqlRaspRepository();
export const createRaspUseCase = new CreateRaspUseCase(
    mysqlRaspRepo
);
export const getAllUseCase = new GetAllUseCase(
    mysqlRaspRepo
);
export const getByIdUseCase = new GetByIdUseCase(
    mysqlRaspRepo
);
export const createRaspController = new CreateRaspController(
    createRaspUseCase
);
export const getAllController = new GetAllController(
    getAllUseCase
);
export const  getByIdController = new GetByIdController(
    getByIdUseCase
)