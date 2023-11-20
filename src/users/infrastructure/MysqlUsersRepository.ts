import { query } from "../../database/mysql.ts";
import { Users } from "../domain/Users.ts";
import { UsersRepository } from "../domain/UsersRepository.ts";

export class MysqlUsersRepository implements UsersRepository {
  async login(userName: string, password: string): Promise<Users | null> {
    const sql = "SELECT * FROM users WHERE userName=? and password=?";
    const params: any[]=[userName, password];
    try {
      const result: any= await query(sql, params);
      const user = result[0][0];
      console.log(user)
      return user;
    } catch (error) {
      return null;
    }
  }
  async getById (id: number): Promise<Users | null> {
    const sql = "SELECT * FROM users WHERE id=?";
    const params: any[] = [id];
    try {
      const result: any = await query(sql, params);
      const user = result[0][0]
      console.log(user)
      return new Users(
        user.id,
        user.username,
        user.password,
        user.correo
      );
    } catch (error) {
      return null;
    }
  }
  async getAll(): Promise<Users[] | null> {
    const sql = "SELECT * FROM users";
    try {
      const [data]: any = await query(sql, []);
      const dataUsers = Object.values(JSON.parse(JSON.stringify(data)));
      return dataUsers.map(
        (user: any) =>
          new Users(
            user.id,
            user.username,
            user.password,
            user.correo
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createUser(
    userName: string,
    password: string,
    correo: string,
  ): Promise<Users | null> {
    const sql = "INSERT INTO users (userName, password, correo) VALUES (?, ?, ?)";
    const params: any[] = [userName, password, correo];
    try {
      const [result]: any = await query(sql, params);
      return new Users(result.insertId, userName, password, correo);
    } catch (error) {
      return null;
    }
  }
}
