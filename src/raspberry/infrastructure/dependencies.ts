import { MysqlRaspRepository } from "./MysqlRaspRepository";
import { CreateRaspUseCase } from "../application/CreateRaspUseCase";
import { GetAllUseCase } from "../application/GetAllUseCase";
import { GetByIdUseCase } from "../application/GetByIdUseCase";
import { CreateRaspController } from "./controlers/CreateRaspController";
import { GetAllController } from "./controlers/GetAllController";
import { GetByIdController } from "./controlers/GetByIdController";

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