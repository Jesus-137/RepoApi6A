import { Users } from "./Users";

export interface UsersRepository {
  getAll(): Promise<Users[] | null>;
  getById(id: number): Promise<Users | null>
  createUser(
    userName: string,
    password: string,
    correo: string
  ): Promise<Users | null>;
}
