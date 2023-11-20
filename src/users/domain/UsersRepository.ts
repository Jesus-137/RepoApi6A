import { Users } from "./Users.ts";

export interface UsersRepository {
  getAll(): Promise<Users[] | null>;
  getById(id: number): Promise<Users | null>
  createUser(
    userName: string,
    password: string,
    correo: string
  ): Promise<Users | null>;
  login(
    userName: string,
    password: string
  ): Promise <Users | null>;
}
