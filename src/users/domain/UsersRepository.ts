import { Users } from "./Users";

export interface UsersRepository {
  getAll(): Promise<Users[] | null>;
  getById(id: number): Promise<Users | null>
  createUser(
    id_raspberry: number,
    userName: string,
    password: string
  ): Promise<Users | null>;
}
